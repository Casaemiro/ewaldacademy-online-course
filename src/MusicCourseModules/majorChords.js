import './majorChords.css'
const MajorChords = () => {
    return ( 
        <div className="majorChords-section">
        <p className="intro-text">A major triad is formed from the major scale by playing the 1st, 3rd and 5th scale degrees of the major scale on what ever key you are in. That is, A major chord can be formed from all 12 keys. The Major chord formed from the key of C is called C-Major. Likewise the major chord formed from the key of G is called G-Major and same priciple applies for all other keys.</p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        For example to play the F-Major chord, we need to first of all know the major scale on the key of F. Which is:<br/>
        <span className='extra-link'>F G A F# C D E F</span><br/>
        Now all that is left is picking out the first, second and fifth notes from the F-major scale. which are:<br/>
        <span className='extra-link'>F A C</span><br/>
        playing these notes together gives the F-major chord.
        </p>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        Most people often mistake the major chord for the major scale...The major scale has all 8 notes (1,2,3,4,5,6,7 and 8(1)) while the major chord has just the 3 notes (1, 3 and 5). Another difference is that scales are played one note at a time while chords are played multiple notes at once.
        </p>
    </div>
     );
}
 
export default MajorChords;