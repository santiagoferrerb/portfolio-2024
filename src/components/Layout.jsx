import { Download } from "lucide-react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

function Layout({ children }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-t from-slate-900 to-black flex gap-8 overflow-hidden p-8">
      {children}

      <div className="absolute inset-0">
        <BackgroundGradientAnimation
          firstColor="204,209,209"
          secondColor="27, 164, 181"
          thirdColor="34, 178, 128"
          fourthColor="52,73,94"
          fifthColor = "141, 203, 39"
          pointerColor="14,14,14"
          gradientBackgroundStart={"#0C0C0C"}
          gradientBackgroundEnd="rgb(15 23 42)"
          size="80%"
        />
      </div>
    </div>
  );
}

export default Layout;
