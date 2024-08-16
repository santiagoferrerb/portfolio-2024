import { ArrowLeft, ArrowRight, Award } from "lucide-react";
import Profile from "./Profile";
import { useContext } from "react";
import { Context } from "../context";

function Sidebar({ children }) {
  const { expanded, setExpanded } = useContext(Context);

  return (
    <aside className={`h-full flex-none z-20 ${expanded ? "w-96" : "w-auto "}`}>
      <div className="h-full bg-gray-100 rounded-[20px] border-y border-x border-white border-opacity-40 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 flex flex-col items-center justify-center p-4 gap-4">
        <div
          className={`flex items-center border-[1px] border-white border-opacity-20 h-[100px] w-full rounded-2xl bg-gray-100 bg-opacity-10 ${
            expanded ? "rounded-2xl" : "rounded-full"
          }`}
        >
          <Profile
            name="Santiago Ferrer"
            job="Frontend Dev"
            exp="2+"
            text="text-h2"
            animation
            icon={<Award size={18}/>}
            isYear
            img="./Imagen.jpg"
            isExpandable
          />
          <span
            onClick={() => setExpanded(!expanded)}
            className=" absolute cursor-pointer -right-4 w-8 h-8 p-2 rounded-full bg-white flex items-center justify-center"
          >
            {expanded && <ArrowLeft size={20} />}
            {!expanded && <ArrowRight size={20} />}
          </span>
        </div>
        <ul className={` w-full flex flex-col gap-4  rounded-2xl px-4 py-2 `}>
          {children}
        </ul>

        <div className="flex-1 border rounded-2xl w-full flex justify-center items-center">
          <p className="text-white">API: clima</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
