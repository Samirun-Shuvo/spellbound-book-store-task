// import logo from "../../../assets/logo.png";
import logo1 from "../../../assets/logo1.png";
const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About us</a>
      </li>
      <li>
        <a>Courses</a>
      </li>
      <li>
        <a>Our Service</a>
      </li>
      <li>
        <a>Contact us</a>
      </li>
    </>
  );
  return (
   <div className="max-w-screen-xl mx-auto navbar bg-opacity-40  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <div>
            <img src={logo1} alt="logo" className="w-28" />
          </div>
        </div>
        <div className="navbar-end">
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div className="">
            <a className="btn btn-neutral rounded-2xl btn-sm px-6">Sign in</a>
          </div>
        </div>
      </div>
  );
};

export default NavBar;
