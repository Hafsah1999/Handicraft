import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Shop from './components/Shop'
import AboutUs from './components/AboutUs'
import Login from './components/Login'
import Signup from './components/Signup'
import Pagenotfound from './components/Pagenotfound'
import Addproduct from './components/Addproduct'
import Manage from './components/Manage'
import Navbar from './components/Navbar'
import UpdateProduct from './components/update'
import ProductView from './components/view-product'


const App = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/view-product/:id" element={<ProductView />} />
          <Route path="/AboutUs" element={<AboutUs />} />

          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Addproduct" element={<Addproduct />} />
          <Route path="/Manage" element={<Manage />} />



        







        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App