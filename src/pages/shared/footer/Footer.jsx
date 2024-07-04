import logo1 from "../../../assets/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-hidden">
      <footer className="max-w-screen-xl mx-auto grid gap-5 py-10 px-5 lg:px-0 text-base-content">
        <div className="lg:flex justify-between items-start">
          <div className="flex flex-col lg:w-1/3 lg:pr-24 mb-8 lg:mb-0">
            <img src={logo1} alt="Company Logo" className="w-28 mb-5" />
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full lg:w-2/3">
            <div>
              <h6 className="footer-title mb-4">Company</h6>
              <p className="link link-hover">About Us</p>
              <p className="link link-hover">How to work?</p>
              <p className="link link-hover">Popular Course</p>
              <p className="link link-hover">Service</p>
            </div>
            <div>
              <h6 className="footer-title mb-4">Courses</h6>
              <p className="link link-hover">Categories</p>
              <p className="link link-hover">Offline Course</p>
              <p className="link link-hover">Video Course</p>
            </div>
            <div>
              <h6 className="footer-title mb-4">Support</h6>
              <p className="link link-hover">FAQ</p>
              <p className="link link-hover">Help Center</p>
              <p className="link link-hover">Career</p>
              <p className="link link-hover">Privacy</p>
            </div>
            <div>
              <h6 className="footer-title mb-4">Contact Info</h6>
              <p className="link link-hover">+0913-705-3875</p>
              <p className="link link-hover break-all">ElizabethJ@jourrapide.com</p>
              <p className="link link-hover break-all">
                4808 Skinner Hollow Road Days Creek, OR 97429
              </p>
            </div>
          </div>
        </div>
      </footer>
      <hr className="w-full h-0.5 bg-[#dad7d7]" />
      <footer className="max-w-screen-xl mx-auto text-center text-base-content py-4">
        <p>Spellbound &copy; {currentYear}. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
