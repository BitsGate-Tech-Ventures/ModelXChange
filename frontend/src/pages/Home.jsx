import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"

function Home() {
  return (
    <>
      <Navbar></Navbar>

      <div className="max-w-7xl mx-auto pt-29 px-6">

      <HeroSection></HeroSection>
      
      </div>
      
    </>
   
  )
}

export default Home