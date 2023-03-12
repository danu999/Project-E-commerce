import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        This website only for example ecommerce website,
                        we are group 3 make this project for study e-commerce,
                         please enjoy for this website.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Pamulang University, Teknik Informatika, 
                            Tangerang Selatan, Indonesia, 15417
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0812 3333 4455</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: kelompok3@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Casual Shoes</span>
                    <span className="text">T-Shirt</span>
                    <span className="text">Hoodie</span>
                    <span className="text">Sport Shoes</span>
                    <span className="text">Cap</span>
                    <span className="text">Sport Bag</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        FRINZCATALOG_ 2023 CREATED BY GROUP-3 PROJECT E-COMMERCE PAMULANG UNIVERSITY.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
