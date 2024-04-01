import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/register.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
