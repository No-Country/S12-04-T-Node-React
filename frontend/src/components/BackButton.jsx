import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  return (
    <div className="mt-24 absolute left-4 sm:left-6 md:left-16 xl:left-64 ">
      <button onClick={() => history.back()}>
        <IoIosArrowBack className="w-8 h-8" />
      </button>
    </div>
  );
};

export default BackButton;
