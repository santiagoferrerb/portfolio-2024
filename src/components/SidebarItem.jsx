import { useContext } from "react";
import { Context } from "../context";

function SidebarItem({ title, icon }) {
  const { expanded } = useContext(Context);

  const { tab } = useContext(Context);
  return (
    <li
      className={` text-white hover:text-neutral-300 cursor-pointer flex w-full gap-4 items-center hover:bg-neutral-300/10 p-2 rounded-2xl ${
        !expanded && "justify-center"
      } ${tab === title && "border-white border-[1px] border-opacity-20"}`}
    >
      <span className="p-3 bg-white bg-opacity-20 rounded-full">{icon}</span>
      <p className={`flex-1 text-inherit capitalize ${!expanded && "hidden"}`}>{title}</p>
    </li>
  );
}

export default SidebarItem;
