import Footer from "../ui/Footer";
import HomeCTA from "./HomeCTA";
import HomeHeader from "./HomeHeader";
import HomeServices from "./HomeServices";

function HomeContainer() {
  return (
    <>
      <HomeHeader />
      <HomeServices />
      <HomeCTA />
      <Footer />
    </>
  );
}

export default HomeContainer;
