import Banner from "../components/Banner";
import HomeProductsList from "../components/HomeProductsList";
import HoverCard from "../components/HoverCard";
import HomeGridCard from "../components/HomeGridCard";
import HomeBestStory from "../components/HomeBestStory";

function home() {
  return (
    <>
      <Banner />
      <HomeProductsList />
      <HoverCard />
      <HomeGridCard />
      <HomeBestStory />
    </>
  );
}

export default home;
