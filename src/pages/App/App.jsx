import { Code, Download, House, PocketKnife, User } from "lucide-react";
import Layout from "../../components/Layout";
import Particles from "../../components/magicui/particles";
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/SidebarItem";
import Divider from "../../components/Divider";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Sidebar>
        <NavLink to="/">
          <SidebarItem title="Home" icon={<House size={22} color="white" />} />
        </NavLink>
        <NavLink to="/skills">
          <SidebarItem
            title="Skills"
            icon={<PocketKnife size={22} color="white" />}
          />
        </NavLink>
        <NavLink to="/projects">
          <SidebarItem
            title="Projects"
            icon={<Code size={22} color="white" />}
          />
        </NavLink>
        <NavLink to="/contact">
          <SidebarItem
            title="Contact"
            icon={<User size={22} color="white" />}
          />
        </NavLink>
        <Divider />
      </Sidebar>
      <div className=" relative w-full bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 flex flex-col flex-1 rounded-[32px] border border-y border-x border-white border-opacity-40 z-20 p-8">
        <Outlet />
        <Particles
          className="absolute inset-0 -z-10"
          quantity={100}
          ease={80}
          color="#FFF"
          refresh
        />
        <div className="z-20 absolute bottom-12 right-16 bg-white bg-opacity-30 border-[1px] border-white w-[64px] h-[64px]  flex flex-col items-center justify-center rounded-full cursor-pointer">
          <Download className="" size={32} color="white" />
        </div>
      </div>
    </Layout>
  );
}

export default App;
