import logo1 from "../../../assets/logo1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="max-w-screen-xl mx-auto footer grid lg:grid-cols-6 gap-5 text-base-content py-10">
        <div className="grid col-span-2 lg:pr-24">
          <img src={logo1} alt="Company Logo" className="w-28" />
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">How to work?</a>
          <a className="link link-hover">Populer Course</a>
          <a className="link link-hover">Service</a>
        </div>
        <div>
          <h6 className="footer-title">Courses</h6>
          <a className="link link-hover">Categories</a>
          <a className="link link-hover">Ofline Course</a>
          <a className="link link-hover">Vidio Course</a>
        </div>
        <div>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Career</a>
          <a className="link link-hover">Privacy </a>
        </div>
        <div>
          <h6 className="footer-title">Contac Info</h6>
          <a className="link link-hover">+0913-705-3875</a>
          <a className="link link-hover">ElizabethJ@jourrapide.com</a>
          <a className="link link-hover">
            4808 Skinner Hollow Road Days Creek, OR 97429
          </a>
        </div>
      </footer>
      <hr className="w-full h-0.5 bg-[#dad7d7]" />
      <footer className="max-w-screen-xl mx-auto footer footer-center text-base-content p-4">
        <aside>
          <p>Spellbound &copy; {currentYear}. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
