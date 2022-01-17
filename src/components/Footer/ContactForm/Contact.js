import React from 'react';
import '../Styles/contact.css';

export default function Contact() {
    return (
        <div className="contact-wrap">
            <div className="container h-100">
                <div className="row py-3 h-100">
                    <div className="col-md-12">
                        <div className="d-flex flex-column flex-gap align-items-center justify-content-center py-5">
                            <div className="contact-heading d-flex flex-column text-center text-white-50 justify-content-center">
                                <h3>Start a conversation.</h3>
                                <p>An hello could be the start of a new magic.</p>
                            </div>
                            <div className="form_wrapper">
                                <div className="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="name@example.com" />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label">Project Details</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button type="submit" class="btn send-button mt-4 py-3">
                                        Send Message
                                        <i class="fas fa-paper-plane ml-2"></i>
                                    </button>
                                </div>           
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="col-md-4">
                        Address
                    </div> */}
                </div>
            </div>
        </div>
        
    )
}
