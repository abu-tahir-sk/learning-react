import './App.css'
import LIneCharts from './components/LIneCharts/LIneCharts'
import Navbar from './components/Navbar/Navbar'
import Phones from './components/Phomes/Phones'
import PriceOPtion from './components/PriceOPtion/PriceOPtion'
// import NavbarD from './components/NavbarD/NavbarD'

function App() {
 
  return (
    <>
    {/* <NavbarD></NavbarD> */}
    <Navbar></Navbar>
    <PriceOPtion></PriceOPtion>
    <LIneCharts></LIneCharts>
    <Phones></Phones>
    </>
  )
}

export default App
