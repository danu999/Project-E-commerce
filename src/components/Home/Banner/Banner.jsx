import React from "react";
// import { useNavigate } from "react-router-dom";
import "./Banner.scss";
import BannerImg from "../../../assets/AUTHENTIC SREET WEAR.png";

const Banner = () => {
    // const navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>HELLO</h1>
                    <p>
                        Welcome to FRINZSTORE catalog,
                        <br/>
                        If you want buy product, you can order via my WhatsApp,
                        Click buy now and you can generate too my WhatsApp number.
                        <br/>
                        Thank you
                    </p>
                    {/* <div className="ctas">
                        <a onClick={() => navigate("/categories")} className="banner-cta">Let's go</a>
                        <a onClick={() => navigate("/category/:id")} className="banner-cta v2">Shop Now</a>
                    </div> */}
                </div>
                <img className="banner-img" src={BannerImg} alt="banner"/>
            </div>
        </div>
    );
};

export default Banner;
