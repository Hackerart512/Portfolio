import React, { useState } from 'react';
import Navbar from '../componenets/Navbar'
import Footer from '../componenets/Footer';
import { Helmet } from 'react-helmet-async';
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        // Here you can add more validation if needed
        if (!formData.email || !formData.name || !formData.message) {
            setError('Please fill all required fields.');
            setLoading(false);
            return;
        }

        try {
            const serviceID = 'service_fy1usbf'; // Your EmailJS service ID
            const templateID = 'template_w2jqazb'; // Your EmailJS template ID
            const userID = 'RdBp86_IO4nWEHjX3'; // Your EmailJS user ID( Piblic Key )

            const result = await emailjs.sendForm(serviceID, templateID, '#contact-form', userID);
            console.log('Email sent: ', result.text);
            setSuccess('Your message has been sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error('Email sending error: ', error.text);
            setError('There was an error sending your message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Home - Personal Portfolio</title>
                <meta name="description" content="Contact form" />
            </Helmet>

            <Navbar/>

            <section className="py-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3>Let's connect</h3>

                            <form
                                id="contact-form"
                                onSubmit={handleSubmit}
                                className="contact-form mt-4 md:mt-0"
                            >
                                {/* Fields */}
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="name" className="d-block">
                                            <small className="text-[#08080899]">Name</small>
                                        </label>
                                        <input
                                            className="border-black-900 rounded-md border p-3 w-100"
                                            type="text"
                                            id="name"
                                            placeholder="Your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="email" className="d-block">
                                            <small className="text-[#08080899]">Email</small>
                                        </label>
                                        <input
                                            className="border-black-900 rounded-md border p-3 w-100"
                                            type="email"
                                            id="email"
                                            placeholder="Your email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="phone">
                                            <small className="text-[#08080899]">Phone</small>
                                        </label>
                                        <input
                                            className="border-black-900 rounded-md border p-3 w-100"
                                            type="text"
                                            id="phone"
                                            placeholder="Your number"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <label htmlFor="subject">
                                            <small className="text-[#08080899]">Subject</small>
                                        </label>
                                        <input
                                            className="border-black-900 rounded-md border p-3 w-100"
                                            type="text"
                                            id="subject"
                                            placeholder="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <label htmlFor="message">
                                            <small className="text-[#08080899]">Message</small>
                                        </label>
                                        <textarea
                                            className="border-black-900 rounded-md border p-3 w-100 resize-none"
                                            rows="4"
                                            placeholder="Type your message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleOnChange}
                                        />
                                    </div>
                                </div>

                                {loading && <div>Loading...</div>}
                                {error && <div style={{ color: 'red' }}>{error}</div>}
                                {success && <div style={{ color: 'green' }}>{success}</div>}

                                <button className="bg-black py-2 px-3 py-lg-3 px-lg-4 rounded-md text-white hover:bg-white" type="submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Contact;
