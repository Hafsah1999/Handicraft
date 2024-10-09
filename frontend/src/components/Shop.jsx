import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the toggle button

const Shop = () => {
  const [productList, setproductList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to track sidebar visibility
  const categories = [
    
    "Woodwork",
    "Pottery",
    "Jute",
    "Handmade",
    "Metalware",
    "Carpets",
  ];

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/product/getall');
    if (res.status === 200) {
      const data = await res.json();
      setproductList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterproduct = (e) => {
    const value = e.target.value;
    setproductList(masterList.filter((product) => {
      return product.pname.toLowerCase().includes(value.toLowerCase());
    }));
  };

  const filterByCategory = (category) => {
    const filteredData = masterList.filter(product => product.category === category);
    setproductList(filteredData);
  };

  const displayproductData = () => {
    if (productList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>;
    }

    return productList.map((product) => (
      <div className='col-md-3 mt-4 mb-4' key={product._id}>
        <div className="card bg-transparent shadow" style={{ border: "none" }}>
          <img src={'http://localhost:5000/' + product.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />
          <div className="card-footer" style={{ border: "none", height: "200px" }}>
            <h3 className='fw-semibold mt-3 mb-3' style={{ fontFamily: "serif" }}>{product.pname}</h3>
            <p className='text-secondary' style={{ fontFamily: "cursive" }}>{product.category}</p>
            <Link to={`/view-product/${product._id}`} className="btn btn-primary">
              View Product
            </Link>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      {/* header */}
      <div className="container-fluid mb-5">
        <div className="row">
          {/* Toggle Button for Sidebar */}
          <button className="btn btn-dark d-md-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes /> : <FaBars />} {/* Toggle between open and close icons */}
          </button>

          {/* Sidebar */}
          <div className={`col-md-3 fixed-sidebar ${sidebarOpen ? 'd-block' : 'd-none'} d-md-block`}> {/* Update the sidebar class */}
            <div className="container-fluid py-5">
              <div className="container border-bottom p-2">
                <h1 className="text-center shop-head mb-3 fw-semibold" style={{ fontFamily: "Garamond", textTransform: "uppercase" }}>Find Things You Will Love</h1>
                <form className="input-group mb-4  w-100 mx-auto">
                  <input type="search" style={{ fontSize: "12px" }} role="search" className="form-control h-25" placeholder='Search' onChange={filterproduct} />
                  <button className="btn btn-dark " style={{ fontSize: "10px" }}><FaSearch /></button>
                </form>
              </div>
            </div>
            <h4 className="fw-semibold text-center mb-3" style={{ fontFamily: "serif" }}>Categories</h4>
            <ul className="list-group">
              {categories.map((category) => (
                <li className="list-group-item" key={category}>
                  <button className='nav-link' onClick={() => filterByCategory(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="col-md-9">
            <div className="row">
              {displayproductData()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="bg-img-4">
          <div className="container-fluid bg-dark bg-opacity-50" style={{ height: "60vh" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-3 mt-5 text-white text-center">
                  <h5 className="mb-4 mt-4 footer-head">Quick Links</h5>
                  <Link to="/Home" className="nav-link"> <p className='footer-text'>Home</p></Link>
                  <Link to="/Shop" className="nav-link"><p className="footer-text">Shop</p></Link>
                  <Link to="/AboutUs" className="nav-link">  <p className="footer-text">About Us</p></Link>
                  <Link to="/Login" className="nav-link"><p className="footer-text">Login</p></Link>
                  <Link to="/Signup" className="nav-link">  <p className="footer-text">Signup</p></Link>
                </div>

                <div className="col-md-6 mt-5 text-white text-center">
                  <span className="fs-1 text-white  fw-bold" style={{ fontFamily: "	Brush Script MT" }}>Creator</span>

                  <p className="footer-text">It is a traditional main sector of craft making and applies to a wide range of creative and design activities that are related to making things.</p>
                  <i className="fa-brands fa-twitter fs-5 text-white"></i>
                  <i className="fa-brands fa-facebook ms-2 fs-5 text-white"></i>
                  <i className="fa-brands fa-instagram ms-2 fs-5 text-white"></i>
                  <p className="mt-2 mb-1 footer-text">+91 9876543210</p>
                  <p className="mb-1 footer-text">creator12@gmail.com</p>
                  <p className="mb-4 footer-text">Hazratganj,Lucknow</p>
                </div>

                <div className="col-md-3 mt-5 text-white text-center">
                  <h5 className="mb-4 mt-4 footer-head">Latest posts</h5>
                  <Link to="/Home" className="nav-link"> <p className='footer-text'>Pieces of art</p></Link>
                  <Link to="/Woodwork" className="nav-link"><p className="footer-text">Woodcraft</p></Link>
                  <Link to="/Metalware" className="nav-link">  <p className="footer-text">Metalware</p></Link>
                  <Link to="/Carpets" className="nav-link">  <p className="footer-text">Carpets</p></Link>
                  <Link to="/Pottery" className="nav-link">  <p className="footer-text">Pottery</p></Link>


                </div>

              </div>
            </div>
          </div>
        </div>
        
        <div className="container">
          <p className="text-center text-danger p-4" style={{ fontFamily: "cursive" }}>@2023 | All Right Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Shop;
