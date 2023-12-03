import { IoShareSocialSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SharedButton = ({ text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/?text=${encoded}`;
    window.open(url, "_blank");
    navigate("/");
  };

  return (
    <button onClick={handleClick}>
      <IoShareSocialSharp className="w-8 h-8" />
    </button>
  );
};

export default SharedButton;
