import About from "./components/Section/About/About"
import Intro from "./components/Section/Intro/Intro"
import Reservation from "./components/Section/Reservation/Reservation"
import Valeurs from "./components/Section/Valeurs/Valeurs"

function App() {

  return (

    <div className="App">
      <Intro />
      <About />
      <Valeurs />
      <Reservation />
    </div>

  )
}

export default App
