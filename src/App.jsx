import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteLayout from './pages/LandingPage/WebsiteLayout'
import Signup from './auth/Signup/Signup'
import Login from './auth/Login/Login'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path='/' element={<WebsiteLayout/>}/>


        
        
      </Routes>
    </Router>
  )
}

export default App;