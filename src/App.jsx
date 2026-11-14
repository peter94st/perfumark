import { Routes, Route } from "react-router"

import { MainLayout } from "./components/MainLayout"

import Home from "./pages/Home"
import { Products } from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
