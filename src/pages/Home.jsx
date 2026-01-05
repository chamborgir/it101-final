import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

function Home() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleMenuClick = (index) => {
        setSlideIndex(index % products.length);
    };

    return (
        <>
            <div className="navBottom">
                <h3
                    className={`menuItem ${slideIndex === 0 ? "active" : ""}`}
                    onClick={() => handleMenuClick(0)}
                >
                    AIR FORCE
                </h3>
                <h3
                    className={`menuItem ${slideIndex === 1 ? "active" : ""}`}
                    onClick={() => handleMenuClick(1)}
                >
                    JORDAN
                </h3>
                <h3
                    className={`menuItem ${slideIndex === 2 ? "active" : ""}`}
                    onClick={() => handleMenuClick(2)}
                >
                    BLAZER
                </h3>
            </div>

            <div className="slider">
                <div
                    className="sliderWrapper"
                    style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
                >
                    {products.map((product) => (
                        <div className="sliderItem" key={product.id}>
                            <img
                                src={product.img}
                                alt={product.title}
                                className="sliderImg"
                            />
                            <div
                                className="sliderBg"
                                style={{ backgroundColor: product.sliderBg }}
                            ></div>
                            <h1 className="sliderTitle">
                                {product.title} <br />
                                NEW <br />
                                SEASON
                            </h1>
                            <h2
                                className="sliderPrice"
                                style={{ color: product.sliderBg }}
                            >
                                ₱{product.price}
                            </h2>
                            {product.isSoldOut ? (
                                <button className="soldOutButton">
                                    SOLD OUT
                                </button>
                            ) : (
                                <Link to={`/product`}>
                                    <button className="buyButton">
                                        BUY NOW!
                                    </button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>

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
