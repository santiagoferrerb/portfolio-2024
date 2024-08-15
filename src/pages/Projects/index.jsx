import { AppWindow, DatabaseZap, Smartphone } from "lucide-react";
import ProjectItem from "../../components/ProjectItem";

function Projects({ image, title }) {

  const tags = [
    {
      title: "PWA",
      icon: <Smartphone size={18}/>
    },
    {
      title: "Fullstack",
      icon: <DatabaseZap size={18}/>
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col gap-4 text-white pr-4 overflow-y-auto">
      <ProjectItem title ="Oigamos" tags={tags} />
    </div>
  );
}

export default Projects;
