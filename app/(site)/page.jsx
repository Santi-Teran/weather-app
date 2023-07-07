import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-full w-full overflow-hidden overflow-y-auto bg-gradient-to-tr from-purple to-orange">
      <Header />
      <div className="flex flex-col items-center justify-center h-full -my-10">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Welcome to Weather App</h1>
        <p className="text-2xl font-normal text-white text-center mb-8">
          Get detailed and accurate weather forecast for any city in the world.
        </p>
        <Link href="/search" className="bg-purple hover:bg-violet-800 text-white font-bold py-2 px-4 rounded">
          Search
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;