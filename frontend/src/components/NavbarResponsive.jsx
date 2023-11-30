import { Link } from "react-router-dom";
import hatLogo from "../assets/images/hat-logo.svg";
import { Navigation } from "./Navigation";

export default function NavbarResponsive() {
  return (
    <>
      <div className="hidden sm:block">
        <Navigation />
      </div>
      <div className="sm:hidden absolute top-3 left-0 w-full z-10">
        <div className="flex relative">
          <button className="absolute left-5 top-2 px-3 py-2 rounded-2xl bg-opacity-25 backdrop-filter p--0 backdrop-blur-md bg-red-700 shadow-lg shadow-slate-700/50">
            <Link to="/" className="flex items-center gap-1">
              <img className="h-6 w-auto" src={hatLogo} alt="Logo App" />
              <h1 className="text-white">Chef GPT</h1>
            </Link>
          </button>
          {/* <div className="absolute right-5 top-1 p-2">
            <img
              className="h-8 w-8 rounded-full border-2"
              src={userLogo}
              alt=""
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
