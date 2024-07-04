import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import leftSectionTitleImg from "../../../assets/home/track-professior/left.png";
import rightSectionTitleImg from "../../../assets/home/track-professior/right.png";
import p1 from "../../../assets/home/track-professior/p1.png";
import p2 from "../../../assets/home/track-professior/p2.png";
import p3 from "../../../assets/home/track-professior/p3.png";
import instragram from "../../../assets/home/track-professior/instragram.png";
import linkedin from "../../../assets/home/track-professior/linkedin.png";

const professiors = [
  {
    id: 1,
    organization: "Professor @George Brown College",
    name: "Matthew E. McNatt",
    des: `Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo.`,
    subject: "Engineering physics",
    img: p1,
  },
  {
    id: 2,
    organization: "Professor @George Brown College",
    name: "Tracy D. Wright",
    des: `Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo.`,
    subject: "Engineering physics",
    img: p2,
  },
  {
    id: 3,
    organization: "Professor @George Brown College",
    name: "Cynthia A. Nelson",
    des: `Ut enim ad minim veniam, quis nost exercitation
ullamco laboris nisi ut allquip ex commodo.`,
    subject: "Engineering physics",
    img: p3,
  },
];

const TrackProfessior = () => {
  return (
    <div className="pb-8">
      <SectionTitle
        heading={"Our Tracks"}
        subHeading={"Lorem Ipsum is simply dummy text of the printing."}
        leftImg={leftSectionTitleImg}
        rightImg={rightSectionTitleImg}
      />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {professiors.map((prof) => (
          <div key={prof.id}>
            <div className="card card-compact bg-base-100 shadow-md p-4">
              <figure>
                <img src={prof.img} alt={prof.name} className="w-full" />
              </figure>
              <div>
                <p className="font-bold pt-2">{prof.name}</p>
                <p className=" text-[#868686]">{prof.organization}</p>
                <p className="py-3 text-[#ACACAC]">{prof.des}</p>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[#FF7426] font-semibold">
                  {prof.subject}
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <img src={instragram} alt="Instagram" className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackProfessior;
