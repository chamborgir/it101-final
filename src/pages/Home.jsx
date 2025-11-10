import React, { useState } from "react";
import { Link } from "react-router-dom";
// Fix: Removed file extensions from imports, as this can sometimes cause resolution issues.
import { products } from "../data";

function Home() {
    const [slideIndex, setSlideIndex] = useState(0);

    // This click handler is simplified and now lives in Home.jsx
    const handleMenuClick = (index) => {
        setSlideIndex(index % products.length);
    };

    return (
        <>
            {/* The Menu Items are now part of the Homepage, not the NavBar */}
            <div className="navBottom">
                <h3
                    /* This logic adds the 'active' class when slideIndex is 0 */
                    className={`menuItem ${slideIndex === 0 ? "active" : ""}`}
                    onClick={() => handleMenuClick(0)}
                >
                    AIR FORCE
                </h3>
                <h3
                    /* This logic adds the 'active' class when slideIndex is 1 */
                    className={`menuItem ${slideIndex === 1 ? "active" : ""}`}
                    onClick={() => handleMenuClick(1)}
                >
                    JORDAN
                </h3>
                <h3
                    /* This logic adds the 'active' class when slideIndex is 2 */
                    className={`menuItem ${slideIndex === 2 ? "active" : ""}`}
                    onClick={() => handleMenuClick(2)}
                >
                    BLAZER
                </h3>
            </div>

            {/* Product Slider is now dynamic */}
            <div className="slider">
                <div
                    className="sliderWrapper"
                    style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
                >
                    {/* We map over the products array to create a slide for each one */}
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
                            {/* Fixed typo: SsliderBg -> sliderBg */}
                            <h2
                                className="sliderPrice"
                                style={{ color: product.sliderBg }}
                            >
                                ₱{product.price}
                            </h2>
                            {/* Check if sold out, otherwise link to the correct product page */}
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

            {/* Features Section (no change) */}
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
