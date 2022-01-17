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
        {
            id: 4,
            name: 'Python',
            url: 'http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png'
        },
        {
            id: 5,
            name: 'Tableau',
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png'
        },
        {
            id: 6,
            name: 'Html',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
        },
        {
            id: 7,
            name: 'CSS',
            url: 'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-css-logo-png-transparent-svg-vector-bie-supply-9.png'
        },
        {
            id: 8,
            name: 'CSS',
            url: 'https://hackr.io/tutorials/learn-sql/logo/logo-sql?ver=1642082724'
        },
    ]
    
    return (
        <div className="expertise">
            <div className="skill-area d-flex flex-gap flex-wrap align-items-center justify-content-center py-5">
                { skillset.map((skill) => {
                    return ( <img className="skill-logo" key={skill.id} src={skill.url} alt={skill.name} /> )
                })}
            </div>
            
            <div className="container h-100">
                <div className="row py-3 h-100">
                    <div className="col-md-4 d-flex flex-column mb-3 mb-md-0">
                        <h3 className="title text-black mb-3">3+</h3>
                        <h5>Years working experience</h5>
                    </div>
                    <div className="py-4 col-md-8 d-flex justify-content-center overflow-auto" style={{ gap: '20px' }}>
                        <div className="card experience-card d-flex flex-column justify-content-end px-3 py-4">
                            <i className="fas fa-desktop mb-3"></i>
                            <h6 className="mb-0">Product Design</h6>
                            <h6 className="mb-0"></h6>
                        </div>
                        <div className="card experience-card d-flex flex-column justify-content-end px-3 py-4">
                            <i className="fas fa-desktop mb-3"></i>
                            <h6 className="mb-0">Data Analysis</h6>
                            <h6 className="mb-0"></h6>
                        </div>
                        <div className="card experience-card d-flex flex-column justify-content-end px-3 py-4">
                            <i className="fas fa-desktop mb-3"></i>
                            <h6 className="mb-0">Network Administration</h6>
                            <h6 className="mb-0"></h6>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}
