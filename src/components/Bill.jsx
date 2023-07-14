import { appstore, bill, playstore } from "../assets";

const Bill = () => {
  return (
    <section className="font-poppins py-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex-1">
          <img
            src={bill}
            alt="bill"
            className="w-full h-full object-contain md:object-fill"
          />
        </div>

        <div className="flex flex-col gap-5 md:gap-10 flex-1">
          <h2 className="text-3xl xs:text-4xl leading-normal ss:text-[2.7rem]  md:text-[3.2rem] font-semibold">
            Easily control your billing & invoicing
          </h2>
          <p className="text-dimWhite leading-relaxed text-sm xs:text-base ss:text-lg">
            How much money do you leave on the table each month? Too many
            businesses “forget” to bill all hours worked. With HooBank, you can
            keep track of any invoices, generate them more quickly and bill any
            type of pricing structure to meet clients needs. As a bonus, you can
            explore new pricing models and compare their viability. Stop the
            revenue leakage and scale your business at full speed!
          </p>
          <p className="text-dimWhite mt-5 text-sm xs:text-base ss:text-lg">
            Cash is king, so get it in the bank sooner!
          </p>
          <div className="flex items-center gap-5">
            <img src={appstore} alt="app store" />
            <img src={playstore} alt="play store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bill;
