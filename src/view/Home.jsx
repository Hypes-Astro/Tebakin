import { Link } from "react-router-dom";
import bg1 from "../assets/bg-1.svg"
import bg2 from "../assets/bg-2.svg"

const Home = () => {
    return(
        <div className="bg-bgPrimer w-screen h-screen relative  overflow-hidden">
            {/* background svg */}
            <div className="absolute w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${bg1})` }}></div>
            <div className="absolute w-full h-full bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 bg-cover  bg-bottom " style={{ backgroundImage: `url(${bg2})` }}  draggable="false"></div>
            {/* end background svg */}

            <div className="relative w-screen h-screen  flex justify-center items-center flex-col text-center">
                <h1 className="relative font-bold text-[80px]">Tebakin</h1>
                <p className="relative mb-10 text-white">Uncover Words, Ignite Curiosity</p>
                
                <Link to="playground" className="bg-white w-[10%] relative hover:bg-bgAksen rounded-md">
                    <button >Klik me</button>
                </Link>
            </div>
        </div>
    

    );
}

export default Home;