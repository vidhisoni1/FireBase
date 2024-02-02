import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

const App = () => {
  return (
    <>
    <Home/>
    
      {/* <BrowserRouter>
    <Routes>
        <Route  path="/" element={Home} />
        <Route  path="/add" element={AddEdit}/>
        <Route  path="/update/:id" element={AddEdit} />
        <Route  path="/view/:id" element={View} />
        <Route  path="/view/:id" element={View} />
    </Routes>
      
      </BrowserRouter> */}
    </>
  )
}

export default App