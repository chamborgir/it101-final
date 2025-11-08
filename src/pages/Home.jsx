// src/pages/Home.jsx
import React, { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

function Home() {
    const { slideIndex } = useOutletContext();

    return (
        <>
            {/* Product Slider */}
            <div className="slider">
                <div
                    className="sliderWrapper"
                    style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
                >
                    <div className="sliderItem">
                        <img src="img/air.png" alt="" className="sliderImg" />
                        <div className="sliderBg"></div>
                        <h1 className="sliderTitle">
                            AIR FORCE <br />
                            NEW <br />
                            SEASON
                        </h1>
                        <h2 className="sliderPrice">₱6,499</h2>
                        <Link to="/product">
                            <button className="buyButton">BUY NOW!</button>
                        </Link>
                    </div>
                    <div className="sliderItem">
                        <img
                            src="img/jordan.png"
                            alt=""
                            className="sliderImg"
                        />
                        <div className="sliderBg"></div>
                        <h1 className="sliderTitle">
                            JORDAN
                            <br />
                            NEW <br />
                            SEASON
                        </h1>
                        <h2 className="sliderPrice">₱8,099</h2>
                        <button className="soldOutButton">SOLD OUT</button>
                    </div>
                    <div className="sliderItem">
                        <img
                            src="img/blazer.png"
                            alt=""
                            className="sliderImg"
                        />
                        <div className="sliderBg"></div>
                        <h1 className="sliderTitle">
                            BLAZER
                            <br />
                            NEW <br />
                            SEASON
                        </h1>
                        <h2 className="sliderPrice">₱5,699</h2>
                        <button className="soldOutButton">SOLD OUT</button>
                    </div>
                    <div className="sliderItem">
                        <img
                            src="img/crater.png"
                            alt=""
                            className="sliderImg"
                        />
                        <div className="sliderBg"></div>
                        <h1 className="sliderTitle">
                            CRATER
                            <br />
                            NEW <br />
                            SEASON
                        </h1>
                        <h2 className="sliderPrice">₱6,999</h2>
                        <button className="soldOutButton">SOLD OUT</button>
                    </div>
                    <div className="sliderItem">
                        <img
                            src="img/hippie.png"
                            alt=""
                            className="sliderImg"
                        />
                        <div className="sliderBg"></div>
                        <h1 className="sliderTitle">
                            HIPPIE
                            <br />
                            NEW <br />
                            SEASON
                        </h1>
                        <h2 className="sliderPrice">₱5,399</h2>
                        <button className="soldOutButton">SOLD OUT</button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="features">
                <div className="feature">
                    <img
                        src="/img/shipping.png"
                        alt=""
                        className="featureIcon"
                    />
                    <span className="featureTitle">FREE SHIPPING</span>
                    <span className="featureDesc">
                        Free nationwide shipping on all orders.
                    </span>
                </div>

                <div className="feature">
                    <img src="img/return.png" alt="" className="featureIcon" />
                    <span className="featureTitle">30 DAYS RETURN</span>
                    <span className="featureDesc">
                        No question return and easy refund in 14 days.
                    </span>
                </div>

                <div className="feature">
                    <img src="img/gift.png" alt="" className="featureIcon" />
                    <span className="featureTitle">GIFT CARDS</span>
                    <span className="featureDesc">
                        Buy gift cards and use coupon codes easily.
                    </span>
                </div>

                <div className="feature">
                    <img src="img/contact.png" alt="" className="featureIcon" />
                    <span className="featureTitle">CONTACT US!</span>
                    <span className="featureDesc">
                        Keep in touch via email and support system.
                    </span>
                </div>
            </div>
        </>
    );
}

export default Home;
