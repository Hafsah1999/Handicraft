// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <header>
   <div className="px-3  text-bg-dark bg-opacity-50">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center ">
       <div>
       </div>
       <div>
        <ul className="nav col-12 col-lg-auto my-1 justify-content-center my-md-0 fs-5"  style={{fontFamily:"serif"}}>
          <li>
            <Link to="/" className="nav-link text-white">
             
              Home
            </Link>
          </li>
        
          <li>
            <a href="#" className="nav-link text-white">
              
              Orders
            </a>
          </li>
          <li>
            <Link to="/Shop" className="nav-link text-white">
            
              Products
            </Link>
          </li>
         
        </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="px-3 py-2 ">
    <div className="container d-flex flex-wrap justify-content-between">
      <div>
        <a className="fs-2 text-danger fw-bold " style={{ fontFamily: "	Brush Script MT" }}>Creator

        </a>
      </div>
      <div className="text-end align-items-center d-flex">
        <Link to="/Login" type="button" className="btn btn-secondary  text-light py-1 me-2 fs-5" style={{fontFamily:"serif"}}>
          Login
        </Link>
        <Link to="/Signup" type="button " style={{fontFamily:"serif"}} className="btn py-1 fs-5 btn-danger">
          Sign-up
        </Link>
      </div>
    </div>
  </div>
 
</header>

   </>
  );
};

export default Navbar;
