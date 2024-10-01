import "./App.css";
import MainLayout from "./layouts/MainLayout";
import SignupForm from "./pages/createAccount";
import ResetPasswordForm from "./pages/forgotPassword";
import Home from "./pages/home";
import LoginForm from "./pages/login";
import Shop from "./pages/shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/reset-password' element={<ResetPasswordForm />} />
            <Route path='/sign-up' element={<SignupForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
