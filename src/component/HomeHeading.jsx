import { Link } from "react-router-dom";
import Icon from "../assets/IconTebakin.jpg"


const HomeHeading = () => {
    return(
        <div className="w-screen h-screen font-poppins ">
           
            <div className="relative w-screen flex justify-center items-center flex-col text-center">
                <img src={Icon} alt="" className="w-28"/>
                <h1 className="relative font-bold text-[80px] font-poppins">Jelajahi Tebakan 
                    <br></br>di<span className="text-textPrimer"> Tebakin !</span>
                </h1>
                
                <p className="relative mb-10 text-[20px] font-poppins w-1/3 text-textSecondary">Asah kejelianmu, raih keseruan, dan tingkatkan kemampuan dengan Tebakin setiap hari</p>
                
                <Link to="playground" className="w-[20vw] ">
                    <button className="btn bg-black  text-white hover:text-black hover:bg-white rounded-full btn-xs sm:btn-sm md:btn-md lg:btn-lg">Mari mulai</button>
                </Link>
            </div>
        </div>
    );
}


export default HomeHeading;