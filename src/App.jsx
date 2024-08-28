import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteLayout from './pages/LandingPage/WebsiteLayout'
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Signup from './auth/Signup/Signup'
import Login from './auth/Login/Login'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path='/' element={<WebsiteLayout/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  )
}

export default App;