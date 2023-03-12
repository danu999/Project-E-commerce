import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/kisspng-sportbanner.png";

const Banner = () => {
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
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;
