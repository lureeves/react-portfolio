import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      if (form.current) {
        emailjs.sendForm('service_loq02kd', 'template_uf0lhdh', form.current, 'bxUoh6_RIx6P06GaM')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    };

    return (
        <div className="container my-5" id="contact-me">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="contact-card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Let's get in touch!</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="user_name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="user_email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea name="message" className="form-control" />
                                </div>
                                <input type="submit" value="Send" className="btn btn-primary" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default ContactMe;