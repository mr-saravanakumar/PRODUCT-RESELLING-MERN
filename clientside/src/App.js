import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import Error from './pages/Error';
import Rs from './pages/Rs';
import Addproducts from './pages/Addproducts';
import LocationProduct from './pages/LocationProduct';
import SingleProduct from './pages/SingleProduct';
import Mysell from './pages/Mysell';
import Navbar from './Navbar';
import Admin from './pages/Admin';
import {AnimatePresence} from "framer-motion";
function App() {
  return (
    <AnimatePresence>
      <Router>
      <div className="header">
      <Navbar/>
      </div>
         <Routes>
            <Route path="/" element={<Rs/>} />
             <Route path="/Addproducts" element={<Addproducts/>} />
             <Route path="/Product" element={<Product />} />
             <Route path="/Product/:id" element={<SingleProduct />} />
             <Route path="/LocationProduct" element={<LocationProduct />} />
             <Route path="/Home" element={<Home />} />
             <Route path="/Mysell" element={<Mysell />} />
             <Route path="/Admin" element={<Admin />} />
             <Route path="*" element={<Error/>} />
         </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
