import { Award } from "lucide-react";
import AnimatedShinyText from "./magicui/animated-shiny-text";

function StackItem({ img, alt, text }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[150px] h-[150px] ">
      <div className=" relative w-[70px] h-[70px]">
        <img
          src={img}
          alt={alt}
          className="object-cover  w-full h-full rounded-full grayscale-[30%] hover:grayscale-0 "
        />
        <div className="w-[70px] h-[70px] absolute top-1 left-1 bg-black bg-opacity-50 rounded-full -z-10"></div>
      </div>
      <div className="rounded-full border text-base text-white transition-all ease-in pointer-events-none  border-white/10 bg-neutral-800 hover:bg-neutral-800">
        <AnimatedShinyText className="inline-flex gap-1 items-center justify-center px-2 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-label ">
          <span><Award size={14} /> </span>
          <span >{text}</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}

export default StackItem;
