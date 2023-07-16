import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex md:items-center flex-col md:flex-row gap-10 md:gap-0"
    >
      <div className="flex flex-col gap-5 flex-1 pr-10 md:pr-0">
        <div className="flex items-center gap-2 font-poppins bg-discount-gradient py-2 px-3 xs:px-5 text-lg rounded-xl w-[100%] xs:w-fit">
          <img src={discount} alt="discount" />
          <p className="sm:text-base text-xs">
            20% <span className="text-[#5A595E] font-[500]">Discount For</span>{" "}
            1 Month <span className="text-[#5A595E] font-[500]">Account</span>
          </p>
        </div>

        <div className="relative">
          <h1 className="text-[3.3rem] sm:text-6xl leading-snug sm:leading-normal md:text-7xl md:leading-snug font-[600] font-poppins">
            The Next <br className="md:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
            <br className="md:block hidden " /> Payment{" "}
            <br className="md:block hidden " />
            Method.
          </h1>
          <div className="absolute top-0 left-[350px] md:left-[400px] md:block hidden">
            <GetStarted />
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-dimWhite sm:mt-5 md:max-w-[470px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className="flex-1 relative flex items-center justify-center">
        <img src={robot} alt="robot" className="md:w-full md:h-full" />
        <div className="absolute w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>

        <div className="absolute -top-4 left-5 sm:left-[60px] md:hidden">
          <GetStarted />
        </div>
      </div>
    </section>
  );
};

export default Hero;
