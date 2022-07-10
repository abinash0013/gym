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
                <a href="/" className="pr-btn">
                    Read More
                </a>
            </div>
        </div>
    );
}

export default About;
