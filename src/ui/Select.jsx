import { createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const SelectContext = createContext();

function Select({ children, onSetValue, title, sideHandler }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const dropdownRef = useOutsideClick(() => setIsOpen(false));

  function handleSelect(value) {
    setSelected(value);
    setIsOpen(false);
    if (onSetValue) {
      onSetValue(value);
    }
    if (sideHandler) {
      sideHandler();
    }
  }

  return (
    <SelectContext.Provider value={{ selected, handleSelect }}>
      <div className="flex w-full" ref={dropdownRef}>
        <div className="relative w-full">
          <div
            className="cursor-pointer px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected || title}
          </div>
          {isOpen && (
            <div className="absolute z-10 w-full bg-white mt-1 border border-gray-300 rounded-md shadow-lg">
              {children}
            </div>
          )}
        </div>
      </div>
    </SelectContext.Provider>
  );
}

function Option({ children, value }) {
  const { selected, handleSelect } = useContext(SelectContext);
  const isActive = selected === value;

  return (
    <div
      className={`px-4 py-2 text-center cursor-pointer ${
        isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
      }`}
      onClick={() => handleSelect(value)}
    >
      {children}
    </div>
  );
}

Select.Option = Option;

export default Select;
