import './Chords.css'
const Chords
 = () => {
    return ( 
        <div className="chords-section">
        <p className="intro-text">A chord is a combination of three or more notes played at the same time.(They have to be thee or more. i.e 3, 4, 5 etc). When there are three, it has a special name. (TRIAD). There are different types of chords. The notes which constitute a chord are taken from a scale. Since there are different types of scales, the type of chord depends mainly on the particular <span className='extra-link'>scale and key</span> from which the notes are taken. For the scope of the course, we will consider only triad chords with notes taken from the major scale.</p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text'>
            Scales form the foudnation on which music is formed but chords themselves are the foundation because everything that can be done in music is centered around chords. Also, chords are what we will use to play songs.
            
        </p>
        <p className='px-2' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>Some examples of chords are: major chord, minor chord, diminished chord, augmented chords, suspended chords...and there are many others...But the ones mentioned above are the simplest and most important for now.</p>
    </div>
     );
}
 
export default Chords
;