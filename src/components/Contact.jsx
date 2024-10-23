import React from 'react';

const Contact = () => {
    return (
        <div className="content">
            <h1>Contact Us</h1>
            <p>Reach out to us for more information.</p>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;