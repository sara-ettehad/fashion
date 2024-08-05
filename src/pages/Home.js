import React from 'react';
import { Link } from 'react-router-dom';

import ProfileOneRemoveBg from "../images/profile1-removebg-preview.png";
import ProfileTwo from "../images/profile2.png";
import heroImg from "../images/hero.png";
import clothThree from "../images/cloth3-removebg-preview.png";
import toa from "../images/toa-heftiba-mAxyjlOwdFk-unsplash-removebg-preview.png";
import clothOne from "../images/cloth1.png";
import clothFour from "../images/cloth4-removebg-preview (1).png";
import saleTwo from "../images/sale2.jpg";
import SaleOne from "../images/sale1.png";
import upd from "../images/upd1.jpg";
import alyssa from "../images/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg";
import profOne from "../images/profile1.jpg"

import { FaTshirt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";



class Home extends React.Component{
    render(){
        return (
            <main>

                
                <section id="hero">

                    <div className="hero__wrapper">
                    
                        <div className="hero__wrapper--left">
                            <h4>Best Collection</h4>
                            <h1>Express Your Mood with Modern Style</h1>
                            <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eius distinctio harum vero, illum perferendis voluptatem fugit?</p>
                            <button type="button" className="btn btn__primary">Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                        </div>
        
                        <div className="hero__wrapper--mid">
                            <div className="ring"></div>
                            <img src={heroImg} alt=''/>
                        </div>
                        
                        <div className="hero__wrapper--right">

                            <div className="right__header">
                                <h1>Flower shirt summer vibe</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora optio nobis corrupti velit?</p>
                                <div className="link__add">                  
                                    <Link>Add to Cart <i className="fa-solid fa-up-right-from-square"></i></Link>
                                </div>
                            </div>

                            <div className="swiper ">

                                <div className="testSwiper">
                                
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">
                                            <img src={ProfileOneRemoveBg} alt=''/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={ProfileTwo} alt='' />
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={heroImg} alt=''/>
                                        </div>

                                    </div>

                                    <div className="swiper-pagination"></div>

                                </div>

                            </div>
                        </div>

                    </div>
                    
                    

                </section>

                <section id="about">
                
                    <div className="container">

                        <div className="about__wrapper">

                            <div className="about__wrapper--header">
                                <h3 className="service">Our Services</h3>
                                <h1>Why Choose Us?</h1>
                                <p>Our special services from our shop just for you</p>
                            </div>

                            <div className="about__wrapper--grid">

                                <div className="about__grid">
                                    <div className="about__grid--img">
                                        <FaTshirt />
                                    </div>
                                    <p>100% Material</p>
                                    <h3>High Quality Product</h3>
                                </div>


                                <div className="about__grid">
                                    <div className="about__grid--img">
                                        <FaTruck />
                                    </div>
                                    <p>Free & Fast Delivery</p>
                                    <h3>From $46 Worldwide</h3>
                                </div>

                                <div className="about__grid">
                                    <div className="about__grid--img">
                                        <FaArrowRotateLeft />
                                    </div>
                                    <p>10 Days</p>
                                    <h3>For Free Return</h3>
                                </div>

                                <div className="about__grid">
                                    <div className="about__grid--img">
                                        <FaFileInvoiceDollar />
                                    </div>
                                    <p>Payment</p>
                                    <h3>Secure System</h3>
                                </div>

                                <div className="about__grid">
                                    <div className="about__grid--img">
                                        <FaPhoneAlt />
                                    </div>
                                    <p>24/7 hours</p>
                                    <h3>Online Support</h3>
                                </div>

                            </div>
                            
                        </div>

                    </div>

                </section>

                <section id="collection">

                    <div className="container">

                        <div className="collection--wrapper">

                            <div className="collection--wrapper__left">

                                <div className="collection--box box1">

                                    <div className="collection--box__detail">
                                        <h1>Women Dress</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        <div className="col__link"><Link>View Collection</Link></div>
                                    </div>

                                </div>

                                <div className="collection--box box2">
                                    <div className="collection--box__detail">
                                        <h1>Accessories Collection</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        <div className="col__link"><Link>View Collection</Link></div>
                                    </div>
                                </div>

                            </div>

                            <div className="collection--wrapper__right">
                                <div className="collection--box box3">
                                    <div className="collection--box__detail">
                                        <h1>Women Dress</h1>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        <div className="col__link"><Link>View Collection</Link></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    
                </section>
    
                <section id="categories">

                    <div className="container">

                        <div className="categories__wrapper">

                            <div className="categories__wrapper--header">
                                <h3 className="service">Our Collection</h3>
                                <h1>Choose by Categories</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, minus! Voluptas exercitationem ullam accusamus maxime beatae?</p>
                            </div>

                            <div className="categories__wrapper--grid">

                                <div className="categories__grid">
                                    <div className="categories__grid--img">
                                        <img src={clothThree} alt=''/>
                                    </div>
                                    <h2>Pants</h2>
                                </div>

                                <div className="categories__grid">
                                    <div className="categories__grid--img">
                                        <img  src={toa} alt=''/>
                                    </div>
                                    <h2>Sweater</h2>
                                </div>

                                <div className="categories__grid">
                                    <div className="categories__grid--img">
                                        <img src={clothOne} alt=''/>
                                    </div>
                                    <h2>Cloak</h2>
                                </div>

                                <div className="categories__grid">
                                    <div className="categories__grid--img">
                                        <img src={clothFour} alt=''/>
                                    </div>
                                    <h2>Jumpsuit</h2>
                                </div>

                            </div>

                            <button className="btn btn__primary btn__categories">View all categories</button>
                            
                        </div>

                    </div>

                </section>

                <section id="sale">

                    <div className="container">

                        <div className="sale__wrapper">

                            <div className="sale__wrapper--left">
                                <img src={saleTwo} alt=''/>
                            </div>

                            <div className="sale__wrapper--right">
                                <img src={SaleOne} alt=''/>
                            </div>

                        </div>

                        <div className="sale__box">

                            <div className="sale__wrapper--mid">
                                <h3>Special Offer</h3>
                                <h1 className="sala__h1">Summer Collection</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <h1 className="sala__h2">Sale <span>50%</span> off</h1>
                                <button className="btn btn__primary btn__categories">Shop Now <i class="fa-solid fa-arrow-right"></i></button>
                            </div>

                        </div>
                        
                    </div>

                </section>

                <section id="inspiration">

                    <div className="container">

                        <div className="inspiration__wrapper">

                            <div className="inspiration__wrapper--header">
                                <h3>Our Blog</h3>
                                <h1>Find Your Fashion Inspiration</h1>
                                <div className="wrapper__header--p">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde recusandae repellendus alias?</p>
                                </div>
                            </div>
                            
                            <div className="inspiration__wrapper--detaile">

                                <div className="inspiration__wrapper--left">
                                    <div className="wrapper__left--back"></div>
                                    <img src={profOne} alt=''/>
                                </div>

                                <div className="inspiration__wrapper--right">
                                    <h1>Explore The Most Trendy Fashion in Time</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestiae nesciunt commodi ratione quos vel quam, odit assumenda voluptas soluta, dolorem quae, magnam corporis obcaecati exercitationem eaque. Maiores esse deserunt, quaerat laborum, labore ad aut harum molestias cupiditate perferendis ullam.</p>
                                    <div className="col__link">
                                        <Link>Visit Our Blog</Link>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section id="update">

                    <div className="container">

                        <div className="update__wrapper">

                            <div className="update__wrapper--header">
                                <h3>Our Blog</h3>
                                <h1>Our Latest Update</h1>
                                <div className="wrapper__header--p">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores unde recusandae repellendus alias?</p>
                                </div>
                            </div>

                            <div className="update__wrapper--detaile">

                                <div className="wrapper__detaile--box">
                                    <div className="date">18<span>sep</span></div>
                                    <img src={upd} alt=''/>
                                </div>
            
                                <div className="wrapper__detaile--box">
                                    <div className="date">18<span>sep</span></div>
                                    <img src={alyssa} alt=''/>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                
            </main>
        );
    }
}

export default Home;