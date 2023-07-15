import { testimonials } from "../utils";
import { RiDoubleQuotesL } from "react-icons/ri";
import CommonTitle from "./CommonTitle";
const Testimonials = () => {
  return (
    <section className="relative font-poppins md:py-16 py-10">
      <div>
        <CommonTitle title="What People are saying about us" />
        <p className="text-dimWhite md:text-lg text-base">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
        <div className="grid ss:grid-cols-2 md:grid-cols-3 gap-10 mt-10 sm:mt-16">
          {testimonials.map((item) => {
            const { id, about, image, name, title } = item;
            return (
              <div
                key={id}
                className="flex flex-col gap-10 feature-card rounded-2xl px-10 ss:px-6 sm:px-10 md:px-6 py-10 lg:px-10"
              >
                <RiDoubleQuotesL className="text-5xl text-secondary" />
                <p className="leading-normal text-base text-dimWhite">
                  {about}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={image}
                    alt={name}
                    className="w-12 h-12 object-cover rounded-full object-top"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-dimWhite text-sm font-[500]">{title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute w-[30%] h-[50%] rounded-full -right-10 top-40 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Testimonials;
