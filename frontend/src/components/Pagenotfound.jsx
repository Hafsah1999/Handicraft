import { Link } from 'react-router-dom'

const Pagenotfound = () => {
  return (
    <div className="pagenotfound-bg-img">

<div className="container-fluid ">
                <div className="row ">
                    <div className="container d-flex  justify-content-center  flex-column" style={{height:"100vh"}}>
                        <div className="card bg-transparent w-50 p-5 ms-5 shadow" style={{border:"none"}}>
                        <h3 className=" text-center text-white fw-semibold fs-3" style={{fontFamily:"Garamond"}}>LOOKS LIKE YOU ARE LOST IN SPACE</h3>
                        <h2 className=" text-white text-center " style={{fontSize:"60px",fontFamily:"cursive"}} >404</h2>
                        <Link to="/Home" className='nav-link'><button className="btn btn-light d-block m-auto fw-bold fs-5 w-25 mt-3" style={{fontFamily:"cursive"}}>Go Back</button></Link>
                        </div>
                       
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Pagenotfound