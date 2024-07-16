import HeroImg from "../assets/heroImg.jpg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blue-400  h-screen">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-10">
          {/* Left Section */}
          <div className="md:w-1/2 text-center ">
            <h1 className="text-4xl md:text-5xl text-white font-semibold mb-4">
              Welcome to Todo Application
            </h1>
            <p className="text-lg md:text-xl text-white font-light">
              Our Todo Application is a user-friendly and efficient tool
              designed to help individuals and teams manage their tasks and stay
              organized. Whether you are planning your daily schedule or
              tracking personal goals, this application provides the features
              you need to keep everything in order.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 p-5">
            <img
              src={HeroImg}
              className="rounded-xl mx-auto w-[500px]"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
