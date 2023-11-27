import { Link } from "react-router-dom";

const Home = () => {
  return (
    <header className="flex flex-col items-center gap-32 justify-center mt-32">
      <h1 className="text-6xl font-bold">Home</h1>
      <Link to="/chat" className="text-slate-100 hover:text-blue-400 bg-red-600 p-4 rounded-xl">
        ChatBot
      </Link>
    </header>
  );
};

export default Home;
