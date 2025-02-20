import './App.css'
import CheckBox from './presentation/components/checkBox'
import Footer from './presentation/components/footer'
import Amenities from './presentation/components/home/amenitiesSection'
import EventsAndActivities from './presentation/components/home/eventsAndActivities'
import RoomsSection from './presentation/components/home/roomsSection'
import Navbar from './presentation/components/navBar'
import Home from './presentation/pages/Home'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <CheckBox />
      <RoomsSection />
      <EventsAndActivities />
      <Amenities />
      <Footer />
    </>
  )
}

export default App;