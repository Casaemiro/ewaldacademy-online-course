import slide1 from '../images/DSC_2185.JPG'
import slide2 from '../images/DSC_2415.JPG'
import slide3 from '../images/DSC_2203.JPG'
import './slider.css'
const Slider = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide slder" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={slide1} className="d-block h-40" alt="..."/>
                        <div className="carousel-caption d-block d-md-block cstm" style={{color:"white"}}>
                            <h3><b>5th batch Graduation</b></h3>
                            <p>Graduation occurs after three months of effective training where students display in multiple presentations.</p>
                        </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={slide2} className="d-block h-40" alt="..."/>
                        <div className="carousel-caption d-block d-md-block cstm " style={{color:"white", display:"contents"}}>
                            <h3><b>Live Music</b></h3>
                            <p>We train for professionalism at all levels. Our standards are high thus we train accordingly</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block h-40" alt="..."/>
                        <div className="carousel-caption d-block d-md-block cstm" style={{color:"white"}}>
                            <h3><b>Experience</b></h3>
                            <p>Year after year, we graduate a large number of students who are equiped and ready to embark on their music journey.</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev h-100" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next h-100" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Slider;