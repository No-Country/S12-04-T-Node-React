import { FaChevronDown } from "react-icons/fa";

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button onClick={handleScroll} className="hidden sm:block animate-fade-down animate-infinite fixed right-16 bottom-16 text-red-800">
        <FaChevronDown className="w-12 h-12" />
      </button>
    </div>
  );
};

export default ScrollButton;
