import { Route,Routes } from "react-router-dom"
import {Navbar} from "./components/Navbar.jsx"
import {Contact} from "./components/Contact.jsx"
import {About} from "./components/About.jsx"
import {Home} from "./components/Home.jsx"



function App() {
 

  return (
    <>
     <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
  
  </Routes>
    </>
  )
}

export default App



