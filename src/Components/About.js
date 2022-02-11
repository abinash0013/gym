import React from "react";
import aboutimage from "./../images/about.png";

function About() {
    return (
        <div id="about">
            <div className="about-image">
                <img src={aboutimage} alt="" />
            </div>
            <div className="about-text">
                <h1>LEARN MORE ABOUT US</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever{" "}
                </p>
                <button>Read More</button>
                <div className="pr-btns">
                    <a href="#" className="pr-btn">
                        JOIN NOW
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
