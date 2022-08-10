import slide1 from '../images/piano5.jpg'
import slide2 from '../images/piano1.jpg'
import slide3 from '../images/team.webp'
import slide4 from '../images/sound1.jpg'
import './CourseList.css'
import MusicBasics from './MusicBasicsNew'
import {useState} from 'react'

export let a = 3

const CourseList = ({ courses }) => {

    console.log("courseses", courses);
    const [course, setCourse] = useState("")
    const newCourseList = []
    
    // setNewCourseList(temp)
    console.log(newCourseList);

    return (
        <div className='list-of-courses'>
            {course && <MusicBasics course={course} />}

            <div className='qualityinfo'>
                <p className="qualityinfo-topic">Courses</p>
                <p>
                    Every course on this site has undergone a <b>quality check</b> conducted by musicians all over the country and abroad. We evaluate our courses <b>thoroughly</b> to ensure that we serve you with the best.
                </p>
            </div>
            <div className="courseList px-md-5">
                <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                    <div className="shape card" >
                        <img src={slide1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title courset">Basic Music theory 1</h5>
                            <p className="card-text faint">Everything you need to know in order to start your musical journey.</p>
                            <a href="musiccourse" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Register</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                    <div className="shape card">
                        <img src={slide2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title courset">Basic Music theory 2</h5>
                            <p className="card-text faint">Giant steps. Improving your sound</p>
                            <a href="/" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#comingSoon">Register</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                    <div className="shape card">
                        <img src={slide3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title courset">Playing as a team</h5>
                            <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#comingSoon">Register</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2">
                    <div className="shape card">
                        <img src={slide4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title courset">Sound engineering 101</h5>
                            <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-warning card-btn" data-bs-toggle="modal" data-bs-target="#comingSoon">Register</a>
                        </div>
                    </div>
                </div>
                {








                    //__________________________________________________________________________________________________________________
                    courses.map((elem) => {
                        if(newCourseList.includes(elem.course)){
                            return ""
                        }
                        newCourseList.push(elem.course)
                        console.log(newCourseList)
                        return (
                            <div className="col-md-4 col-lg-3 col-sm-4 col-6 p-2" key={elem.id} >
                                <div className="shape card">
                                    <img src={elem.img} className="card-img-top" alt="EwaldMusic" />
                                    <div className="card-body">
                                        <h5 className="card-title courset">{elem.course}</h5>
                                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div href="#" className="btn btn-warning card-btn" onClick={() => {
                                            // document.querySelector('.list-of-courses').style.display = "none"
                                            document.querySelector('.courseList').style.display = "none"
                                            document.querySelector('.qualityinfo').style.display = "none"
                                            let temp = courses.filter((elt)=>{return elt.course === elem.course})
                                            setCourse(temp)

                                        }} >Register</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    //__________________________________________________________________________________________________________________









                }
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
                            <a href="musiccourse"><button type="button" className="application-btn px-3">Submit</button></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div className="modal fade" id="comingSoon" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Application form</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <div className="overwhite">

                                {/* ________________________________________________________________________ */}
                                <p style={{ color: "red" }}> Sorry!! this course is currently being worked on. Please fill in your contact information and we will inform you when it is ready
                                </p>
                                <div className="form-floating mb-3 col-12">
                                    <input type="text" className="form-control " id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Name...</label>
                                </div>

                                <div className="form-floating mb-3 col-12">
                                    <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Phone number</label>
                                </div>
                                <div className="form-floating mb-3 col-12">
                                    <input type="email" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">email..</label>
                                </div>
                            </div>
                            {/* ___________________________________________________________________________ */}
                        </div>
                        <div className="modal-footer bg-warning">
                            <button type="button" className="application-btn px-3" data-bs-dismiss="modal">Cancel</button>
                            <a href="courseList"><button type="button" className="application-btn px-3">Submit</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
// export
//     export default {wow}
export default CourseList