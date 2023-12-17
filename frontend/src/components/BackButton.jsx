import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  return (
    <div className="mt-24 sm:mt-32 absolute sm:left-64">
      <button onClick={() => history.back()}>
        <IoIosArrowBack className="w-8 h-8" />
      </button>
    </div>
  );
};

export default BackButton;
