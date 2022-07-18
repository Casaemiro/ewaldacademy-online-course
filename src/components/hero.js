import './hero.css'
// import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className='overl'>
                <div className="large-hero-text">
                    <span className='colorgame'>S</span><span className='colorgame'>t</span><span className='colorgame'>e</span><span className='colorgame'>p </span> <span className='colorgame'>b</span><span className='colorgame'>y </span><span className='colorgame'>s</span><span className='colorgame'>t</span><span className='colorgame'>e</span><span className='colorgame'>p </span><span className='colorgame'>a</span><span className='colorgame'>p</span><span className='colorgame'>p</span><span className='colorgame'>r</span><span className='colorgame'>o</span><span className='colorgame'>a</span><span className='colorgame'>c</span><span className='colorgame'>h</span><br></br><span className='colorgame'>t</span><span className='colorgame'>o </span><span className='colorgame'>b</span><span className='colorgame'>a</span><span className='colorgame'>s</span><span className='colorgame'>i</span><span className='colorgame'>c</span> <span className='colorgame'>m</span><span className='colorgame'>u</span><span className='colorgame'>s</span><span className='colorgame'>i</span><span className='colorgame'>c</span> <span className='colorgame'>t</span><span className='colorgame'>h</span><span className='colorgame'>e</span><span className='colorgame'>o</span><span className='colorgame'>r</span><span className='colorgame'>y</span>
                </div>
                <div className="hero-2 mobihero2"><i>Our lessons are as simple as posible for beginners,<br/>but also engaging for non beginners. We serve <br/>you with our 5 years of experience.</i>
                </div><div className="hero-2 mobihero"><i>Our lessons are as simple as posible for beginners, but also engaging for non beginners. We serve you with our 5 years of experience.</i>
                </div>
                <div className="btn-sec">
                <a href="/courselist"><button className="button-section" id="howto">Online Courses</button></a>
                <button className="button-section secbtn" id="howto" style={{backgroundColor:"transparent", marginLeft:"1rem", color:"white"}}>Admission</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;