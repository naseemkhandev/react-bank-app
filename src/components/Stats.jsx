const Stats = ({ number, title }) => {
  return (
    <div>
      <h2 className="flex items-center md:flex-row sm:flex-col ss:flex-row flex-col justify-center gap-1 font-poppins">
        <span className="text-3xl md:text-4xl lg:text-[2.7rem] font-semibold">
          {number}+
        </span>
        <span className="text-gradient text-base md:text-xl">{title}</span>
      </h2>
    </div>
  );
};

export default Stats;
