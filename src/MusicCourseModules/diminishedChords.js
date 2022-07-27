import './diminishedChords.css'
const DiminishedChords = () => {
    return ( 
        <div className="dimChords-section">
         <p className="intro-text">Diminished chords can be approached from different points of view as well. A diminished triad is formed from a major chord by simply lowering the 3rd and 5th scale degrees by a semitone. A diminished chord can also be formed on all 12 keys. The diminished chord formed based on the key of C is called C-diminished. Likewise we can also form a diminished chord from the minor scale by playing the 1st, flat 3rd and flat 5th scale degrees of the major scale on what ever key you are i.</p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        For example to play the F-diminished chord, we need to first of all know the major scale on the key of F. Which is:<br/>
        <span className='extra-link'>F G A F# C D E F</span><br/>
        Now all that is left is picking out the first, flat third and flat fifth notes from the F-major scale. which are:<br/>
        <span className='extra-link'>F Ab(A flat) B</span><br/>
        playing these notes together gives the F-diminished chord.
        </p>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        Alternatively, If we know the notes of the minor chord,(F Ab C) then to form the diminished chord, we just need to lower the fifth (F Ab ). This same priciple holds for all keys.
        </p>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        In sumary, if we know the major scale,<br/>
        <span className='extra-link'>F G A F# C D E F</span><br/>
        We can form the major chord
        <br/>
        <span className='extra-link'>F A C</span><br/>
        And since we know the major, we can from the minor by lowering the third.
        <br/>
        <span className='extra-link'>F Ab(A flat) C</span><br/>
        And since we know the minor, we can from the dominished by lowering the fifth.
        <br/>
        <span className='extra-link'>F Ab(A flat) B</span><br/>
        </p>
    </div>
     );
}
 
export default DiminishedChords;