import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import Banner from "./Banner";
import OurFeature from "./OurFeature";
import TabJobs from "./TabJobs";
import Team from "./Team";

const Home = () => {
  return (
    <div className="bg-brown-50 ">
      <NavBar></NavBar>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto md:p-0 p-4  ">
        <TabJobs></TabJobs>
        <Team></Team>
        <OurFeature></OurFeature>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
