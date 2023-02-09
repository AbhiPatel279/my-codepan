import React from "react";
import { useForm } from 'react-hook-form';

export default function CommonForm() {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            username: "",
            email: "",
            subject: "",
        }
    });

    const Submit = handleSubmit((data) => {
        data.preventDefault();
    })

    return (
        <>
            <div className="dtl_form" onSubmit={Submit}>
                <form className="contact-form">
                    <div className="contact-form_col">
                        <label htmlFor="username" className="contact-form_input-label">User Name</label>
                        <input
                            type="text"
                            name="username"
                            {...register("username", {
                                required: "This field is required",
                            })}
                            aria-invalid={errors.username ? "true" : "false"}
                            placeholder="User Name"
                            className="contact-form_input-field" id="username"
                        />
                        <p className="error-msg mb-0">{errors.username?.message}</p>
                    </div>
                    <div className="contact-form_col">
                        <label htmlFor="email" className="contact-form_input-label">Email</label>
                        <input type="email"
                            name="email"
                            placeholder="Your Email"
                            className="contact-form_input-field" id="email"
                            {...register("email", {
                                required: "Please enter your email",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Please enter a valid email"
                                }
                            })}
                        />
                        {errors.email && <p className="error-msg mb-0">{errors.email?.message}</p>}
                    </div>
                    <div className="contact-form_col">
                        <label htmlFor="subject" className="contact-form_input-label">Subject</label>
                        <input type="text"
                            name="subject"
                            placeholder="Your Subject"
                            className="contact-form_input-field" id="subject"
                            {...register("subject", {
                                required: "This field is required",
                            })}
                            aria-invalid={errors.subject ? "true" : "false"}
                        />
                        <p className="error-msg mb-0">{errors.subject?.message}</p>
                    </div>
                    <div className="contact-form_col">
                        <label htmlFor="message" className="contact-form_input-label">Message</label>
                        <textarea type="text"
                            name="message"
                            placeholder="Your Message"
                            className="contact-form_input-field textarea" id="message"></textarea>
                    </div>
                    <div className='dtl-button-wrapper'>
                        <button type='submit' className="dtl-common-button contact-form_submit-button" onClick={() => {
                            setValue({
                                username: "",
                                email: "",
                                subject: "",
                            })
                        }}>Send Message</button>
                    </div>
                </form>
            </div >
        </>
    )
}