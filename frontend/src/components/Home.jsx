import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

const Home = () => {
  return (
    <>


      {/* Header */}

   




      {/* Main content */}

      {/* swiper */}
      <Swiper
        spaceBetween={30}
        effect={'fade'}

        pagination={{
          clickable: true,
        }}

        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper mb-5"
      >



        <SwiperSlide>
          <div className="bg-img-1">
          

            <div className="container-fluid  bg-opacity-25 bg-dark" style={{ height: "80vh" }}>


              <div className="container d-flex flex-column align-items-center justify-content-center  text-white" style={{ height: "70vh" }}>
                <h1 className="text-home mb-4">CERAMICS</h1>
                <p className="text-center fs-4 mb-5" style={{ fontFamily: "Garamond" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> delectus eos repellat dignissimos eLink quos! Consequuntur voluptas ex <br /> non molestias optio, sunt culpa voluptatum neque!</p>
                <button className="home-btn-1">View More</button>

              </div>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-img">
        

            <div className="container-fluid  bg-opacity-25 bg-dark" style={{ height: "80vh" }}>


              <div className="container d-flex flex-column align-items-center justify-content-center  text-white" style={{ height: "70vh" }}>
                <h1 className="text-home mb-4">HANDMADE</h1>
                <p className="text-center fs-4 mb-5" style={{ fontFamily: "Garamond" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> delectus eos repellat dignissimos ea quos! Consequuntur voluptas ex <br /> non molestias optio, sunt culpa voluptatum neque!</p>
                <button className="home-btn-1">View More</button>

              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-img-2">
           
            <div className="container-fluid  bg-opacity-25 bg-dark" style={{ height: "80vh" }}>


              <div className="container d-flex flex-column align-items-center justify-content-center  text-white" style={{ height: "70vh" }}>
                <h1 className="text-home mb-4">POTTERY</h1>
                <p className="text-center fs-4 mb-5" style={{ fontFamily: "Garamond" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> delectus eos repellat dignissimos ea quos! Consequuntur voluptas ex <br /> non molestias optio, sunt culpa voluptatum neque!</p>
                <button className="home-btn-1">View More</button>

              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>


      {/* awesome story */}
      <div className="row my-5">
        <div className="col-md-7">
          <div className="container  ms-5 mt-5">
            <h2 className="text-awesome">AWESOME STORY</h2>
            <p className="fs-5 mt-5 mb-4 text-secondary fw-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga impedit repellat ducimus inventore id cumque aperiam praesentium eos obcaecati. Ea?</p>
            <h6 className="mt-4">DESIGN</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: "65%", color: "white", backgroundColor: "brown" }} aria-valuemin="0" aria-valuemax="100">65%</div>
            </div>
            <h6 className="mt-3">QUALITY</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: "95%", color: "white", backgroundColor: "brown" }} aria-valuemin="0" aria-valuemax="100">95%</div>
            </div>
            <h6 className="mt-3">HANDMADE</h6>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: "80%", color: "white", backgroundColor: "brown" }} aria-valuemin="0" aria-valuemax="100">80%</div>
            </div>

          </div>
        </div>

        <div className="col-md-5">
          <img src="https://i.ebayimg.com/images/g/xUgAAOSwRgpiuCvG/s-l1600.png" className='w-75 ms-5 mt-5' alt="" />

        </div>
      </div>
      {/* reviews */}
      <div className="bg-img-2" >
        <div className="container-fluid bg-dark bg-opacity-25 " style={{ position: "relative", height: "90vh" }}>
          <div className="container " style={{ height: "90vh" }}>
            <div className="row ">
              <div className="col-md-4" >
                <div className="card bg-light bg-opacity-50 shadow" style={{ top: "150px" }}>
                  <h6 className="home-card-head">EVERYTHING IS AWESOME</h6>
                  <p className=" me-4 mt-3 mb-5 text-muted" style={{ marginLeft: "30px", fontSize: "15px" }}>Lorem ipsum amet consectetur adipisicing elit. Saepe, quidem nostrum. Quibusdam, perspiciatis exercitationem alias.</p>
                </div>
                <div className="card bg-transparent mb-4" style={{ top: "190px", border: "none" }}>
                  <div className="row">
                    <div className="col-md-3">
                      <img className='card-img-home' src="https://i.pinimg.com/564x/15/03/f6/1503f6352fb72ef76d67a45f23ec0dc9.jpg" alt="" />

                    </div>
                    <div className="col-md-6">
                      <h5 className="text-white mt-3 ms-3 mb-1" style={{ fontFamily: "serif" }}>EMILIA MOLER</h5>
                      <p className="text-white ms-3 fw-semibold">pr manager</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-md-4" >
                <div className="card  bg-light bg-opacity-50 shadow" style={{ top: "150px" }}>
                  <h6 className="home-card-head">FANTASTIC WEB SKILLS</h6>
                  <p className=" me-4 mt-3 mb-5 text-muted" style={{ marginLeft: "30px", fontSize: "15px" }}>Lorem ipsum amet consectetur adipisicing elit. Saepe, quidem nostrum. Quibusdam, perspiciatis exercitationem alias.</p>
                </div>
                <div className="card bg-transparent mb-4" style={{ top: "190px", border: "none" }}>
                  <div className="row">
                    <div className="col-md-3">
                      <img className='card-img-home' src="https://i.pinimg.com/564x/0b/58/2f/0b582f85c092dbaefa55f4508bf06b8d.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                      <h5 className="text-white mt-3 ms-3 mb-1" style={{ fontFamily: "serif" }}>UNO MATTES</h5>
                      <p className="text-white ms-3 fw-semibold mb-3">developer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4" >
                <div className="card  bg-light bg-opacity-50 shadow" style={{ top: "150px" }}>
                  <h6 className="home-card-head">AMAZING SUPPORT TEAM</h6>
                  <p className=" me-4 mt-3 mb-5 text-muted" style={{ marginLeft: "30px", fontSize: "15px" }}>Lorem ipsum amet consectetur adipisicing elit. Saepe, quidem nostrum. Quibusdam, perspiciatis exercitationem alias.</p>

                </div>

                <div className="card bg-transparent mb-4" style={{ top: "190px", border: "none" }}>
                  <div className="row">
                    <div className="col-md-3">
                      <img className='card-img-home' src="https://i.pinimg.com/564x/af/d2/bd/afd2bd0cf55eb83819da40f7c544c3f0.jpg" alt="" />

                    </div>
                    <div className="col-md-8">
                      <h5 className="text-white mt-3 ms-3 mb-1" style={{ fontFamily: "serif" }}>MARIA WILIAMS</h5>
                      <p className="text-white ms-3 fw-semibold mb-3">designer</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>


      </div>


      {/* ceramic pottery */}

      <div className="container ">
        <h2 className="text-ceramic">ceramic pottery</h2>
        <p className="text-center text-secondary fs-5 mt-4 mb-5"> Dolor sit amet consectetur adipisicing elit. Culpa unde doloremque voluptates  <br />esse, rerum enim nemo! Facere dolor placeat deserunt.</p>


        {/* left */}
        <div className="row">
          <div className="col-md-4">

            <div className="row mb-3 mt-3">
              <div className="col-">
                <div className="row">
                  <div className="col-md-9">
                    <h5 className="mt-4 text-end fw-semibold" style={{ fontFamily: "Garamond", fontSize: "17px", letterSpacing: "2px" }}>DESIGN SKETCHES</h5>
                    <p className="text-secondary mt-3 mb-3 text-end "> Sit amet consectetur adipisicing elit. Quibusdam enim architecto.esse, rerum enim nemo! Facere dolor</p>
                  </div>

                  <div className="col-md-2">
                    <i className="fa-solid fa-pen  fs-3 text-secondary" style={{ marginTop: "30px" }}></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-">
                <div className="row mb-3">
                  <div className="col-md-9">
                    <h5 className="mt-4 text-end fw-semibold" style={{ fontFamily: "Garamond", fontSize: "17px", letterSpacing: "2px" }}>QUALITY MATERIALS</h5>
                    <p className="text-secondary mt-3 mb-3 text-end "> Sit amet consectetur adipisicing elit. Quibusdam enim architecto.esse, rerum enim nemo! Facere dolor</p>
                  </div>

                  <div className="col-md-2">
                    <i className="fa-regular fa-bookmark  fs-3 text-secondary" style={{ marginTop: "30px" }}></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-">
                <div className="row">
                  <div className="col-md-9">
                    <h5 className="mt-4 text-end fw-semibold" style={{ fontFamily: "Garamond", fontSize: "17px", letterSpacing: "2px" }}>GIFT COLLECTION</h5>
                    <p className="text-secondary mt-3 mb-3 text-end "> Sit amet consectetur adipisicing elit. Quibusdam enim architecto.esse, rerum enim nemo! Facere dolor</p>
                  </div>

                  <div className="col-md-2">
                    <i className="fa-solid fa-gift  fs-3 text-secondary" style={{ marginTop: "30px" }}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* center */}
          <div className="col-md-4">
            <img src="https://i.pinimg.com/564x/2d/09/8a/2d098a881298c0760611133164c52246.jpg" className='w-100' alt="" />

          </div>


          {/* right */}
          <div className="col-md-4">
            <div className="row mb-3 mt-3">
              <div className="col-">
                <div className="row">

                  <div className="col-md-2">
                    <i className="fa-solid fa-flask ms-2  fs-3 text-secondary" style={{ marginTop: "30px" }}></i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="mt-4  fw-semibold" style={{ fontFamily: "Garamond", fontSize: "17px", letterSpacing: "2px" }}>HANDMADE POTTERY</h5>
                    <p className="text-secondary mt-3 mb-3  "> Sit amet consectetur adipisicing elit. Quibusdam enim architecto.esse, rerum enim nemo! Facere dolor</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-">
                <div className="row mb-3">
                  <div className="col-md-2">
                    <i className="fa-regular fa-gem  fs-3 text-secondary" style={{ marginTop: "30px" }}></i>
                  </div>

                  <div className="col-md-9">
                    <h5 className="mt-4  fw-semibold" style={{ fontFamily: "Garamond", fontSize: "17px", letterSpacing: "2px" }}>LIMITED COLLECTIONS</h5>
                    <p className="text-secondary mt-3 mb-3 "> Sit amet consectetur adipisicing elit. Quibusdam enim architecto.esse, rerum enim nemo! Facere dolor</p>
                  </div>


                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-">
                <div className="row">
                  <div className="col-md-2">
                    <i className="fa-regular fa-heart  fs-3 text-secondary" style={{ marginTop: "30px" }}></i>
                  </div>
                  <div className="col-md-9">
                    <h5 className="mt-4  fw-semibold" style={{ fontFamily: "Garamond", fontSize: "17px", letterSpacing: "2px" }}>MADE WITH LOVE</h5>
                    <p className="text-secondary mt-3 mb-3 "> Sit amet consectetur adipisicing elit. Quibusdam enim architecto.esse, rerum enim nemo! Facere dolor</p>
                  </div>


                </div>
              </div>

            </div>

          </div>
        </div>

      </div >

      {/* handicraft slides */}

      <div className='container-fluid mt-5 mb-5'>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}


          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide><img src="https://images.alphacoders.com/597/597503.jpg" style={{ width: "250px", height: "230px" }} alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://www.holidify.com/images/cmsuploads/compressed/BrassBowl_20180317130509.jpg" alt="" /></SwiperSlide>

          <SwiperSlide><img src="https://authindia.com/wp-content/uploads/2020/01/HANDMADE1.jpeg" style={{ width: "250px", height: "230px" }} alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://t4.ftcdn.net/jpg/05/66/34/09/360_F_566340977_WDnTOkAclTpOu6y5lA5cUFmeP5fIgXXB.jpg" style={{ width: "250px", height: "230px" }} alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F006%2F885%2Fwooden-handicraft-items-209.jpg&w=750&q=75" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/Handicraft-Business1--1-.jpg" style={{ width: "250px", height: "230px" }} alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://authindia.com/wp-content/uploads/2018/01/hands-1283146_1280-e1515408069682.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1688722767/kyoto/20230124_Kyotohandicraftcenter_4354_l" alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-08/hands-make-potter-decorative-pattern-earthenware.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://media.istockphoto.com/id/1309646840/photo/handicraft-packaging-from-natural-product.jpg?s=612x612&w=0&k=20&c=lXVQU2xpmr-FrJCM93wQpeGgb-gDFCwSCFiVrOcP6L8=" alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://www.tripsavvy.com/thmb/_1Zg7xAjTPSehYNJjCIMJ1Xo7jI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-521718712-59b8ef73b501e80014ae70ab.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://www.holidify.com/images/cmsuploads/compressed/BrassBowl_20180317130509.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img style={{ width: "250px", height: "230px" }} src="https://static.dezeen.com/uploads/2013/04/dezeen_UK-to-drop-crafts-from-list-of-creative-industries_2.jpg" alt="" /></SwiperSlide>


        </Swiper>
      </div>

      <div className="container">
        <h2 className="text-ceramic">HANDICRAFT NEWS</h2>
        <p className="text-center text-secondary fs-5 mt-4 mb-5"> Dolor sit amet consectetur adipisicing elit. Culpa unde doloremque voluptates  <br />esse, rerum enim nemo! Facere dolor placeat deserunt.</p>
        <div className="row mb-5" >
          <div className="col-md-4 mb-3 ms-3 bg-img-col-home">

            <h6 className="text-white mt-5 ms-3">BY MARINE WILLIAMS</h6>
            <h3 className="text-white ms-3 mt-4 " style={{ fontFamily: "serif", letterSpacing: "1px", wordSpacing: "5px" }}>AWESOME JOBS AND A LOT WINNING <br /> AWARDS AND GIFTS</h3>
            <button className="btn  text-white ms-2" style={{ marginTop: "200px" }}>view more</button>
          </div>
          <div className="col-md-4 ms-3 mb-3 bg-img-col-home-1">
            <h6 className="text-white mt-5 ms-3">BY MARINE WILLIAMS</h6>
            <h3 className="text-white ms-3 mt-4 " style={{ fontFamily: "serif", letterSpacing: "1px", wordSpacing: "5px" }}>WE DRINK COFFEE  <br /> EVERYDAY A COUPLE OF TIMES</h3>
            <button className="btn  text-white ms-2" style={{ marginTop: "200px" }}>view more</button>

          </div>
          <div className="col-md-4 mb-3 ms-3 bg-img-col-home-2">
            <h6 className="text-white mt-5 ms-3">BY MARINE WILLIAMS</h6>
            <h3 className="text-white ms-3 mt-4 " style={{ fontFamily: "serif", letterSpacing: "1px", wordSpacing: "5px" }}>WORKING HOURS <br /> EVERYDAY THE SAME HAPPY DAYS</h3>
            <button className="btn  text-white ms-2" style={{ marginTop: "200px" }}>view more</button>

          </div>
        </div>

      </div>

      <div className="bg-img mb-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-3">
              <div className="card" style={{ marginTop: "150px" }}>
                <i className="fa-regular p-2 mx-auto fs-3 fa-bookmark   text-secondary" style={{ marginTop: "30px" }}></i>

                <h6 className="mt-4 text-center">WINNING AWARDS</h6>
                <p className="text-secondary mt-3 mb-5 text-center ms-3 me-3">Dolor sit amet consectetur adipisicing elit. Dolorem nulla odit natus nam magnam assumenda.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" style={{ marginTop: "150px" }}>
                <i className="fa-regular p-2 mx-auto fs-3 fa-lightbulb  text-secondary" style={{ marginTop: "30px" }}></i>

                <h6 className="mt-4 text-center">ADVERTISING IDEAS</h6>
                <p className="text-secondary mt-3 mb-5 text-center ms-3 me-3">Dolor sit amet consectetur adipisicing elit. Dolorem nulla odit natus nam magnam assumenda.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" style={{ marginTop: "150px" }}>
                <i className=" p-2 mx-auto fs-3 fa-solid fa-camera-retro   text-secondary" style={{ marginTop: "30px" }}></i>

                <h6 className="mt-4 text-center">New SKILLS</h6>
                <p className="text-secondary mt-3 mb-5 text-center ms-3 me-3">Dolor sit amet consectetur adipisicing elit. Dolorem nulla odit natus nam magnam assumenda.</p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card" style={{ marginTop: "150px" }}>
                <i className="fa-solid p-2 mx-auto fs-3 fa-location-dot   text-secondary" style={{ marginTop: "30px" }}></i>

                <h6 className="mt-4 text-center">WINNING AWARDS</h6>
                <p className="text-secondary mt-3 mb-5 text-center ms-3 me-3">Dolor sit amet consectetur adipisicing elit. Dolorem nulla odit natus nam magnam assumenda.</p>
              </div>
            </div>


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
  )
}

export default Home