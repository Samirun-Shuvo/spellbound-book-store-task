import expImg from "../../../assets/home/experience/OBJECTS.png";
import heart from "../../../assets/home/experience/hearts 1.png";
import jigsaw from "../../../assets/home/experience/jigsaw 1.png";
import rectangle from "../../../assets/home/experience/Rectangle 41.png";

const Experience = () => {
  return (
    <div>
      <div className="hero opacity-70 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="text-center lg:text-left lg:mr-20 lg:max-w-lg w-full">
            <h1 className="text-5xl font-bold mb-6">
              Premium <span className="text-orange-500">Learning</span> Experience
            </h1>
            <div className="flex justify-center lg:justify-start items-center mb-4">
              <div className="relative bg-cover bg-center p-2" style={{ backgroundImage: `url(${rectangle})` }}>
                <img className="w-16 sm:w-20" src={heart} alt="heart" />
              </div>
              <div className="px-2 text-left">
                <h2 className="text-md font-semibold py-1">Easily Accessible</h2>
                <p className="text-xs text-gray-600">Learning Will feel Very Comfortable With Courslab.</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start items-center">
              <div className="relative bg-cover bg-center p-2" style={{ backgroundImage: `url(${rectangle})` }}>
                <img className="w-16 sm:w-20" src={jigsaw} alt="jigsaw" />
              </div>
              <div className="px-2 text-left">
                <h2 className="text-md font-semibold py-1">Fun Learning Experience</h2>
                <p className="text-xs text-gray-600">Learning Will feel Very Comfortable With Courslab.</p>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-full mt-8 lg:mt-0">
          <img src={expImg} alt="Experience Header" className="w-3/5 h-auto mx-auto" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
