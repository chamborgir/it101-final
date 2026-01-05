import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        title: "Nike Air Force 1 Mid '07 LX",
        price: "6,499",
        desc: 'Once upon a midnight dreary, this Air Force 1 looked extra eerie. Shadows crept from beneath the "AIR" while ghoulish green accents added Halloween flair. And that black leather upper with reflective-design coating … well, it lets others know they better beware.',
        colors: [
            { code: "black", img: "img/air.png" },
            { code: "darkblue", img: "img/air2.png" },
        ],
    },
];

const SIZES = [40, 42, 44, 45];

function Product() {
    const [choosenProduct] = useState(products[0]);
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);
    const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);
    const [isPaymentOpen, setIsPaymentOpen] = useState(false);

    return (
        <div className="product" id="product">
            <div className="productLeft">
                <img
                    src={choosenProduct.colors[selectedColorIndex].img}
                    alt={choosenProduct.title}
                    className="productImg"
                />
            </div>

            <div className="productRight">
                <div className="productDetails">
                    <Link to="/">
                        <button className="backButton">BACK</button>
                    </Link>

                    <h1 className="productTitle">{choosenProduct.title}</h1>
                    <h2 className="productPrice">₱{choosenProduct.price}</h2>
                    <p className="productDesc">{choosenProduct.desc}</p>

                    <div className="colors">
                        {choosenProduct.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color ${
                                    selectedColorIndex === index
                                        ? "selected"
                                        : ""
                                }`}
                                style={{ backgroundColor: color.code }}
                                onClick={() => setSelectedColorIndex(index)}
                            ></div>
                        ))}
                    </div>

                    <div className="sizes">
                        {SIZES.map((size, index) => (
                            <div
                                key={index}
                                className={`size ${
                                    selectedSizeIndex === index
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => setSelectedSizeIndex(index)}
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
            </div>

            {/* Payment Modal */}
            {isPaymentOpen && (
                <div className="payment">
                    <h1 className="payTitle">Personal Information</h1>
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="payInput"
                    />
                    <label>Phone Number</label>
                    <input
                        type="text"
                        placeholder="+63 912 345 6789"
                        className="payInput"
                    />
                    <label>Address</label>
                    <input
                        type="text"
                        placeholder="Street, City, Province"
                        className="payInput"
                    />

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
                            alt="master"
                            className="cardIcon"
                        />
                    </div>
                    <input
                        type="password"
                        password
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
            )}
        </div>
    );
}

export default Product;
