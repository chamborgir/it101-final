import React from "react";

function Footer() {
    return (
        <div>
            <footer>
                <div className="footerLeft">
                    <div className="footerMenu">
                        <h1 className="fMenuTitle">About</h1>
                        <ul className="fList">
                            <li className="fListItem">Info</li>
                            <li className="fListItem">Partnerships</li>
                            <li className="fListItem">Direction</li>
                            <li className="fListItem">Stores</li>
                            <li className="fListItem">Terms & Policies</li>
                        </ul>
                    </div>
                    <div className="footerMenu">
                        <h1 className="fMenuTitle">Contact</h1>
                        <ul className="fList">
                            <li className="fListItem">FAQs</li>
                            <li className="fListItem">Feedback</li>
                            <li className="fListItem">Refund</li>
                            <li className="fListItem">Support</li>
                        </ul>
                    </div>
                    <div className="footerMenu">
                        <h1 className="fMenuTitle">Products</h1>
                        <ul className="fList">
                            <li className="fListItem">Air Force</li>
                            <li className="fListItem">Air Jordan</li>
                            <li className="fListItem">Blazer</li>
                            <li
                                className="fListItem"
                                style={{ color: "black" }}
                            >
                                <b>ALL ITEMS</b>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footerRight">
                    <div className="footerRightMenu">
                        <h1 className="fMenuTitle">
                            Subscibe to get our latest offers!
                        </h1>
                        <div className="fMail">
                            <input
                                type="text"
                                placeholder="your@email.com"
                                className="fInput"
                            />
                            <button className="fButton">JOIN!</button>
                        </div>
                    </div>
                    <div className="footerRightMenu">
                        <h1 className="fMenuTitle">Follow Us</h1>
                        <div className="fIcons">
                            <img
                                src="/img/facebook.png"
                                alt="facebook"
                                className="fIcon"
                            />
                            <img
                                src="/img/instagram.png"
                                alt="instagram"
                                className="fIcon"
                            />
                            <img
                                src="/img/twitter.png"
                                alt="twitter"
                                className="fIcon"
                            />
                            <img
                                src="/img/whatsapp.png"
                                alt="whatsapp"
                                className="fIcon"
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
