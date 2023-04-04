import React from 'react';
import  {GiHamburgerMenu}  from 'react-icons/gi'; 

const Header = ({setIsClicked, isClicked}) => {
   
    return(
        <div className=" bg-white flex items-center h-[70px] justify-between p-10 md:px-10 lg:px-20 fixed top-0 w-full z-999">
        <div>
        <GiHamburgerMenu className="cursor-pointer" onClick={() => setIsClicked(!isClicked)} />

        </div>
        
        
            <div>
                <h1 className="font-bold text-lg md:text-xl lg:text-2xl">C N Law Diary</h1>
            </div>
            <div className="flex items-center justify-center space-x-2">
            <div className="bg-green-400 h-11 w-11 rounded-full flex justify-center items-center font-bold text-3xl ">
                <h2>S</h2>
            </div>
            <div>
                <h2 className="">Salman Sheriff</h2>
            </div>

            </div>
        </div>
    )
}


export default Header; 