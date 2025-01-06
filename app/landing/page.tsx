import Hero from "./_components/hero/hero"
import Cards from "./_components/cards"
import Responsibilities from "./_components/responsibilities/Responsibilities"
import Content from "./_components/content"
import Process from "./_components/process"
import ScreenShots from "./_components/screenShots/ScreenShots"
import Reviews from "./_components/Reviews"
import Footer from "./_components/frame-component1"

const LandingPage: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-white text-right text-22xl text-gray font-heebo">
      <Hero />
      <Cards />
      <Responsibilities />
      <Content />
      <Process />
      <ScreenShots />
      <Reviews />
      <Footer />
    </div>
  );
};

export default LandingPage;
