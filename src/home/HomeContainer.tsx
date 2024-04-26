import HomeHeader from "./HomeHeader.tsx";
import HomeNavBar from "./HomeNavBar.tsx";
import HomeServices from "./HomeServices.tsx";
import HomeSubheader from "./HomeSubheader.tsx";

function HomeContainer() {
  return (
    <>
      <HomeNavBar />
      <HomeHeader />
      <HomeSubheader />
      <HomeServices />
    </>
  );
}

export default HomeContainer;
