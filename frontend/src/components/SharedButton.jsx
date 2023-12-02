import { MdOutlineWhatsapp } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const SharedButton = ({ phone, text }) => {
  const handleClick = () => {
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${phone}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <button className="btn btn-success rounded-full text-slate-50 absolute right-0" onClick={handleClick}>
      <MdOutlineWhatsapp className="w-8 h-8"/>
    </button>
  );
};

export default SharedButton;
