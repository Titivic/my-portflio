import React from 'react';
import '../styles/about.css';

export default function About() {
    return (
        <div className="wrapper d-flex flex-column">
            <div className="container h-100">
                <div className="row align-items-end py-3 h-100">
                    <div className="col-md-8 d-flex flex-column justify-content-center ">
                        <h3 className="title mb-0">Let's talk about scaleable Business solutions...</h3>
                        {/* <p className="body">Hi, my name is Titilayo A. I am a computer networking expert with proven years of experience </p> */}
                    </div>
                    <div className="col-md-4">
                        <a href="#contact" className="btn contact-button"> 
                            <i class="fas fa-comment mr-3"></i>
                            Let's talk now 
                        </a>
                    </div>
                </div>           
            </div>
        </div>
    )
}
