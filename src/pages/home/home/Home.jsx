import Experience from "../experience/Experience";
import Header from "../header/Header";
import Review from "../review/Review";
import Subscribe from "../subscribe/Subscribe";
import Track from "../track/Track";
import TrackProfessior from "../trackProfessior/TrackProfessior";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Track></Track>
      <Experience></Experience>
      <Review></Review>
      <TrackProfessior></TrackProfessior>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
