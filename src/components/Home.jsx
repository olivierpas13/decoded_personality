import ModelContainer from "@/models/ModelContainer";
import HomeGirl from "@/models/HomeGirl";
import Stats from "./home/Stats";
import { Link } from "@tanstack/react-router";
import { Suspense } from "react";
const Home = () => {
  return (
    <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
      <section className="prose h-screen container w-screen">
        <div className="px-3 md:px-0 mb-16 md:mb-0 h-fit grid grid-cols-2 mt-6 p-41 md:flex md:flex-col md:justify-center md:items-center md:w-screen">
          <div className="home-text md:text-center md:w-screen">
            <h1 className="text-secondary-content my-8 md:text-5xl md:tracking-wider">
              Know who you are
            </h1>
            <p className="py-4 md:text-xl md:text md:tracking-wide">
              Do you want to know how your mind works?
            </p>
            <Link
              to={"/test"}
              className="md:hidden btn btn-primary btn-outline mt-5"
            >
              {"Take the test".toUpperCase()}
            </Link>
          </div>
          <ModelContainer cameraPosition={[-1.18, 0.53, 3.5]}>
            <HomeGirl position={[0, -3.5, 0]} scale={[8, 8, 8]} />
          </ModelContainer>
          <Link
            to={"/test"}
            className="hidden md:flex btn btn-primary md:btn-md btn-outline md:my-10"
          >
            {"Take the test".toUpperCase()}
          </Link>
        </div>
        <div className="w-screen flex justify-center">
          <Stats />
        </div>
      </section>
    </Suspense>
  );
};

export default Home;
