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
import Success from "./pages/Success";
const App = ()=> {
  const user = true;

  return (
    <BrowserRouter>
        <Announcement />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/products" element={<ProductList />} />

        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
