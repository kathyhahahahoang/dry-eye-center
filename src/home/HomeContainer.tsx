import Footer from "../ui/Footer";
import HomeCTA from "./HomeCTA";
import HomeHeader from "./HomeHeader";
import HomeServices from "./HomeServices";
import HomeSubheader from "./HomeSubheader";

function HomeContainer() {
  return (
    <>
      <HomeHeader />
      <HomeSubheader />
      <HomeServices />
      <HomeCTA />
      <Footer />
    </>
  );
}

export default HomeContainer;
