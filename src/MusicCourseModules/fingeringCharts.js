import './fingeringCharts.css'
import fn from '../images/fingernumbers.png'
import fn1 from '../images/fingering.png'
const FingeringChart = () => {
    return ( 
        <div className="fingerChart">
        <p className="intro-text">In this section we will cover material related to how we reference our fingers in order to keep  track of which finger plays which note. When particular fingers are responsible for particular notes, it gives room for accuracy. In music and particularly with the piano, all the fingers must be active and put to use. There are a number of finger exercises that will be added to the exercise section of this course that can help you get comfortable with using all fingers flexibly.
        </p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text'> Back to fingering, our fingers on both hands are numbered beginning with the thumb as 1, pointing finger as 2, middle finger as 3, ring finger as 4 and the pinkie as 5. The image bellow shows it better
        </p>
        
        <div className='row px-3'>
            <img src={fn} alt="" className='col-md-12'/>
        </div>
        <p className='intro-text'> Finger charts too are some of the important visual aid tools that we'll use subsequestly. A finger chart is simply a diagram indicating a note or notes, and the finger(s) that will be used to play those notes. The fingers are often indicated using the finger numbering system mentioned above...where the numbers on the keys represent the fingers that will be used to play them. Below is an example of a finger chart.
        </p>
        <div className='row px-3'>
            <img src={fn1} alt="" className='col-md-12'/>
        </div>
        <p className='intro-text'> Don't bother if you don't understand everything in the image above. What is important is that you understand that the numbers on the keys represent the fingers that will be used to play them.
        </p>
        
    </div>
     );
}
 
export default FingeringChart;