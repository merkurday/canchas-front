import React from "react";

const NavBar = () => {
  return (
    <div className="w-full h-[100px] bg-yellow-400 flex justify-center items-center relative">
      <div className="text-[30px] font-[500] absolute">CANCHAS YA</div>
      <button className="rounded-lg bg-blue-950 text-white px-[20px] py-[5px] ml-auto mr-[20px]">
        Administrar
      </button>
    </div>
  );
};

export default NavBar;
