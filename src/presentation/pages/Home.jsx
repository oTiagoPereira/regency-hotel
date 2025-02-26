import CheckBox from "../components/checkBox/index.jsx";
import Footer from "../components/footer/index.jsx";
import Amenities from "../components/home/amenitiesSection/index.jsx";
import EventsAndActivities from "../components/home/eventsAndActivities/index.jsx";
import HeroSection from "../components/home/heroSection/index.jsx";
import RoomsSection from "../components/home/roomsSection/index.jsx";
import Navbar from "../components/navBar/index.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CheckBox />
      <RoomsSection />
      <EventsAndActivities />
      <Amenities />
      <Footer />
    </>
  );
}
