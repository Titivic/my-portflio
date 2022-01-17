import React from 'react';
import './Styles/footer.css';

import Contact from './ContactForm/Contact'

export default function Footer() {
    return (
        <div>
            <Contact />
            
            <footer>
                <div className="container h-100">
                    <div className="row py-3 h-100">
                        <div className="col-md-4 d-flex align-items-center">
                            <div className="site-description">
                                &copy; <span className="logo-name">titilayo.</span> 2022. All rights reserved.
                            </div>
                        </div>
                        
                        <div className="col-md-8 d-flex justify-content-end" style={{ gap: '20px' }}>
                            <div className="social d-flex align-items-center" style={{ gap: '8px' }}>
                                <a href="https://facebook.com/">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://instagram.com/">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://twitter.com/">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>           
                </div>
            </footer>
        </div>
    )
}
