import Bill from "./components/Bill";
import Business from "./components/Business";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import ServiceCard from "./components/ServiceCard";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      <Navbar />
      <div className="container px-5 md:px-10 mx-auto">
        <Hero />
        <div className="flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
          <Stats number="3800" title="ACTIVE USER" />
          <Stats number="230" title="TRUSTED BY COMPANY" />
          <Stats number="$230M" title="TRANSACTION" />
        </div>
        <Business />
        <Bill />
        <PaymentMethod />
        <Testimonials />
        <ServiceCard />
      </div>
    </div>
  );
};

export default App;
