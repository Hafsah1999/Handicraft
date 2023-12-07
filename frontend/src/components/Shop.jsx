import { Link } from 'react-router-dom'
import  { useEffect, useState } from 'react'



const Shop = () => {
  // const navigate = useNavigate();

  const [recipeList, setrecipeList] = useState([]);
  const [masterList, setMasterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch('http://localhost:5000/product/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setrecipeList(data);
      setMasterList(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // const filterRecipe = (e) => {
  //   const value = e.target.value;
  //   setrecipeList(masterList.filter((recipe) => { 
  //     return (recipe.pn.toLowerCase().includes(value.toLowerCase())
  //      || recipe.category.toLowerCase().includes(value.toLowerCase())) }));
  // }

  const filterRecipe = (e) => {
    const value = e.target.value;
    setrecipeList(masterList.filter((recipe) => {
      return (recipe.pname.toLowerCase().includes(value.toLowerCase()))
    }))
    
  }


//   const filterRecipe = (e) => {
//     const value = e.target.value
//     let filteredProduct = masterList.filter((product) => {
//         return product.pname.toLowerCase().includes(value.toLowerCase());
//     });
//    setMasterList(filteredProduct)
// };

  const displayRecipeData = () => {
    if (recipeList.length === 0) {
      return <h1 className='text-center fw-bold' style={{ color: "seagreen" }}>No Data Found</h1>
    }

    return recipeList.map((recipe) => (
      <>
        <div className='col-md-3 mt-4 mb-4'>
          <div className="card bg-transparent shadow" style={{border:"none"}}>
            <img src={'http://localhost:5000/' + recipe.image} alt="" className="card-img-top img-fluid" style={{ objectFit: "cover", height: 250 }} />

            <div className="card-footer" style={{border:"none",  height:"200px"}}>
              <h3 className=' fw-semibold mt-3 mb-3' style={{fontFamily:"serif"}}>{recipe.pname}</h3>
              <p className='text-secondary' style={{fontFamily:"cursive"}}>{recipe.pdetail}</p>
              {/* <button className='btn btn-dark mb-2 me-1 px-3' onClick={ () => { navigate('/ShowRecipe/'+recipe._id) }}>Click to View</button> */}
            </div>
          </div>
        </div>
      </>
    ))
  }

  return (
    <>

      {/* header */}
      <header className=" p-0 sticky-top  w-100 bg-light" >
        <div className="container d-flex flex-wrap  ">
          <a
            to="/"
            className="text-decoration-none  me-lg-auto  "
          >

            <span className="fs-1 text-dark  fw-bold" style={{ fontFamily: "	Brush Script MT" }}>Creator</span>
          </a>
          <ul className="nav  d-flex flex-wrap justify-content-center align-items-center">

            <li className="nav-item">
              <Link to="/Shop" className="nav-link nav-button text-dark fs-4 px-3">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link text-dark nav-button fs-4 px-3">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Home" className="nav-link  text-dark fs-5 px-3">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
              </Link>
            </li>



          </ul>
        </div>

      </header>

      {/* main */}

      {/* heading */}

      <div className="container-fluid  p-5 bg-dark bg-opacity-25">
        <div className="container shadow p-4">
          <h1 className="text-center shop-head mb-3 display-5 fw-semibold" style={{ fontFamily: "Garamond", textTransform: "uppercase" }}>Find Things you will love</h1>
          <form className="input-group mb-4 w-75 mx-auto">
            <input type="search" role="search" className="form-control" placeholder='Search' onChange={filterRecipe} />
            <button className="btn btn-dark">Search</button>
          </form>
        </div>
      </div>

      {/* navbar */}
      {/* <nav className="navbar">
        <div className="container ">
          <Link to="/All" className='nav-link'><h5 className="">All</h5></Link>
          <Link to="/Metalware" className='nav-link'><h5 className="">Metalware</h5></Link>
          <Link to="/Woodwork" className='nav-link'><h5 className="">Woodwork</h5></Link>
          <Link to="/Pottery" className='nav-link'><h5 className="">Pottery</h5></Link>
          <Link to="/Jute" className='nav-link'><h5 className="">Jute</h5></Link>
          <Link to="/Carpets" className='nav-link'><h5 className="">Carpets </h5></Link>
          <Link to="/Cards" className='nav-link'><h5 className="">Handmade cards </h5></Link>



        </div>
      </nav> */}

      <div className="container-fluid bg-dark bg-opacity-25">
        <div className="container">
        <div className="row mt-5 mb-5">
          {displayRecipeData()}
        </div>
      </div>
      </div>

      {/* footer */}

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
                  <Link to="/Register" className="nav-link">  <p className="footer-text">Register</p></Link>
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
  )
}

export default Shop