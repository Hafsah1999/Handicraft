import { Link } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const AboutUs = () => {
    return (
        <>

            {/* header */}
            <nav className=" navbar  bg-dark sticky-top bg-opacity-75 p-0 "  >
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto ">
                        <li className="nav-item">
                            <a
                                to="/"
                                className="nav-link text-white px-2 "

                            >
                                Welcome to creator theme
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link  px-2">
                                <i className="fa-brands fa-twitter text-white"></i>

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link  px-2">
                                <i className="fa-brands fa-facebook text-white"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link  px-2">
                                <i className="fa-brands fa-instagram text-white"></i>
                            </Link>
                        </li>

                    </ul>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white  px-2">
                                Phone : 9876543210
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white px-2">
                                Email : creator12@gmail.com
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <header className=" p-0  w-100 bg-dark bg-opacity-25" style={{ position: "absolute" }} >
                <div className="container d-flex flex-wrap  ">
                    <a
                        to="/"
                        className="text-decoration-none  me-lg-auto  "
                    >

                        <span className="fs-1 text-white  fw-bold" style={{ fontFamily: "	Brush Script MT" }}>Creator</span>
                    </a>
                    <ul className="nav  d-flex flex-wrap justify-content-center align-items-center">
                        
                        <li className="nav-item">
                            <Link to="/Shop" className="nav-link nav-button fs-4 px-3">
                                Shop
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AboutUs" className="nav-link bg-white text-dark  nav-button fs-4 px-3">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Home" className="nav-link nav-button fs-5 px-3">
                            <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </Link>
                        </li>
                      


                    </ul>
                </div>

            </header>


            {/* main */}

            {/* image */}

            <img className='' style={{ width: "100%", height: "70vh" }} src="https://c.pxhere.com/photos/71/a0/concrete_chick_concrete_tinker_chickens_grey_and_white_feather_sugar_eggs_funny-1391185.jpg!d" alt="" />


            {/* our story */}
            <div className="container mt-5 p-5 mb-5 bg-dark bg-opacity-25">
                <div className="row shadow">
                    <h1 className="text-center mt-4 p-2 mb-4 bg-dark bg-opacity-25 about-text" style={{ fontFamily: "fantasy", letterSpacing: "2px" }}>OUR STORY</h1>
                    <p className="fs-5 px-5 text-muted" style={{ fontFamily: "serif" }}>Creator is inspired by a generation that is highly connected with its roots. Hence, we have crafted this platform that connects you to the artisans of India and showcases their work by providing you with the best handicraft items online. We aim to make the experience of buying aesthetic and contemporary products online delightful for customers. Also, the core motive is to make sure the handicraft industry in India gets a digital boost. We are here to make purchasing products online convenient for your lifestyle, making life simpler & safer for you.</p>
                    <p className="fs-5 px-5 text-muted" style={{ fontFamily: "serif" }}> Home decor items are not the easiest thing to find as of now. At first, we have to figure out what goes well with our house design, and then we have to review 100&apos;s products that may or may not be what we&apos;re looking for. ExclusiveLane provides a wide home  & decor products range designed to suit all your home interiors. Also, what better way can be to decorate your home than with some traditional handmade pieces that draw inspiration from the oldest civilisations in the world? So, in a similar context, you’ll find one-of-a-kind wall décor and room decor items — including motifs, patterns, and designs — right here. In totality, our unique luxury home décor items, wall decoration items and room decoration items online are a great way to help others feel at home or, on the contrary, to create an excellent modern home decor that you want to come home to.
                    </p>
                </div>
            </div>


            {/* swiper */}

            <Swiper
                slidesPerView={3}
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
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/75/83/a6/7583a608e8bb31bb82beeca2a1cf24c7.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img src="https://i.pinimg.com/236x/a0/b4/76/a0b476a18d334f4f7e196f2ce4a3521a.jpg" style={{ width: "400px", height: "370px" }} alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/93/c5/f4/93c5f4857eaf9855df5477d831e0c327.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://i.pinimg.com/236x/a9/bd/14/a9bd14046f6f484f5e3b6913dd5c122d.jpg" style={{ width: "400px", height: "370px" }} alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/87/15/70/871570541cbb35dc915697afdae3117d.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/ca/48/3f/ca483f129ed7da06c860f6c96db407c4.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/af/7d/4d/af7d4df41ef2579501f4904bd03d43b1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/79/53/5a/79535a9eb3a28c90d9a0d0f8476f632e.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/e6/e3/b2/e6e3b2d78d980069ae9e5f80fe371f36.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img style={{ width: "400px", height: "370px" }} src="https://i.pinimg.com/236x/dd/36/aa/dd36aa238e70a8638282918eb8832adb.jpg" alt="" /></SwiperSlide>

                <SwiperSlide><img src="https://i.pinimg.com/236x/e4/e9/bd/e4e9bdc8f92858eda68b9606998739bd.jpg" style={{ width: "400px", height: "370px" }} alt="" /></SwiperSlide>

            </Swiper>



            {/* what we do for you */}

            {/* left */}
            <div className="container mt-5 mb-5 bg-dark bg-opacity-25 p-5">
                <div className="row p-5 shadow">
                    <div className="col-md-6 p-3">
                        <h1 className="px-3 mb-3" style={{ fontFamily: 'fantasy', letterSpacing: '1px' }}>WHAT WE DO FOR YOU</h1>
                        <p className="px-3 text-muted" >Sit amet consectetur, adipisicing elit. ra qui quisquam eligendi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint blanditiis sapiente enim alias totam accusantium esse consectetur facere suscipit eveniet deserunt a deleniti, dignissimos vero porro in pariatur omnis magni.</p>
                        <p className="px-3 text-muted"  > dolor sit amet consectetur adipisicing elit. Enim dolor ullam rem quae corrupti deleniti expedita quos alias autem voluptatem.</p>
                        <Link to="/Shop"><button className="btn btn-success px-3 mx-3 mt-3 fs-5" style={{ fontFamily: 'cursive' }}>Shop Now</button></Link>
                    </div>


                    {/* right  */}
                    <div className="col-md-6">
                        <div className="row mt-3">
                            <div className="col-md-6   d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-truck-fast fs-4 mb-2 "></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>FREE SHIPPING</h5>
                                <p className="text-muted" style={{ fontSize: '12px', fontFamily: "cursive" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-money-bill-transfer fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>100% MONEY BACK </h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-spa fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>PLANT CARE TIPS</h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                            <div className="col-md-6 p-3  d-flex align-items-center justify-content-center flex-column">
                                <i className="fa-solid fa-walkie-talkie fs-4 mb-2"></i>
                                <h5 className="" style={{ fontFamily: 'serif' }}>GARDENING SERVICES</h5>
                                <p className="text-muted" style={{ fontSize: '12px' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nisi quod quisquam quam et rerum repellat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* kind words */}
            <div className="container mb-5 p-5 bg-dark bg-opacity-25">
                <div className="row shadow ">
                    <div className="col-">
                   
                        <h1 className="text-center mt-4 p-2 mb-4 bg-dark bg-opacity-25 about-text" style={{ fontFamily: "fantasy", letterSpacing: "2px", textTransform: "uppercase" }}>Kind words from our clients</h1>






                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper mb-5"
                        >
                            <SwiperSlide>
                                <div className="card about-swiper-1 m-2 shadow-lg bg-dark bg-opacity-25">
                                    <div className="card-body">

                                        <img src="https://img.freepik.com/premium-photo/happy-successful-adult-businesswoman-formal-outfit-stylish-glasses-smiling-looking-while-standing-with-arms-crossed_251859-2390.jpg?w=740" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Charlotte</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">

                                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1700030073~exp=1700030673~hmac=8b9bef272a9c5b4bf79e12e7a0d22037c687d48287b84121b9940c547e332cd7" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Jackson</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/young-female-put-glasses-looking-determined_176420-20746.jpg?w=740&t=st=1700030177~exp=1700030777~hmac=62b859c0e2afb49c0239d57220c380ae8fffb03899c917132d97af3f3a0a7da3" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Amella</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1700030126~exp=1700030726~hmac=76423dba7ab8f09044c7f159f32ab7b7e8a2c1e1b435e58f5fb88b3f54123103" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Scarlett</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>   
                                <div className="card m-2 about-swiper-1 shadow-lg bg-dark bg-opacity-25">
                                <div className="card-body">
                                    <img src="https://img.freepik.com/free-photo/portrait-young-man-with-dark-curly-hair_176532-8137.jpg?w=740&t=st=1700030210~exp=1700030810~hmac=1cd1b819771fee82733fe80d44dea6dba26f62b2761e75898acfe6e3b21b4dd9" className='img-about-swiper' alt="" />
                                    <h5 className="text-center mt-4 name">Lucas</h5>
                                    <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                </div>

                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card m-2 about-swiper-1 bg-dark shadow-lg bg-opacity-25">
                                    <div className="card-body">
                                        <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?w=740&t=st=1700030247~exp=1700030847~hmac=5d748445e590f198c93c100df257d56d50ca8fc9de63a4e1cd342671c4d064b3" className='img-about-swiper' alt="" />
                                        <h5 className="text-center mt-4 name">Hudson</h5>
                                        <p className="text-center ms-3 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officiis autem quibusdam quidem, nemo dolorem commodi earum placeat eaque accusamus. Possimus consequatur, esse explicabo mollitia porro perspiciatis deleniti soluta ipsum.</p>
                                    </div>

                                </div>
                            </SwiperSlide>

                        </Swiper>
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

export default AboutUs