import { BsWhatsapp } from "react-icons/bs";
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
    <button onClick={handleClick} className="btn sm:btn-wide bg-green-600 text-lg text-slate-50">
      Compartir
      <BsWhatsapp className="w-6 h-6" />
    </button>
  );
};

export default SharedButton;
