import header_bg from "../../../assets/home/header/header-bg.png";
import header_img from "../../../assets/home/header/header-img.png";

const Header = () => {
  return (
    <div
      className="hero bg-base-200 mb-32 overflow-hidden"
      style={{
        backgroundImage: `url(${header_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="w-full max-w-2xl shrink-0">
          <img
            src={header_img}
            alt="Header"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-center lg:text-left p-4 lg:p-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            The <span className="text-[orange]">Smart</span>
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Choice For <span className="text-[orange]">Future</span>
          </h1>
          <p className="py-4 md:py-6 text-sm md:text-base lg:text-lg">
            Elearn is a global training provider based across the UK that
            specialises in accredited and bespoke training courses. We crush
            the...
          </p>

          <div className="w-full max-w-md mx-auto lg:mx-0">
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Search for a location..."
              />
              <a className="btn btn-neutral rounded-2xl btn-sm px-6">
                Continue
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
