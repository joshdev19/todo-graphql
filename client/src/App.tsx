import { Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Add from "./pages/Add"
import Update from "./pages/Update"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update/:id" element={<Update/>}/>
    </Routes>
  )
}

export default App