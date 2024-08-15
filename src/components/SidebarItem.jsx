import { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";

function SidebarItem({ title, icon }) {
  const { expanded } = useContext(Context);

  return (
    <li
      className={` text-white hover:text-neutral-300 cursor-pointer flex w-full gap-4 items-center hover:bg-neutral-300/10 p-2 rounded-2xl ${
        !expanded && "justify-center"
      }`}
    >
      <span className="p-3 bg-white bg-opacity-20 rounded-full">{icon}</span>
      <p className={`flex-1 text-inherit  ${!expanded && "hidden"}`}>{title}</p>
    </li>
  );
}

export default SidebarItem;
