import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import ProductList from "./pages/ProductList";
import Navbar from './components/Navbar';
import Announcement from './components/Announcement';
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
const App = ()=> {
  return (
    <BrowserRouter>
        <Announcement />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
