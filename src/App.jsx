import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Sucessmessage from './Sucessmessage';

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="sucess" element={<Sucessmessage />} />
          <Route path="*" element={<div>404 page not found</div>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App;
