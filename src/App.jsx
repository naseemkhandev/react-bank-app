import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="bg-primary text-white w-full h-full">
      <div className="container px-5 md:px-10 mx-auto">
        <Navbar />
        <Hero />
        <div className="flex flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20">
          <Stats number="3800" title="ACTIVE USER" />
          <Stats number="230" title="TRUSTED BY COMPANY" />
          <Stats number="$230M" title="TRANSACTION" />
        </div>
      </div>
    </div>
  );
};

export default App;
