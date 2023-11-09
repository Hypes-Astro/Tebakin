import React, { useState, useEffect } from 'react';
import datajson from "../data/Bdata.json";

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [shuffledWord, setShuffledWord] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [randomWord, setRandomWord] = useState('');

  useEffect(() => {
    generateRandomWord();
  }, []);

  const generateRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * datajson.length);
    const newRandomWord = datajson[randomIndex].kata.toUpperCase();
    setRandomWord(newRandomWord);
    setShuffledWord(shuffleString(newRandomWord));
    setIsCorrect(false);
  };

  const shuffleString = (str) => {
    const shuffledArray = str.split('').sort(() => Math.random() - 0.5);
    return shuffledArray.join('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckClick = (e) => {
    e.preventDefault(); // Menghentikan pengiriman formulir agar tidak mengarahkan ulang halaman
    if (inputValue.toUpperCase() === randomWord) {
      setIsCorrect(true);
      generateRandomWord(); // Memanggil generateRandomWord() untuk mengganti kata acak
      alert('Correct! Kata yang benar adalah: ' + randomWord);
    } else {
      setIsCorrect(false);
      alert('Incorrect! Kata yang benar adalah: ' + randomWord + ", Anda mengetik: " + inputValue);
    }
    setInputValue(''); // Mengosongkan input setelah memeriksa jawaban
  };

  return (
    <form onSubmit={handleCheckClick}>
      <div>
        <div className="text-center text-lg">{shuffledWord}</div>
        <div className="flex justify-center">
          <input
            className='rounded-sm p-4'
            type='text'
            placeholder='Ketik disini'
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex w-full mt-5 justify-center align-middle">
          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Check
          </button>
        </div>
        {isCorrect && <div className="text-green-500 text-center">Correct!</div>}
      </div>
    </form>
  );
};

export default InputForm;
