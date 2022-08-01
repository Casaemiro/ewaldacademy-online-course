import './Admission.css'
// import slide1 from '../images/DSC_2185.JPG'
// import slide2 from '../images/speaker.jpg'
// import slide3 from '../images/camp.jpg'
// import slide4 from '../images/DSC_2311.JPG'
const Admission = ({ programs }) => {
    console.log(programs)
    let id = 1;
    return (
        <div className="admission">
            <div className='qualityinfo'>
                <p className="qualityinfo-topic">Admission</p>
                <p >
                    <b>NOTE: </b> Ewald organizes a number of exciting trainings every year. <b>Subscribe</b> to our news feed by filling in your name and email. This way, you'll get notified each time there's something new. To <b>apply</b> for a program; click <b>apply now</b>, fill the form that pops up and click submit.
                </p>
            </div>
            <div className="courseList px-md-5">

                {programs.map((evt) => {

                    return (
                        <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2" key={id++}>
                            <div className="shape card" >
                                <img src={evt.url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title courset">{evt.name}</h5>
                                    <p className="card-text faint"> {evt.description} </p>
                                    <a href="/" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply now</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                    <div className="shape card">
                        <img src={slide2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title courset">Sound engineering workshop</h5>
                            <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                    <div className="shape card">
                        <img src={slide3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title courset">Summer camp</h5>
                            <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                    <div className="shape card">
                        <img src={slide4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title courset">Master class</h5>
                            <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply now</a>
                        </div>
                    </div>
                </div> */}
            </div>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Application form</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div className="overwhite">

                                {/* ________________________________________________________________________ */}
                                <div className="form-floating mb-3 col-12">
                                    <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Full Name</label>
                                </div>

                                <div className="form-floating mb-3 col-12">
                                    <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Phone number</label>
                                </div>
                                <div className="form-floating mb-3 col-12">
                                    <input type="address" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Address</label>
                                </div>
                                <div className="form-floating mb-3 col-12">
                                    <input type="number" className="form-control" id="floatingPassword" placeholder="Password" required />
                                    <label htmlFor="floatingPassword" >Age</label>
                                </div>

                                <textarea type="number" className="form-control form-floating col-12" id="floatingPassword" placeholder="How will this training be of help to you?" required></textarea>
                            </div>
                            {/* ___________________________________________________________________________ */}
                        </div>
                        <div className="modal-footer bg-warning">
                            <button type="button" className="application-btn px-3" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" data-bs-dismiss="modal" className="application-btn px-3" data-bs-toggle="modal" data-bs-target="#SuccessModal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>




            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" id="SuccessModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Confirmation!!</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div className="overwhite">
                                Application sent successfully. We will process your application and get back to you as soon as possible. Thanks for choosing us.
                            </div>
                        </div>
                        <div className="modal-footer bg-warning">
                            <a href="admission"><button type="button" className="application-btn px-3" data-bs-dismiss="modal">Close</button></a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Admission;