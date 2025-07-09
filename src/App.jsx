import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"

function App() {

  return (
    <div className="bg-white dark:bg-black" >
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
