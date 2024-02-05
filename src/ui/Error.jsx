import { AiOutlineWarning } from "react-icons/ai";

function Error({ message = "An error occurred. Please try again." }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <AiOutlineWarning className="text-4xl text-red-500 mb-3" />{" "}
      <p className="text-lg text-gray-700 text-center">{message}</p>
    </div>
  );
}

export default Error;
