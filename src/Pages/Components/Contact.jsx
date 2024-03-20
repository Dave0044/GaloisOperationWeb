
// Contact.jsx

import React from 'react';

function Contact () {
    return (
        <section id="contact" className="contact-section py-5">
            <div className="container rounded-4">
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span className=" d-inline">Contact</span></h1>
                </div>
            <div className="container-md py-4 shadow rounded-4 contact-section-table">
                <div className="py-4">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className='py-2'>
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                    <button type="button" className="btn rounded btn-outline-info btn-sm btn-lg contact-section-column1-btn">Send</button>
            </div>
            </div>
        </section>    
    )
}

export default Contact;