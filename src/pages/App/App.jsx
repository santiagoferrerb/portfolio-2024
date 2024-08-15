import { Code, Download, House, PocketKnife, User } from "lucide-react";
import Layout from "../../components/Layout";
import Particles from "../../components/magicui/particles";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Divider from "../../components/Divider";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../../context";

function App() {
  const {setTab} = useContext(Context);
  const url = window.location.href

  useEffect(() => {
    // Establece el parámetro como estado inicial en el contexto
    const param = url.split('/')
    if(param[param.length -1] === ''){
      setTab('home');
    } else {
      setTab(param[param.length -1]);
    }
  }, [url]);

  return (
    <Layout>
      <Sidebar>
        <NavLink to="/" onClick={()=>setTab('home')}>
          <SidebarItem title="home" icon={<House size={22} color="white" />} />
        </NavLink>
        <NavLink to="/skills" onClick={()=>setTab('skills')}>
          <SidebarItem
            title="skills"
            icon={<PocketKnife size={22} color="white" />}
          />
        </NavLink>
        <NavLink to="/projects" onClick={()=>setTab('projects')}>
          <SidebarItem
            title="projects"
            icon={<Code size={22} color="white" />}
          />
        </NavLink>
        <NavLink to="/contact" onClick={()=>setTab('contact')}>
          <SidebarItem
            title="contact"
            icon={<User size={22} color="white" />}
          />
        </NavLink>
        <Divider />
      </Sidebar>
      <div className=" relative w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 flex flex-col flex-1 rounded-[20px] border border-y border-x border-white border-opacity-40 z-20 p-8">
        <Outlet />
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          ease={80}
          color="#FFF"
          refresh
        />
        <div className="z-20 absolute bottom-12 right-16 bg-white bg-opacity-30 border-[1px] border-white w-[64px] h-[64px]  flex flex-col items-center justify-center rounded-full cursor-pointer transition-all hover:-translate-y-1">
          <Download className="" size={32} color="white" />
        </div>
      </div>
    </Layout>
  );
}

export default App;
