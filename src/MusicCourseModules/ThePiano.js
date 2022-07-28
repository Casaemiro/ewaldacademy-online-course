import './ThePiano.css'
import pianoreal from '../images/pianoreal.jpg'
import pianoelectric from '../images/pianoelectric.jpg'
import blackandwhite from '../images/piano2.png'
const ThePiano = () => {
    return (
        <div className="the-piano">
            <p className="intro-text">As seen few lessons ago, the piano is a stringed <span className='extra-link'>accoustic</span> instrument which uses a keyboard to produce sound. When each key is pressed, a hammer which is connected to that key is caused to move and hit a particular string which then produces the sound. You can learn more about how a piano produces its sound by following <a href="/">this link</a>. Pianos are quite expensive and so most people tend to own electric pianos instead which are more affordable.</p><div className='intro-img'>
                <img src='' alt="" />
            </div><p className="intro-text"> A piano is referred to as an acoustic instruments because it produces its sound by itself without need for electric sound amplifiers. Below is a picture of a piano and its electric version. </p>
            <div className='p-3 row'>
                <img src={pianoreal} alt="" className='p-2 col-sm-6'/>
                <img src={pianoelectric} alt=""  className='p-2 col-sm-6'/>
            </div>
            <p className='intro-text'>
            The same principles of playing applies to all keyboard instruments be it a piano, electric piano or organ. Thus for the rest of this course, we will not be concerned with the particular instrument but we will use just the keyboard to illustrate certain concepts in music theory.
            </p>
            <p className='intro-text'>
            First, we will start by noting some observations on the keyboard. These observations will help us have a better picture of the keyboard and by so doing ease our understanding of the pattern in which the keys are arranged.
            </p>
            <div className="p-1 mx-3 mb-2"  style={{border:"1px solid rgba(90, 20, 0, 0.327)", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
            <span className='extra-link'>Observation 1: </span> Generaly, keyboards have white and black keys.
            
            </div>
            <div className='px-3 mb-2 row'><img src={blackandwhite} alt='asd' className='col-12 col-sm-8 col-md-6'/></div>
            <div className="p-1 mx-3 mb-2"  style={{border:"1px solid rgba(90, 20, 0, 0.327)", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
            <span className='extra-link'>Observation 2: </span> All black keys are separated by white keys.
            </div>
            <div className='px-3 mb-2 row'><img src={blackandwhite} alt='asd' className='col-12 col-sm-8 col-md-6'/></div>
            <div className="p-1 mx-3 mb-2"  style={{border:"1px solid rgba(90, 20, 0, 0.327)", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
            <span className='extra-link'>Observation 3: </span> The black keys are short while the white are longer.
            </div>
            <div className='px-3 mb-2 row'><img src={blackandwhite} alt='asd' className='col-12 col-sm-8 col-md-6'/></div>
            <div className="p-1 mx-3 mb-2"  style={{border:"1px solid rgba(90, 20, 0, 0.327)", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
            <span className='extra-link'>Observation 4: </span> The black keys are arranged in groups of twos and threes.
            </div>
            <div className='px-3 mb-2 row'><img src={blackandwhite} alt='asd' className='col-12 col-sm-8 col-md-6'/></div>


            
            <p className='intro-text'>In the next lesson, we will learn how to name these keys.</p>
        </div>
    );
}

export default ThePiano;