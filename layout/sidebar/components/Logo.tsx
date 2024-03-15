import Image from "next/image";
import React from "react";

export const Logo = () => {
  return (
    <div className="flex-1 px-6 flex items-center gap-4">
      <Image alt="logo" src={"/mc-logo.svg"} width={40} height={40} priority />
      <div className="flex flex-col gap-0.5">
        <h1 className="text-xl text-secondary font-medium tracking-[1px] leading-none uppercase">
          playground
        </h1>
        <span className="text-[10px] text-default-400 font-medium tracking-[8px] leading-none uppercase">
          components
        </span>
      </div>
    </div>
  );
};
