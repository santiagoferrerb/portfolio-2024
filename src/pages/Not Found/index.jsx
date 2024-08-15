import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
      <h1>404 Not Found</h1>
      <Link to="/">
        <h1 className="bg-black py-2 px-4 text-white rounded-full">Volver al Home</h1>
      </Link>
    </div>
  );
}

export default NotFound;
