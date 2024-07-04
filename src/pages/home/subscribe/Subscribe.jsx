import subscribe from "../../../assets/home/subscribe/Group 355.png";

const Subscribe = () => {
  return (
    <div
      className="max-w-screen-xl mx-auto flex justify-center items-center bg-cover bg-center h-72"
      style={{ backgroundImage: `url(${subscribe})` }}
    >
      <div className="  text-white text-center p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Subscribe to our newsletter</h1>
        <p className="text-md mb-6">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className="flex justify-center">
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-lg">
            <input
              type="email"
              className="py-3 px-4 text-gray-700 focus:outline-none"
              placeholder="Email Address"
            />
            <button className="bg-[#FF7426] text-white mr-1 px-10 py-2 rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
