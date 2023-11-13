import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CustomSelectorProps {
  label: string;
  variable: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  label,
  variable,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Selecting an option from the selector
  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  // Close the selector selection
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  // Closing the selector selection when clicking outside its window
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <label
      htmlFor="minBeds"
      className="font-Manrope text-base leading-[1.2rem] test"
    >
      <p className="my-4">{label}</p>
      <div
        ref={containerRef}
        className="border-[1px] border-blue1 rounded-[0.5rem] w-[8.125rem] lg:w-[11.25rem] relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="px-4 py-3 text-gray">{selectedOption}</p>
        <Image
          src="/RentBuySelect/Downv.svg"
          width="19"
          height="19"
          alt="arrow"
          className={`absolute top-[15px] right-[10px] ${
            isOpen && "rotate-180"
          }`}
        />
        {isOpen && (
          <ul className="font-light text-base">
            {variable.map((option) => (
              <li
                className="px-4 py-2 hover:bg-light_blue color-gray"
                key={option}
                onClick={() => handleSelect(option)}
              >
                <p>{option}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </label>
  );
};

export default CustomSelector;
