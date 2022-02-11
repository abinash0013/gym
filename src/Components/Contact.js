import React from "react";

function Contact() {
    return (
        <div id="contact">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Type Your E-mail" required />
                <textarea
                    placeholder="Write Somethings...!"
                    name="message"
                ></textarea>
                <input type="submit" value="send" />
            </form>
        </div>
    );
}

export default Contact;
