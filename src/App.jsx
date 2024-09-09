import { HashRouter as Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import HomepageLayout from "./layouts/HomepageLayout/HomepageLayout";
import Signup from "./auth/Signup/Signup";
import Login from "./auth/Login/Login";
import PasswordChange from "./auth/PasswordChanged/PasswordChange";
import CreateNewPassword from "./auth/CreateNewPassword/CreateNewPassword";
import ResetPassword from "./auth/ResetPass/ResetPass";
import DashBoard from "./pages/Dashboard/Dashboard";
import Campaign from "./pages/Campaign/Campaign";
import Donor from "./pages/Donor/Donor";
import Payout from "./pages/Payout/Payout";
import Account from "./pages/Account/Account";
import CreateCampaign from "./pages/CreateCampaign/CreateCampaign";
import FundraisingPage from "./pages/FundraisingPage/FundraisingPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Public Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/createpassword" element={<CreateNewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* Homepage */}
        <Route path="/" element={<HomepageLayout />} />

        {/* Fundraising Page */}
        <Route path="/fundraising-page" element={<FundraisingPage />} />

        {/* Dashboard and related routes */}
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="campaign/create.campaign" element={<CreateCampaign />} />
          <Route path="donor" element={<Donor />} />
          <Route path="payout" element={<Payout />} />
          <Route path="account" element={<Account />} />
        </Route>

        {/* Undefined paths */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
