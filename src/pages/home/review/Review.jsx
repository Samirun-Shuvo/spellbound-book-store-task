import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import r1 from "../../../assets/home/review/r1.png";
import r2 from "../../../assets/home/review/r2.png";
import r3 from "../../../assets/home/review/r3.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    id: 1,
    name: "Finlay Kirk",
    course: "Web Developer",
    img: r1,
    comment: `Teachings of the great explore of truth, 
    the master-builder of human happiness. 
    no one rejects, dislikes, or avoids pleasure 
    itself, pleasure itself`,
  },
  {
    id: 2,
    name: "Dannette P. Cervantes",
    course: "Web Design",
    img: r2,
    comment: `Complete account of the system and
expound the actual Contrary to popular
belief, Lorem Ipsum is not simply 
random text. It has roots`,
  },
  {
    id: 3,
    name: "Clara R. Altman",
    course: "UI&UX Design",
    img: r3,
    comment: `There are many variations of passages
 of Lorem Ipsum available, but the majority
 have suffered alteration in some form,
 by injected humour`,
  },
  {
    id: 4,
    name: "Finlay Kirk",
    course: "Web Developer",
    img: r1,
    comment: `Teachings of the great explore of truth, 
    the master-builder of human happiness. 
    no one rejects, dislikes, or avoids pleasure 
    itself, pleasure itself`,
  },
  {
    id: 5,
    name: "Dannette P. Cervantes",
    course: "Web Design",
    img: r2,
    comment: `Complete account of the system and
expound the actual Contrary to popular
belief, Lorem Ipsum is not simply 
random text. It has roots`,
  },
  {
    id: 6,
    name: "Clara R. Altman",
    course: "UI&UX Design",
    img: r3,
    comment: `There are many variations of passages
 of Lorem Ipsum available, but the majority
 have suffered alteration in some form,
 by injected humour`,
  },
];

const Review = () => {
  return (
    <div className="bg-gray-50 py-16">
      <SectionTitle
        heading={"What student’s say"}
        subHeading={"Lorem Ipsum is simply dummy text of the printing."}
      />

      <div className="max-w-screen-lg mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true, // Added dynamic bullets
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) => {
              return '<span class="' + className + '"></span>';
            }
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="pb-12">
              <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <p className="text-sm text-gray-700 text-start italic">
                    {review.comment}
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-indigo-300"
                    src={review.img}
                    alt={review.name}
                  />
                  <div className="ml-4 text-left">
                    <h2 className="text-lg font-bold text-indigo-900">
                      {review.name}
                    </h2>
                    <p className="text-sm text-gray-600">{review.course}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
