import React from "react";

/**
 * @param {object} props
 * @param {'home' | 'product'} props.page
 */
function NavBar({ page }) {
    return (
        <nav>
            <div className="navTop">
                {/* Logo Section */}
                <div className="navItem">
                    {page === "home" ? (
                        <h2 className="logoText">RESELLER</h2>
                    ) : (
                        <img
                            src="img/logo.png"
                            width="180"
                            alt="Nike Logo"
                            className="logoImg"
                        />
                    )}
                </div>

                {/* Search Section */}
                <div className="navItem">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="searchInput"
                        />
                        <img
                            src="/img/search.png"
                            width="20"
                            height="20"
                            alt="search"
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
        </nav>
    );
}

export default NavBar;
