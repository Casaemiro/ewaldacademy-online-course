import './fingeringCharts.css'
import fn from '../images/fingernumbers.png'
const FingeringChart = () => {
    return ( 
        <div className="fingerChart">
        <p className="intro-text">In this section we will cover material related to how we reference our fingers in order to keep  track of which finger plays which note. When particular fingers are responsible for particular notes, it gives room for accuracy. From now on, In music and particularly with the piano, all the fingers must be active and put to use. There are a number of exercises that will be added to this course subsequently that can help you get used to using all fingers flexibly.
        </p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text'> Back to fingering, our fingers on both hands are numbered beginning with the thumb as 1, pointing finger as 2, middle finger as 3, ring finger as 4 and the pinkie as 5. The image bellow shows it better</p>
        
        <div className='row px-3'>
            <img src={fn} alt="" className='col-md-12'/>
        </div>
        
    </div>
     );
}
 
export default FingeringChart;