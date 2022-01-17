import React from 'react';
import '../Styles/skills.css'

export default function Skills() {
    const skillset = [
        {   
            id: 1,
            name: 'Figma',
            url: 'https://cdn.freebiesupply.com/logos/thumbs/2x/figma-1-logo.png'
        },
        {
            id: 2,
            name: 'CISCO',
            url: 'https://www.freepnglogos.com/uploads/cisco-png-logo/new-cisco-logo-png-1.png'
        },
        {
            id: 3,
            name: 'Matlab',
            url: 'https://1000logos.net/wp-content/uploads/2021/04/MATLAB-logo.png'
        },
    ]
    
    return (
        <div className="expertise">
            <div className="skill-area d-flex flex-gap align-items-center justify-content-center py-5">
                { skillset.map((skill) => {
                    return ( <img className="skill-logo" key={skill.id} src={skill.url} alt={skill.name} /> )
                })}
            </div>
            
            <div className="container h-100">
                <div className="row py-3 h-100">
                    <div className="col-md-4 d-flex flex-column">
                        <h3 className="title text-black mb-3">3+</h3>
                        <h5>Years working experience</h5>
                    </div>
                    <div className="py-4 col-md-8 d-flex justify-content-center flex-wrap" style={{ gap: '20px' }}>
                        <div className="card experience-card d-flex flex-column justify-content-end px-3 py-3">
                            <i className="fas fa-desktop mb-3"></i>
                            <h6 className="mb-0">Product Design</h6>
                            <h6 className="mb-0"></h6>
                        </div>
                        <div className="card experience-card d-flex flex-column justify-content-end px-3 py-3">
                            <i className="fas fa-desktop mb-3"></i>
                            <h6 className="mb-0"></h6>
                            <h6 className="mb-0"></h6>
                        </div>
                        <div className="card experience-card d-flex flex-column justify-content-end px-3 py-3">
                            <i className="fas fa-desktop mb-3"></i>
                            <h6 className="mb-0">Network Administrator</h6>
                            <h6 className="mb-0"></h6>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}
