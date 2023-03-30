import React from 'react';

const Header = () => {
    return(
        <div className="bg-white h-[70px] sticky top-0 flex items-center justify-between px-[100px]  shadow-md">
            <div>
                <h1 className="font-bold text-4xl">C N Law Diary</h1>
            </div>
            <div className="flex items-center justify-center space-x-2">
            <div className="bg-green-400 h-11 w-11 rounded-full flex justify-center items-center font-bold text-3xl ">
                <h2>S</h2>
            </div>
            <div>
                <h2 className="font-bold text-2xl">Salman Sheriff</h2>
            </div>

            </div>
        </div>
    )
}


export default Header; 