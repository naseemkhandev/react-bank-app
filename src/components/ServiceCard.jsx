import { BiLogoEbay, BiLogoVisa, BiLogoWix } from "react-icons/bi";
import { IoLogoDropbox, IoLogoPlaystation } from "react-icons/io";
import { TbBrandMeta, TbBrandHbo } from "react-icons/tb";
import CommonTitle from "./CommonTitle";
import CommonButton from "./CommonButton";

const ServiceCard = () => {
  return (
    <section className="font-poppins md:py-16 py-10">
      <div className="flex flex-col gap-10">
        <div className="brands-logo flex items-center sm:flex-nowrap flex-wrap w-full gap-10 text-6xl xs:text-7xl ss:text-8xl justify-center sm:text-[130px] text-[#5f5f5fb8] cursor-pointer">
          <BiLogoEbay className="hover:text-white" />
          <TbBrandHbo className="hover:text-white" />
          <BiLogoVisa className="hover:text-white" />
          <TbBrandMeta className="hover:text-white" />
          <BiLogoWix className="hover:text-white" />
          <IoLogoDropbox className="hover:text-white" />
          <IoLogoPlaystation className="hover:text-white" />
        </div>

        <div className="flex sm:flex-row flex-col sm:gap-0 gap-10 sm:items-center justify-between w-full bg-black-gradient-2 rounded-3xl p-6 ss:px-10 ss:py-10 md:px-16 md:py-7 my-10 md:my-16">
          <div>
            <CommonTitle title="Let's try our service now!" />
            <p className="max-w-[470px] mt-4 sm:mt-8">
              Everything you need to accept card payments and grow your business
              anywhere on the planet. Get Started
            </p>
          </div>
          <div>
            <CommonButton btnText="get started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
