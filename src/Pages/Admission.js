import './Admission.css'
import slide1 from '../images/DSC_2185.JPG'
import slide2 from '../images/DSC_2415.JPG'
import slide3 from '../images/DSC_2203.JPG'
import slide4 from '../images/DSC_2311.JPG'
const Admission = () => {
    return ( 
        <div className="admission">
        <div className='qualityinfo'>
            <p>
            <b>NOTE: </b> Ewald organizes a number of exciting trainings every year.<b>Subscribe</b> to our news feed by filling in your name and email. This way, you'll get notified each time there's something new. To <b>apply</b> for a program, choose the program and take apply now, and then fill the form that pops up and submit.
            </p>
        </div>
        <div className="courseList px-md-5">
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card" >
                    <img src={slide1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Ewald academy: Batch 6</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="musiccourse" className="btn btn-warning">Apply now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card">
                    <img src={slide2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Sound engineering workshop</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning">Apply now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card">
                    <img src={slide3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Summer camp</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning">Apply now</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-lg-3 col-sm-6 col-sx-8 p-2">
                <div className="card">
                    <img src={slide4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title courset">Master class</h5>
                        <p className="card-text faint">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-warning">Apply now</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Admission;