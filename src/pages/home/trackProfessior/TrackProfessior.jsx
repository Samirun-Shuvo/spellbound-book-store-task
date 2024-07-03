import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import leftSectionTitleImg from "../../../assets/home/track-professior/left.png";
import rightSectionTitleImg from "../../../assets/home/track-professior/right.png";

const TrackProfessior = () => {
  return (
    <div className="">
      <SectionTitle
        heading={"Our Tracks"}
        subHeading={"Lorem Ipsum is simply dummy text of the printing."}
        leftImg={leftSectionTitleImg}
        rightImg={rightSectionTitleImg}
      />
    </div>
  );
};

export default TrackProfessior;
