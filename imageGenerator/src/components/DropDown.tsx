import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const DropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex text-[#777] font-medium relative mx-auto" ref={dropdownRef}>
      <div onClick={toggleDropdown} className="flex gap-2 cursor-pointer">
        
        <RiArrowDropDownLine className="text-[20px]" />
      </div>
      {isOpen && (
        <ul className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-md">
          {["DALL·E 2", "History", "Collections", "MyAccount"].map(
            (item: string, index: number) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {item}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default DropDown;