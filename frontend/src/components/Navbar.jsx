import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-8 justify-between bg-red p-4 w-full">
      <Link to="/" className="text-slate-100 hover:text-blue-400">
        <img src="/logo.png" alt="Logo" className="w-32 h-16" />
      </Link>
      <div className="py-4 flex gap-8">
        <Link to="/signin" className="text-slate-100 hover:text-blue-400">
          Login
        </Link>
        <Link to="/signup" className="text-slate-100 hover:text-blue-400">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
