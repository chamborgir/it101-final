import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate to go back

/**
 * A reusable Navbar component.
 * @param {object} props
 * @param {'home' | 'product'} props.page - Specifies which navBottom to render.
 */
function NavBar({ page }) {
    // onMenuClick prop is no longer needed
    const navigate = useNavigate(); // Get the navigate function from the router

    return (
        <nav>
            {/* This navTop is ALSO conditional based on the 'page' prop */}
            <div className="navTop">
                {/* This is the new conditional logic: */}
                {page === "home" ? (
                    <div className="logo"></div> // The empty logo div from index.html
                ) : (
                    <div className="navbarItem">
                        <img src="img/logo.png" width="250" alt="logo" />
                    </div>
                )}

                {/* The rest of the navTop remains the same for both pages */}
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
