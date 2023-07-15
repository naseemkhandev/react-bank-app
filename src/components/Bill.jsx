import { appstore, bill, playstore } from "../assets";
import CommonTitle from "./CommonTitle";

const Bill = () => {
  return (
    <section className="relative font-poppins py-10 sm:py-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-5">
        <div className="flex-1">
          <img
            src={bill}
            alt="bill"
            className="w-full h-full object-contain md:object-fill"
          />
        </div>

        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <CommonTitle title="Easily control your billing & invoicing" />
          <p className="text-dimWhite leading-relaxed text-base ss:text-lg">
            How much money do you leave on the table each month? Too many
            businesses “forget” to bill all hours worked. With HooBank, you can
            keep track of any invoices, generate them more quickly and bill any
            type of pricing structure to meet clients needs. As a bonus, you can
            explore new pricing models and compare their viability. Stop the
            revenue leakage and scale your business at full speed!
          </p>
          <p className="text-dimWhite mt-5 text-base ss:text-lg">
            Cash is king, so get it in the bank sooner!
          </p>
          <div className="flex items-center gap-5">
            <img src={appstore} alt="app store" />
            <img src={playstore} alt="play store" />
          </div>
        </div>
      </div>
      <div className="absolute w-[20%] h-[60%] rounded-full left-0 top-20 pink__gradient"></div>
    </section>
  );
};

export default Bill;
