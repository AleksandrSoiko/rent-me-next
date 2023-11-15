import Image from "next/image";

interface RadioBtnProps {
  arrayBtnName: string[];
  name: string;
  selectedValue: string;
  onSelect: (option: string) => void;
}

const RadioBtn: React.FC<RadioBtnProps> = ({
  arrayBtnName,
  name,
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="flex flex-col md:w-[20rem] lg:w-[33.75rem] items-start">
      <p className="font-ComhtmlFortaa text-lg leading-[1.35rem] mt-4">
        {name}
      </p>
      <div className="max-lg:flex max-lg:flex-wrap max-lg:justify-center max-lg:mt-4 max-lg:w-[17.5rem]  lg:grid grid-cols-2">
        {arrayBtnName.map((btnName) => (
          <label
            key={btnName}
            className={`max-lg:border-[1px] max-lg:border-blue1 max-lg:text-center max-lg:w-[50%] max-lg:py-2 max-lg:bg-blue max-lg:text-[#fff] 
                lg:w-[11.25rem]  lg:h-12 lg:flex lg:gap-4 lg:items-center font-Manrope lg:text-xl lg:leading-[1.5rem] 
                ${
                  selectedValue === btnName
                    ? "max-lg:bg-blue max-lg:text-[#fff]"
                    : "max-lg:bg-transparent max-lg:text-gray"
                }`}
          >
            <input
              type="radio"
              className="hidden"
              name={name}
              value={btnName}
              checked={selectedValue === btnName}
              onChange={() => onSelect(btnName)}
            />
            {selectedValue === btnName ? (
              <Image
                src="/checkBoxFalse.svg"
                width="24"
                height="24"
                alt="check"
                className="hidden lg:block"
              />
            ) : (
              <Image
                src="/checkBox.svg"
                width="24"
                height="24"
                alt="check"
                className="hidden lg:block"
              />
            )}
            <p>{btnName}</p>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioBtn;
