import './intervals.css'
import c from '../images/c.jpg'

const Intervals = () => {
    return (
        <div className="intervals">
            <p className='intro-text'>
                Distances on land are measured in meters whereas in music, the distance between any two notes is quantified in intervals. That said, an interval is the seperation or gap between any two notes. Intervals will be covered in detail in a different course but we will look at a few examples.
            </p>
            <div className='intro-img'>
                <img src='' alt="" />
            </div>
            <p className='intro-text row'>
                <span className='p-3'><span className='extra-link'>Tone (Whole step, full step)</span> A tone is the interval between any two notes that are seperated by one note.</span><br/><img src={c} alt="" className='col-md-8'/>
            </p>
            <p className='intro-text row'>
                <span className='p-3'><span className='extra-link'>Semitone (Half step)</span> A semitone is the interval between any two notes that are adjesent. (No notes seperating them)</span><br/><img src={c} alt="" className='col-md-8'/>
            </p>
            <p className='intro-text row'>
                <span className='p-3'><span className='extra-link'>Octave</span> A semitone is the interval between any two notes that are adjesent. (No notes seperating them)</span><br/><img src={c} alt="" className='col-md-8'/>
                <span className='p-3'>In the next section, we'll look at scales and how intervals can be used to form scales.</span>
            </p>
        </div>
    );
}

export default Intervals;