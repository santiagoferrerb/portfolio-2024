import AnimatedShinyText from "./magicui/animated-shiny-text";
import { cn } from "../lib/utils";
import { Award, BadgeCheck } from "lucide-react";
import { useContext } from "react";
import { Context } from "../context";

function Profile({img, name, job, exp, text, animation, icon, isYear, isExpandable}) {
  const { expanded } = useContext(Context);

  return (
    <div className="flex justify-center max-w-[400px] ">
      <div className="relative w-[98px] h-[98px] p-4 flex items-center justify-center">
        <img
          className={`h-full w-full rounded-full object-cover object-center border-x border-grey z-10`}
          src={img}
          alt="imagen de perfil"
        />
        {animation && (
          <div className="h-[45px] w-[45px] rounded-full bg-white absolute animate-ping">
          </div>
        )}
      </div>
      <div className={`flex-1 text-white flex flex-col justify-center gap-1 ${!expanded && isExpandable ? 'hidden' : 'w-full'}`}>
        <p className={text}>{name}</p>
        <div className="z-10 max-h-[80px] flex flex-wrap gap-1 items-center">
          <div
            className={cn(
              "group h-[32px] rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in pointer-events-none hover:bg-neutral-200 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex gap-1 items-center justify-center px-3 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>{icon} </span>
              <span>{job}</span>
            </AnimatedShinyText>
          </div>

          <div
            className={cn(
              "group h-[32px] rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in pointer-events-none hover:bg-neutral-200 dark:border-white/10 dark:bg-neutral-800 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="flex flex-col gap-0 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span className={`text-display ${isYear && "-m-1"}`}>{exp}</span>
              {isYear && <span className="text-label-mobile uppercase">years</span>}
            </AnimatedShinyText>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
