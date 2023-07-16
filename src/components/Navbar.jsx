import { FcMenu } from "react-icons/fc";
import { navLinks } from "../utils/index";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="mb-5 md:mb-10 bg-primary ">
      <div className="container px-5 md:px-10 mx-auto relative font-poppins flex items-center justify-between py-8">
        <div>
          <h2 className="text-2xl">Naseem.</h2>
        </div>

        <div>
          <ul
            className={`${
              menu ? "h-72" : "h-0"
            } flex items-center sm:gap-10 gap-8 capitalize absolute sm:relative top-[70px] right-[20px] sm:top-0 bg-black-gradient sm:bg-gradient-to-r from-transparent z-50 sm:flex-row flex-col rounded-xl w-[92%] xs:w-72 justify-center sm:h-auto transition-all duration-500 sm:w-auto sm:justify-normal overflow-hidden`}
          >
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="font-[500]">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <FcMenu
            className="sm:hidden block cursor-pointer text-2xl text-white"
            onClick={() => setMenu(!menu)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
