import ModelContainer from "@/models/ModelContainer";
import HomeGirl from "@/models/HomeGirl";
import Stats from "./home/Stats";
import { Link } from "@tanstack/react-router";
const Home = () => {
  return (
    <section className="grid grid-cols-2 prose">
        <div className=" mt-8 p-4">
          <h1 className="text-secondary-content">Know who you are</h1>
          <p>Curious about how your mind works?</p>
          <Link to={"/test"} className="btn btn-primary btn-outline mt-5">
            {"Take the test".toUpperCase()}
          </Link>
        </div>
        <div>
          <ModelContainer cameraPosition={[-3.24, 2.49, 7.41]}>
            <HomeGirl position={[0,-6,0]} scale={[15, 15, 15]} />
          </ModelContainer>
        </div>
      <Stats />
    </section>
  );
};

export default Home;
