import AnimatedShinyText from "./magicui/animated-shiny-text";

function ProjectItem({title, tags }) {

    // poner direction para que el lado pequeño este a la derecha o a la izquierda

  return (
    <div className="w-full h-[380px]  flex gap-4 ">
      <div className="h-full flex-1 border rounded-2xl p-4"></div>
      <div className="h-full flex flex-col justify-between w-[450px] flex-shrink-0 bg-white bg-opacity-40 rounded-2xl p-4">
        <h1 className="leading-none ">{title}</h1>
        <div className="w-full flex justify-end gap-2">
          {tags.map((item, indx) => (
            <div className="px-5 py-1 bg-neutral-800 rounded-full border-white border-[1px] border-opacity-20" key={indx}>
              <AnimatedShinyText className="gap-2 flex items-center justify-center  transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ">
                <span>{item.icon} </span>
                <span>{item.title}</span>
              </AnimatedShinyText>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
