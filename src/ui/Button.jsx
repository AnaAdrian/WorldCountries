function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow transition duration-150 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 mb-4"
    >
      {children}
    </button>
  );
}

export default Button;
