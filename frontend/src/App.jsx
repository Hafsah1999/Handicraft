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


const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
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