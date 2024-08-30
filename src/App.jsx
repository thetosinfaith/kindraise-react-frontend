import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebsiteLayout from './pages/LandingPage/WebsiteLayout'
// import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Signup from './auth/Signup/Signup'
import Login from './auth/Login/Login'
import PasswordChange from "./auth/PasswordChanged/PasswordChange";
import ResetPassword from './auth/Resetpassword/ResetPassword'
import CreateNewPassword from "./auth/CreateNewPassword/CreateNewPassword";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/passwordchange" element={<PasswordChange/>}/>
        <Route path="/createpassword" element={<CreateNewPassword/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>

        <Route path='/' element={<WebsiteLayout/>} />
        <Route path='*' element={<div>page not found</div>}/>
      </Routes>
    </Router>
  )
}   

export default App;