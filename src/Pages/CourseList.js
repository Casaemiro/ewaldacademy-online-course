import slide1 from '../images/DSC_2185.JPG'
import slide2 from '../images/DSC_2415.JPG'
import slide3 from '../images/DSC_2203.JPG'
import slide4 from '../images/DSC_2311.JPG'
import './CourseList.css'

const CourseList = () => {
    return (
        <>
        <div className='qualityinfo'>
        <p className="qualityinfo-topic">Courses</p>
            <p>
            Every course on this site has undergone a <b>quality check</b> conducted by musicians all over the country and abroad. We evaluate our courses <b>thoroughly</b> to ensure that we serve you with the best.
            </p>
        </div>
        <div className="courseList px-md-5">
            <div class="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                <div className="card" >
                    <img src={slide1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Basic Music theory 1</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="musiccourse" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                <div className="card">
                    <img src={slide2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Basic Music theory 2</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                <div className="card">
                    <img src={slide3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Playing as a team</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                <div className="card">
                    <img src={slide4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Sound engineering 101</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a>
                    </div>
                </div>
            </div>
        </div>
         {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Application form</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">


                        {/* ________________________________________________________________________ */}
                            <div className="form-floating mb-3 col-12">
                                <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com"/>
                                    <label for="floatingInput">Full Name</label>
                            </div>
                        
                            <div className="form-floating mb-3 col-12">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Phone number</label>
                            </div>
                            <div className="form-floating mb-3 col-12">
                                <input type="address" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label for="floatingPassword">Address</label>
                            </div>
                            <div className="form-floating mb-3 col-12">
                                <input type="number" className="form-control" id="floatingPassword" placeholder="Password" required/>
                                    <label for="floatingPassword" >Age</label>
                            </div>
                            
                                <textarea type="number"  className="form-control form-floating col-12" id="floatingPassword" placeholder="How will this training be of help to you?" required></textarea>
                            
                            {/* ___________________________________________________________________________ */}
                        </div>
                        <div className="modal-footer bg-warning">
                            <button type="button" className="application-btn px-3" data-bs-dismiss="modal">Cancel</button>
                            <a href="musiccourse"><button type="button" className="application-btn px-3">Submit</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseList;