// src/pages/Product.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Product data from script.js, now inside the component
const products = [
    {
        id: 1,
        title: "Nike Air Force 1 Mid '07 LX",
        price: "6,499", // Fixed from 6 + "," + 499
        desc: 'Once upon a midnight dreary, this Air Force 1 looked extra eerie. Shadows crept from beneath the "AIR" while ghoulish green accents added Halloween flair. And that black leather upper with reflective-design coating … well, it lets others know they better beware. You get the idea.',
        colors: [
            {
                code: "black",
                img: "img/air.png",
            },
            {
                code: "darkblue",
                img: "img/air2.png",
            },
        ],
    },
];

// Hardcoded sizes from the HTML
const SIZES = [40, 42, 44, 45];

function Product() {
    const [choosenProduct, setChoosenProduct] = useState(products[0]);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    return (
        <>
            {/* Products */}
            <div className="product" id="product">
                <img
                    src={choosenProduct.colors[selectedColorIndex].img}
                    alt=""
                    className="productImg"
                />
                <div className="productDetails">
                    <h1 className="productTitle">{choosenProduct.title}</h1>
                    <h2 className="productPrice">₱{choosenProduct.price}</h2>
                    <p className="productDesc">{choosenProduct.desc}</p>
                    <div className="colors">
                        {choosenProduct.colors.map((color, index) => (
                            <div
                                className="color"
                                key={index}
                                style={{ backgroundColor: color.code }}
                                onClick={() => setSelectedColorIndex(index)}
                            ></div>
                        ))}
                    </div>
                    <div className="sizes">
                        {SIZES.map((size, index) => (
                            <div
                                className="size"
                                key={index}
                                onClick={() => setSelectedSizeIndex(index)}
                                style={{
                                    backgroundColor:
                                        selectedSizeIndex === index
                                            ? "black"
                                            : "white",
                                    color:
                                        selectedSizeIndex === index
                                            ? "white"
                                            : "black",
                                }}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                    <button
                        className="productButton"
                        onClick={() => setIsPaymentOpen(true)}
                    >
                        BUY NOW!
                    </button>
                </div>

                {/* Payment Form */}
                <div
                    className="payment"
                    style={{ display: isPaymentOpen ? "flex" : "none" }}
                >
                    <h1 className="payTitle">Personal Information</h1>
                    <label>Name</label>
                    <input type="text" placeholder="" className="payInput" />
                    <label>Phone Number</label>
                    <input type="text" placeholder="" className="payInput" />
                    <label>Address</label>
                    <input type="text" placeholder="" className="payInput" />

                    <h1 className="payTitle">Card Information</h1>
                    <div className="cardIcons">
                        <img
                            src="img/visa.png"
                            width="40"
                            alt="visa"
                            className="cardIcon"
                        />
                        <img
                            src="img/master.png"
                            width="40"
                            alt="mastercard"
                            className="cardIcon"
                        />
                    </div>
                    <input
                        type="Password"
                        className="payInput"
                        placeholder="Card Number"
                    />
                    <div className="cardInfo">
                        <input
                            type="text"
                            placeholder="MM"
                            className="payInput sm"
                        />
                        <input
                            type="text"
                            placeholder="YYYY"
                            className="payInput sm"
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            className="payInput sm"
                        />
                    </div>

                    <button className="payButton">CHECK OUT</button>
                    <span
                        className="close"
                        onClick={() => setIsPaymentOpen(false)}
                    >
                        X
                    </span>
                </div>
            </div>
        </>
    );
}

export default Product;
