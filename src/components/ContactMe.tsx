import React, { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactMe: React.FC = () => {
    // const [email, setEmail] = useState<string>('');
    // const [message, setMessage] = useState<string>('');

    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();

    //     alert(' Your message was not sent due to the backend not being set up yet. Please contact me directly at lukasjreeves@gmail.com');
    // };

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
        
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
          );
        // <div className="container my-5">
        //     <div className="row justify-content-center">
        //         <div className="col-md-8">
        //             <div className="card shadow">
        //                 <div className="card-body">
        //                     <h2 className="text-center mb-4">Let's get in touch!</h2>
        //                     <form onSubmit={handleSubmit}>
        //                         <div className="mb-3">
        //                             <label htmlFor="email" className="form-label">Email</label>
        //                             <input 
        //                                 type="email" 
        //                                 className="form-control" 
        //                                 id="email" 
        //                                 value={email} 
        //                                 onChange={(e) => setEmail(e.target.value)} 
        //                                 required 
        //                             />
        //                         </div>
        //                         <div className="mb-3">
        //                             <label htmlFor="message" className="form-label">Message</label>
        //                             <textarea 
        //                                 className="form-control" 
        //                                 id="message" 
        //                                 rows={5} 
        //                                 value={message} 
        //                                 onChange={(e) => setMessage(e.target.value)} 
        //                                 required 
        //                             />
        //                         </div>
        //                         <div className="d-grid gap-2">
        //                             <button type="submit" className="custom-btn py-3">Send</button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // );
}

export default ContactMe;
