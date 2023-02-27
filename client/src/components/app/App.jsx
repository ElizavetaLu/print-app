import { Route, Routes, useLocation } from "react-router-dom";
import Authentication from "../authentication/Authentication";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../pages/main/Main";
import Constructor from "../pages/constructor/Constructor";
// import ConstructorColorSize from "../pages/constructor-tools/color-size/ConstructorColorSize";
// import ProductType from "../pages/constructor-tools/product-type/ProductType";
import Cart from "../pages/cart/Cart";
import MyProfile from "../pages/my-profile/MyProfile";
import "./App.scss";
import SignUp from "../authentication/sign-up/SignUp";
import LogIn from "../authentication/log-in/LogIn";
import ForgotPassword from "../authentication/forgot-password/ForgotPassword";
import MyOrders from "../pages/my-orders/MyOrders";
import NotFound from "../pages/not-found/NotFound";

const App = () => {

  const { pathname } = useLocation();
  const className = pathname.startsWith('/authentication/') ? null : 'container'

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className={className}>
          <Routes>
          <Route path='*' element={<NotFound />} />
            <Route path="/authentication/">
          <Route path='' element={<NotFound />} />
              <Route path="signUp" element={<Authentication children={<SignUp />} />} />
              <Route path="logIn" element={<Authentication children={<LogIn />} />} />
              <Route path="forgotPassword" element={<Authentication children={<ForgotPassword />} />} />
            </Route>
            <Route path="/Home Page" element={<Main />} />
            <Route path="/My Profile" element={<MyProfile />} />
            <Route path="/Constructor" element={<Constructor />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/My Orders" element={<MyOrders />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default App