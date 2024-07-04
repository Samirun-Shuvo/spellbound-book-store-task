import rectangle from "../../../assets/home/header/Rectangle 41.png";
import online_test from "../../../assets/home/header/online-test 1.png";
import exam from "../../../assets/home/header/exam 1.png";
import certification from "../../../assets/home/header/certification 1.png";

const Banner = () => {
  return (
    <div className="bg-[#4D2C5E] text-white p-6 max-w-screen-lg mx-auto lg:flex justify-center items-center rounded-md -mt-24 gap-8">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="flex justify-center items-center">
          <div
            className="relative bg-cover bg-center p-4"
            style={{
              backgroundImage: `url(${rectangle})`,
            }}
          >
            <img
              className="w-full max-w-[12rem] sm:max-w-[14rem] transform transition-transform duration-300 hover:scale-105"
              src={online_test}
              alt="Online Test"
            />
          </div>
          <div className="px-4">
            <h1 className="text-md py-2">Learn The Latest Skills</h1>
            <p className="text-xs">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="relative bg-cover bg-center p-4"
            style={{
              backgroundImage: `url(${rectangle})`,
            }}
          >
            <img
              className="w-full max-w-[12rem] sm:max-w-[14rem] transform transition-transform duration-300 hover:scale-105"
              src={exam}
              alt="Exam"
            />
          </div>
          <div className="px-4">
            <h1 className="text-md py-2">Learn The Latest Skills</h1>
            <p className="text-xs">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            className="relative bg-cover bg-center p-4"
            style={{
              backgroundImage: `url(${rectangle})`,
            }}
          >
            <img
              className="w-full max-w-[12rem] sm:max-w-[14rem] transform transition-transform duration-300 hover:scale-105"
              src={certification}
              alt="Certification"
            />
          </div>
          <div className="px-4">
            <h1 className="text-md py-2">Learn The Latest Skills</h1>
            <p className="text-xs">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
