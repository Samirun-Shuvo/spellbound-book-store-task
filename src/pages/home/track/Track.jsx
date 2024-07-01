import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import leftSectionTitleImg from "../../../assets/home/section-title/casual-life-3d-idea-lamp 1.png";
import rightSectionTitleImg from "../../../assets/home/section-title/Group.png";
import track1 from "../../../assets/home/tracks/track1.png";
import track2 from "../../../assets/home/tracks/track2.png";
import track3 from "../../../assets/home/tracks/track3.png";
import { FaRegClock } from "react-icons/fa";
import { IoVideocamOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import Banner from "../banner/Banner";

const tracks = [
  {
    id: 1,
    title: "UI/UX Design",
    courseName: "UI/UX Design for Beginners",
    rating: 4,
    price: 98.0,
    time: "22hr 30min",
    totalVideo: 34,
    saleCourses: 250,
    img: track1,
  },
  {
    id: 2,
    title: "Web Design",
    courseName: "Web Design for Beginners",
    rating: 4,
    price: 100.0,
    time: "22hr 30min",
    totalVideo: 34,
    saleCourses: 250,
    img: track2,
  },
  {
    id: 3,
    title: "Apps Design",
    courseName: "Apps Design for Beginners",
    rating: 4,
    price: 105.0,
    time: "22hr 30min",
    totalVideo: 34,
    saleCourses: 250,
    img: track3,
  },
];

const Track = () => {
  return (
    <div className="bg-[white] py-4">
      <Banner></Banner>
      <SectionTitle
        heading={"Our Tracks"}
        subHeading={"Lorem Ipsum is simply dummy text of the printing."}
        leftImg={leftSectionTitleImg}
        rightImg={rightSectionTitleImg}
      />
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tracks.map((track) => (
          <div key={track.id}>
            <div className="card card-compact bg-base-100 shadow-xs p-4">
              <figure>
                <img src={track.img} alt={track.title} className="w-full" />
              </figure>
              <div className="flex justify-between items-center">
                <p>
                  <small className="text-[#c0bbbb]">{track.title}</small>
                </p>
                <p>
                  <small>{track.rating}</small>
                </p>
              </div>
              <div>
                <p className="font-bold">{track.courseName}</p>
                <p className="font-bold text-[#c0ae8d]">${track.price}</p>
              </div>
              <hr className="w-full h-0.2 bg-[#dad7d7] mt-2" />
              <div className="flex justify-start items-center gap-10  text-[#c0bbbb] py-4">
                <p className="flex justify-center items-center">
                  <FaRegClock />
                  <small className="ps-1">{track.time}</small>
                </p>
                <p className="flex justify-center items-center">
                  <IoVideocamOutline />
                  <small className="ps-1">{track.totalVideo} Courses</small>
                </p>
                <p className="flex justify-center items-center">
                  <FiDownload />
                  <small className="ps-1">{track.saleCourses} Sales</small>
                </p>
              </div>
            </div>
            <div className="card-actions justify-center">
              <button className="text-white bg-[#FF7426] rounded-2xl btn-sm px-6 -mt-4 z-10">
                Join Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Track;
