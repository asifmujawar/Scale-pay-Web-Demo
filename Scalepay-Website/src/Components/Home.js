import react from 'react'
import '../Styles/Home.css'
import hero from './hero2.png'
import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo-design.png'
import wireframe from './wireframe.jpg'
import market from './market2.jpg'
import ui from './ui.jfif'
import mobile from './mobile.png'
import work from './work4.png'
import node from './node-logo.png'
import reactlogo from './react-logo.png'
import express from './expresslogo.png'
import mongo from './mongologo.png'
import next from './next.png'
import native from './react-native.png'
import sql from './sql2.jfif'
import profile from './cart-profile.jpg'
import Footer from './Footer'
import team from './team.png'
import { useNavigate } from 'react-router'
import developer from './developerr.jfif'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import '../Styles/Team.css'
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className="wrapper">
                <section className="left">
                    <p className="heading">We Are <span>Professionals</span> Of Your Business Growth</p>
                    <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button>Sign-Up</button>
                </section>

                <section className="right">
                    <img src={team} />
                </section>
            </div>



            <div className="work">
                <div className="row">
                    <div className="col-lg-6" style={{ textAlign: 'center' }}>
                        <img src={work} />
                    </div>
                    <div className="col-lg-6">
                        <div className="work-text">
                            <h1>Work with Tried & True Digital Market Experts</h1>
                            <p>All surge3 We Know Knowledge is Power and Experience leads to results</p>
                            <p>
                                We're assembled team of experience & skilled digital marketers that can help you both establish & grow your online presence.We'll help you establish an online presence that draw & convert potential customers
                        </p>
                            <button className="get-started" onClick={() => navigate('/login')}>Get Started</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="crd-container">
                <h1 style={{ borderBottom: '2px solid red', display: 'inline-block', paddingBottom: '5px' }}>Our Services</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={logo} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={wireframe} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={market} />
                            <p className="card-head">Market Analysis</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={ui} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={mobile} />
                            <p className="card-head">Mobile Applications </p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={logo} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="technology">
                <h1>Technologies That We Use</h1>
                <div className="row">
                    <div className="col-lg-3">
                        <img src={reactlogo} />
                    </div>
                    <div className="col-lg-3">
                        <img src={node} />
                    </div>
                    <div className="col-lg-3">
                        <img src={express} />
                    </div>
                    <div className="col-lg-3">
                        <img src={mongo} />
                    </div>
                    <div className="col-lg-3">
                        <img src={next} />
                    </div>
                    <div className="col-lg-3">
                        <img src={sql} />
                    </div>
                    <div className="col-lg-3">
                        <img src={native} />
                    </div>
                </div>
            </div>


            <div className="team-container">
                <h1 style={{textAlign:'center'}}>Our Team</h1>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="cart-cont">
                        <div className="img-div">
                            <img src={developer} />
                        </div>
                        <div className="text-div">
                            <h3>ABCD</h3>
                            <p>Hello My name is ABCD & I'm a Computer Science Student.I'm Proficient About Web Development concepts</p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className="cart-cont">
                        <div className="img-div">
                            <img src={developer} />
                        </div>
                        <div className="text-div">
                            <h3>ABCD</h3>
                            <p>Hello My name is ABCD & I'm a Computer Science Student.I'm Proficient About Web Development concepts</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="cart-cont">
                        <div className="img-div">
                            <img src={developer} />
                        </div>
                        <div className="text-div">
                            <h3>ABCD</h3>
                            <p>Hello My name is ABCD & I'm a Computer Science Student.I'm Proficient About Web Development concepts</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="cart-cont">
                        <div className="img-div">
                            <img src={developer} />
                        </div>
                        <div className="text-div">
                            <h3>ABCD</h3>
                            <p>Hello My name is ABCD & I'm a Computer Science Student.I'm Proficient About Web Development concepts</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="cart-cont">
                        <div className="img-div">
                            <img src={developer} />
                        </div>
                        <div className="text-div">
                            <h3>ABCD</h3>
                            <p>Hello My name is ABCD & I'm a Computer Science Student.I'm Proficient About Web Development concepts</p>
                        </div>
                    </div>
                </SwiperSlide>
                
                
            </Swiper>
            </div>

            <div className="contact-us">
                <h1>Contact-Us</h1>
                <div className="form">
                    <div className="input-row">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="input-row">
                        <input type="text" placeholder="Mobile Number" />
                        <input type="text" placeholder="Your Subject" />
                    </div>
                    <div className="input-full-row">
                        <textarea rows={10} placeholder="Query/Message" />
                    </div>

                    <button className="form-button">Submit</button>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Home