const LandingPage: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center bg-blue-200 -mt-[80px]">
      <div className="w-full h-[1000px] bg-gradient-to-b from-orange-200 to-orange-200 relative clip-path-diagonal -mt-[190px]">
        <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-r from-transparent to-orange-100 clip-path-diagonal"></div>
      </div>
      <div className="w-full h-[1000px] bg-white relative clip-path-diagonal -mt-[190px]">
      </div>
    </div>
  );
};

export default LandingPage;
