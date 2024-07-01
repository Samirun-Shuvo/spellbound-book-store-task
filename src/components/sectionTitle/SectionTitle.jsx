const SectionTitle = ({ heading, subHeading, leftImg, rightImg }) => {
  return (
    <div className="text-center flex justify-between items-center my-8 px-2">
      <div className="flex-shrink-0">
        <img src={leftImg} alt="" className="w-16 h-auto" />
      </div>
      <div className="px-4">
        <h3 className="text-xl font-bold">{heading}</h3>
        <p className="text-[#b87777] mb-2">{subHeading}</p>
      </div>
      <div className="flex-shrink-0">
        <img src={rightImg} alt="" className="w-16 h-auto" />
      </div>
    </div>
  );
};

export default SectionTitle;
