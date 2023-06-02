import React, {useRef, useState} from "react";
import {motion} from "framer-motion";
import emailjs from "@emailjs/browser";

import {EarthCanvas} from "../canvas/Earth";
import {slideIn} from "../../utils/motion";

import './Contact.css';

export const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {target} = e;
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Sergey Lihachev",
                    from_email: form.email,
                    to_email: "liha4ev.sergey@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className={`contact_wrapper`}
            id='contact'
        >
            <div className="contact_container">
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className='contact_form_wrapper'
                >
                    <h3 className='contact_title'>Contact</h3>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className='contact_form'
                    >
                        <label className='contact_form_label'>
                            <span className='contact_form_span'>Your Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your good name?"
                                className='contact_form_input'
                            />
                        </label>
                        <label className='contact_form_label'>
                            <span className='contact_form_span'>Your email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your web address?"
                                className='contact_form_input'
                            />
                        </label>
                        <label className='contact_form_label'>
                            <span className='contact_form_span'>Your Message</span>
                            <textarea
                                rows={7}
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                placeholder='What you want to say?'
                                className='contact_form_input'
                            />
                        </label>

                        <div className={'contact_btn_wrapper'}>
                            <button
                                type='submit'
                                className='contact_form_btn'
                            >
                                {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </form>
                </motion.div>

                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className='earth_wrapper'
                >
                    <EarthCanvas/>
                </motion.div>
            </div>
        </div>
    );
};

