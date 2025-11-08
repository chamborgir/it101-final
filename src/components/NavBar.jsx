import React from "react";

function NavBar({ setSlideIndex }) {
    const handleMenuClick = (index) => {
        setSlideIndex(index);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav>
            <div className="navTop">
                <div className="logo"></div>
                <div className="navItem">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="searchInput"
                        />
                        <img
                            src="/img/search.png"
                            width="20"
                            alt=""
                            className="searchIcon"
                        />
                    </div>
                </div>
                <div className="navItem">
                    <p className="reseller">
                        Unofficial <b>Nike™</b> Reseller
                    </p>
                </div>
            </div>

            <div className="navBottom">
                <h3 className="menuItem" onClick={() => handleMenuClick(0)}>
                    AIR FORCE
                </h3>
                <h3 className="menuItem" onClick={() => handleMenuClick(1)}>
                    JORDAN
                </h3>
                <h3 className="menuItem" onClick={() => handleMenuClick(2)}>
                    BLAZER
                </h3>
            </div>
        </nav>
    );
}

export default NavBar;
