import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-8 justify-center bg-red p-4 w-72 m-auto rounded-lg mt-8">
      <Link to="/signin" className="text-slate-100 hover:text-blue-400">
        Login
      </Link>
      <Link to="/signup" className="text-slate-100 hover:text-blue-400">
        Register
      </Link>
      <Link to="/chat" className="text-slate-100 hover:text-blue-400">
        ChatBot
      </Link>
    </div>
  );
};

export default Home;
