import React from 'react';
import '../Styles/case.css';

export default function CaseStudy() {
    return (
        <div className="case-study-wrapper">
            <div className="container h-100">
                <div className="row py-3 h-100">
                    <div className="col-12 col-md-4 mb-4 text-center text-sm-start mb-md-0">
                        <h3 className="case-study-heading mb-2">case study.</h3>
                        <a href="#" className="contact-button py-2" target="_blank">See resume <i class="fas fa-paper-plane ml-1"></i></a>
                    </div>
                    <div className="col-12 col-md-8 d-flex justify-content-center flex-wrap" style={{ gap: '20px' }}>
                        <div className="card study-card">
                            <img src="/cases/case-2.webp" className="card-img-top" alt="..." />
                        </div>
                        <div className="card study-card">
                            <img src="/cases/case-3.webp" className="card-img-top" alt="..." />
                        </div>
                        <div className="card study-card">
                            <img src="/cases/case-1.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card study-card">
                            <img src="/cases/case-2.webp" className="card-img-top" alt="..." />
                        </div>
                        <div className="card study-card">
                            <img src="/cases/case-4.webp" className="card-img-top" alt="..." />
                        </div>
                    </div>
                </div>           
            </div>            
        </div>
    )
}
