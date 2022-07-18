import './About.css'
import aboutimg1 from '../images/DSC_2185.JPG'
import aboutimg2 from '../images/DSC_2630.JPG'



const About = () => {
    return (
        <>
        <div className=' qualityinfo'>
        Ewald music academy is a branch of <b>Ewald</b> based in Buea that effectively trains musicians and sound engineers in the fields of music and thearther arts as a whole. By training musicians and technicians, we provide a solution to sustainable developement goals (poverty, unemployment).

        </div>
            <div className="aboutus-section" id="aboutus">

                <img src={aboutimg1} alt="" style={{ borderTopLeftRadius: "3px", borderBottomLeftRadius: "3px", marginBottom: "0px" }} className="about-image" />

                <div className="about-text">
                    <div className="about-head">
                         About Us
                    </div>
                    <p>
                        Ewald music academy is a branch of <b>Ewald</b> based in Buea that effectively trains musicians and sound engineers in the fields of music and thearther arts as a whole. By training musicians and technicians, we provide a solution to sustainable developement goals (poverty, unemployment).
                    </p>
                </div>
            </div>
            <div className="aboutus-section">

                <div className="about-text seco" style={{ textAlign: "right" }}>
                    <div className="about-head">
                        How we Operate
                    </div>
                    <p>
                        For the past 5 years, we have been running a yearly 3 months intensive onsite training after which there is a graduation. We also added this online platform to enable us to work effeciently with our students out of town.
                    </p>
                </div>
                <img src={aboutimg2} alt="" style={{ borderTopRightRadius: "3px", borderBottomRightRadius: "3px", marginBottom: "0px" }} className="about-image sec" />
            </div></>
    );
}

export default About;