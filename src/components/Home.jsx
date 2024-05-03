import ModelContainer from "@/models/ModelContainer";
import HomeGirl from "@/models/HomeGirl";
import Stats from "./home/Stats";
import { Link } from "@tanstack/react-router";
const Home = () => {
  return (
    <section className="prose h-screen container w-screen">
      <div className="h-fit grid grid-cols-2 mt-6 p-41 lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-screen">
        <div className="home-text lg:text-center lg:w-screen">
          <h1 className="text-secondary-content my-8 lg:text-5xl lg:tracking-wider">
            Know who you are
          </h1>
          <p className="py-4 lg:text-xl lg:text lg:tracking-wide">
            Do you want to know how your mind works?
          </p>
          <Link
            to={"/test"}
            className="lg:hidden btn btn-primary btn-outline mt-5"
          >
            {"Take the test".toUpperCase()}
          </Link>
        </div>
        <ModelContainer cameraPosition={[-1.18, 0.53, 3.5]}>
          <HomeGirl position={[0, -3.5, 0]} scale={[8, 8, 8]} />
        </ModelContainer>
        <Link
          to={"/test"}
          className="hidden lg:flex btn btn-primary lg:btn-md btn-outline lg:my-10"
        >
          {"Take the test".toUpperCase()}
        </Link>
      </div>
      <div  className="w-screen flex justify-center">
        <Stats />
      </div>
    </section>
  );
};

export default Home;
