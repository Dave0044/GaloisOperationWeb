// About.jsx

import React from 'react';

function About () {
    return (
        <section id="about" className="about-section" >
            <div className="container rounded-4">
                <div className='container py-4'>
                    <div className="row"> 
                        <h1 class="display-5 fw-bolder mb-5 text-center"><span className="d-inline">Galois Fields</span></h1>
                        <div className="col-12 col-md-5 text-center">
                            <img src="./img/evariste.jpg" alt="perfil" className="rounded-4 mb-2 about-section-column1-img"/>
                            <h5>Évariste Galois (1811–1832)</h5>
                        </div>
                        <div className="col-12 col-md-7">
                            <p>Galois Fields are important algebraic structures in number theory and abstract algebra. They are related to field theory and find applications in cryptography and error-correction codes.</p>
                            <p>A Galois Field is a special type of finite field, where the number of elements in the field is a power of a prime number. Galois theory provides tools for studying the roots of polynomials and solving algebraic equations.</p>
                            <p>Galois Fields are fundamental in constructing field extensions and in solving classically unsolvable problems by radicals. Galois theory was developed by Évariste Galois in the 19th century and has had a significant impact on various areas of mathematics.</p>
                            <p>Exploring Galois Fields involves understanding their properties, extensions, and applications in different mathematical and computational contexts.</p>   
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default About;