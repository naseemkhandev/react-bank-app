import { FcMenu } from "react-icons/fc";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="mb-10 md:mb-0">
      <div className="relative font-poppins flex items-center justify-between py-8">
        <div>
          <h2 className="text-2xl">Naseem.</h2>
        </div>

        <div>
          <ul
            className={`${
              menu ? "h-72" : "h-0"
            } flex items-center sm:gap-10 gap-8 capitalize absolute sm:relative top-16 right-0 sm:top-0 bg-black-gradient sm:bg-gradient-to-r from-primary sm:flex-row flex-col rounded-xl w-72 justify-center sm:h-auto transition-all duration-700 sm:w-auto sm:justify-normal overflow-hidden`}
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
