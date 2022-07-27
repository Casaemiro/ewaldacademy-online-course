import './minorChords.css'
const MinorChords = () => {
    return ( 
        <div className="minorChords-section">
        <p className="intro-text">Minor chords can be approached from different points of view. A minor triad is formed from a major chord by simply lowering the 3rd scale degree by a semitone. A minor chord can also be formed on all 12 keys. The minor chord formed based on the key of C is called C-minor. Likewise we can also form a minor chord from the major scale by playing the 1st, flat 3rd and 5th scale degrees of the major scale on what ever key you are in. flat third is the key a semitone lower than the third.</p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        For example to play the F-minor chord, we need to first of all know the major scale on the key of F. Which is:<br/>
        <span className='extra-link'>F G A F# C D E F</span><br/>
        Now all that is left is picking out the first, flat third and fifth notes from the F-major scale. which are:<br/>
        <span className='extra-link'>F Ab(A flat) C</span><br/>
        playing these notes together gives the F-minor chord.
        </p>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        Alternatively, If we know the notes of the major chord,(F A C) then to form the minor chord, we just need to lower the third (F Ab C). This same priciple holds for all keys.
        </p>
    </div>
     );
}
 
export default MinorChords;