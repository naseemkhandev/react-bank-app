import { card } from "../assets";
import CommonButton from "./CommonButton";
import CommonTitle from "./CommonTitle";
import { FaStar } from "react-icons/fa";

const Steps = ({ title }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg text-dimWhite flex items-center gap-2">
      <span>
        <FaStar className="text-secondary -mt-1 text-base" />
      </span>
      <span>{title}</span>
    </p>
  );
};

const PaymentMethod = () => {
  return (
    <section id="product" className="py-10 sm:py-16 font-poppins">
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex flex-col gap-7 sm:gap-10 flex-1">
          <CommonTitle title="Find a better card deal in few easy steps." />
          <div className="flex flex-col gap-3">
            <Steps title="Choose the carding type that suits your needs" />
            <Steps title="Don't double entry, interconnect to your accounting system" />
            <Steps title="Speed up month-end closing with a rigorous invoicing process" />
          </div>
          <CommonButton btnText="get started" />
        </div>

        <div className="flex-1">
          <img
            src={card}
            alt="card payment method"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
