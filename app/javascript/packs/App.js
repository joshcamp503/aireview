import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Airlines from '../components/Airlines/Airlines'
import Airline from '../components/Airline/Airline'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Airlines />} />
          <Route path="/airlines/:slug" element={<Airline />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App