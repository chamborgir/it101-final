import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    const [slideIndex, setSlideIndex] = useState(0);

    return (
        <>
            <NavBar setSlideIndex={setSlideIndex} />
            <main style={{ minHeight: "80vh" }}>
                <Outlet context={{ slideIndex }} />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
