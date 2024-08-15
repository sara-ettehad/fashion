import React from 'react';
import { Link } from 'react-router-dom';

import ProfileOneRemoveBg from "../images/profile1-removebg-preview.png";
import ProfileTwo from "../images/profile2.png";
import heroImg from "../images/hero.png";

import "../style/hero.css";

const Home = () => {
    return (
        <body>

            <section id="hero">
                <div className="ring"></div>

                <div className='hero__wrapper'>
                    <div className="hero__wrapper--left">
                        <h4>Best Collection</h4>
                        <h1>Express Your Mood with Modern Style</h1>
                        <p className="paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eius distinctio harum vero, illum perferendis voluptatem fugit?</p>
                        <button type="button" className="btn__hero">Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                    </div>

                    <img src={heroImg} alt=''/>

                    <div className="hero__wrapper--right">

                        <div className="right__header">
                            <h1>Flower shirt summer vibe</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora optio nobis corrupti velit?</p>
                            <div className="link__add">                  
                                <Link>Add to Cart <i className="fa-solid fa-up-right-from-square"></i></Link>
                            </div>
                        </div>

                        <div className="swiper ">
                            <div className="testSwiper"></div>
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

            </section>      
        </body>
    );
}

export default Home;