import { FaSpinner } from "react-icons/fa";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FaSpinner className="animate-spin text-4xl text-blue-500" />
    </div>
  );
}

export default Loader;
