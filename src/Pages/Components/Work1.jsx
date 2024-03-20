// Work.jsx

import React from 'react';

function Work1 () {
    return (
        <section id="work" className="d-flex flex-column h-100">
        <div className="flex-shrink-0" >
        <div class="container px-5 my-5">
            <div class="text-center mb-5">
                <h1 class="display-5 fw-bolder mb-0"><span className=" d-inline">Galois Field Operations</span></h1>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5 card-work" id="list-item-1">
                <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="p-4 rounded-4">
                                <a href="https://www.uci.cu/">
                                    <img src="./img/uci1.jpg" alt="UCI" className="img-fluid rounded-4"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 bg-light p-4 rounded-4">
                            <div>
                                <div className="text-info fw-bolder mb-2">2018 - 2019</div>
                                <div className="small fw-bolder">Professor</div>
                                <div className="small text-muted mb-2">University of Informatics Sciences, Havana, Cuba.</div>
                                    <p>Logic, Discrete Mathematics, Algebra, Calculus teacher. Director of university student projects and forums related to mathematics and computing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow border-0 rounded-4 mb-5 card-work" id="list-item-2">
                <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="p-4 rounded-4">
                                <a href="https://www.tusclasesparticulares.com/">
                                    <img src="./img/tcp1.jpeg" alt="MatCom" className="img-fluid rounded-4" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 bg-light p-4 rounded-4">
                            <div>
                                <div className="text-info fw-bolder mb-2">2019 - 2022</div>
                                <div className="small fw-bolder">Particular Professor</div>
                                <div className="small text-muted mb-2">Granada, Sevilla, Barcelona, Spain.</div>
                                I have provided personalized classes to undergraduate, graduate and postgraduate students that adapt to the individual needs of each student.
                                <div className='mt-2'>
                                    <a href="https://www.tusclasesparticulares.com/profesores/david-2694841.htm" className="btn rounded btn-outline-info btn-lg btn-sm mb-2">My profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="card shadow border-0 rounded-4 mb-5 card-work" id="list-item-3">
                <div className="card-body p-5">
                    <div className="row align-items-center gx-5">
                        <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="p-4 rounded-4">
                                <a href="https://www.upc.edu/es">
                                    <img src="./img/upc1.jpg" alt="UPC" className="img-fluid rounded"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 bg-light p-4 rounded-4">
                            <div>
                                <div className="text-info fw-bolder mb-2">2022 - 2024</div>
                                <div className="small fw-bolder">Researcher</div>
                                <div className="small text-muted mb-2">University Politecnic of Catalunya, Barcelona, Spain.</div>
                                Winner of Grant for predoctoral contracts for the training of doctors.
                                <div className='mt-2'>
                                <a href="https://futur.upc.edu/28881368" className="btn rounded btn-outline-info btn-lg btn-sm mb-2">Grant bases</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>    
        </div>                       
    </section>
  )
}

export default Work1;