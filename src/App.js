import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/Pages/About/About";
import Blog from "./Component/Pages/Blog/Blog";
import Home from "./Component/Pages/Home/Home/Home";
import Login from "./Component/Pages/Login/Login/Login";
import SignUp from "./Component/Pages/Login/SignUp/SignUp";
import Pricing from "./Component/Pages/Pricing/Pricing";
import Services from "./Component/Pages/Services/Services";
import Testimonial from "./Component/Pages/Testimonial/Testimonial";
import Footer from "./Component/Shared/Footer/Footer";
import Header from "./Component/Shared/Header/Header";
import NotFound from "./Component/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/testimonial"
          element={<Testimonial></Testimonial>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
