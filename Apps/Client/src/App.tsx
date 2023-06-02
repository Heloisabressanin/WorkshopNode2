import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./view/Home";
import LoginForm from "./view/LoginForm";
import Order from "./view/Order";
import Products from "./view/Products";
import Register from "./view/Register";

function App() {
/*   function handleCallback(res) {
    console.log("Encoded JWT Id Token " + res.credential);
    window.localStorage.getItem("token");
    window.location.href = "http://localhost:5173/products";
  } */

  

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
  
    </>
  );
}

export default App;
