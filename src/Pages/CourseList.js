import slide1 from '../images/DSC_2185.JPG'
import slide2 from '../images/DSC_2415.JPG'
import slide3 from '../images/DSC_2203.JPG'
import slide4 from '../images/DSC_2311.JPG'
import './CourseList.css'

const CourseList = () => {
    return (
        <>
        <div>
            <p>
            Every course on this site has undergone a quality check conducted by musicians all over the country and abroad. We evaluate our courses thoroughly to ensure that we serve you with the best.
            </p>
        </div>
        <div className="courseList row px-5">
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card" >
                    <img src={slide1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Basic Music theory 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="musiccourse" className="btn btn-warning">Register</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card">
                    <img src={slide2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Basic Music theory 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning">Register</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card">
                    <img src={slide3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Basic Music theory 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning">Register</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card">
                    <img src={slide4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Sound engineering 101</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning">Register</a>
                    </div>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default CourseList;