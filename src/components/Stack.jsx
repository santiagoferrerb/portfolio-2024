import React from "react";

function Stack({children, icon, text}) {
  return (
    <div className="flex flex-col gap-2 flex-wrap w-full">
      <div className="w-full py-2  flex justify-center items-center gap-4">
        <span className="p-2 bg-gray-100 bg-opacity-10 rounded-full">
          {icon}
        </span>
        <h2 className="text-center text-body-large uppercase">{text}</h2>
      </div>
      <div className="flex flex-1 justify-around item content-start rounded-2xl flex-wrap w-full">
        {children}
      </div>
    </div>
  );
}

export default Stack;
