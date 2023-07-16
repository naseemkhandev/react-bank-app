import { HiMiniArrowUpRight } from "react-icons/hi2";

const GetStarted = () => {
  return (
    <a
      href="#features"
      className="hover:shadow-md transition-all hover:shadow-secondary md:w-[140px] md:h-[140px] sm:w-[180px] sm:h-[180px] w-[90px] h-[90px] bg-blue-gradient cursor-pointer select-none capitalize font-poppins flex items-center justify-center rounded-full hover:scale-110 transition-all"
    >
      <div className="md:w-[135px] sm:w-[175px] md:h-[135px] sm:h-[175px] w-[85px] h-[85px] bg-primary rounded-full flex items-center justify-center">
        <p className="text-sm sm:text-2xl md:text-xl text-gradient text-center font-semibold">
          <span className="flex items-center">
            get <HiMiniArrowUpRight className="text-2xl" />
          </span>
          started
        </p>
      </div>
    </a>
  );
};

export default GetStarted;
