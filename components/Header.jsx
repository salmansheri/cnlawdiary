import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

const Header = ({ setIsClicked, isClicked }) => {
  const { data: session } = useSession();

  const user = session?.user?.email || "";

  const firstname = user[0];

  return (
    <div className=" bg-white flex items-center h-[70px] justify-between p-10 md:px-10 lg:px-20 fixed top-0 w-full z-999">
      <div>
        <GiHamburgerMenu
            size={30}
          className="cursor-pointer"
          onClick={() => setIsClicked(!isClicked)}
        />
      </div>

      <div>
        <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
          C N Law Diary
        </h1>
      </div>
      <div className="flex items-center justify-center space-x-2">
        <div className="h-11 w-11 rounded-full bg-green-500 flex justify-center items-center uppercase font-bold text-3xl">
          {firstname}
        </div>

        <div>
          <h2 className="">{user}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
