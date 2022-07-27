import './chordInversions.css'
const ChordInversion = () => {
    return ( 
        <div className="chordInversion-section">
        <p className="intro-text">Chord inversions refer to the different ways of playing the same chord. This is achieved by changing the order of the notes in that chord. That said, it follows that the number of ways of playing a particular chord ( The number of inversions) is dependent on the number of notes in that chord. That is, a triad given its three notes can be played in three different ways or three inversions. In the same way, a chord  with 4 notes will have 4 inversions</p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        Recall that the concept of inversions is acheived by simply changing the order of SAME NOTES in a chord. For example...C-Major triad has the notes:<br/>
        <span className='extra-link'>C E G</span> (this is the first arrangement and is called root position)</p>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        We can reorder the notes moving the first note to the last possition to give:<br/>
        <span className='extra-link'>E G C</span> (this is the second arrangement and is called the first inversion) Note that the notes have not  changed, only the order and thus it is still the same chord.
        </p>
        <p  className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        We can further reorder the first inversion moving the first note to the last possition to give:<br/>
        <span className='extra-link'>G C E</span> (this is the third arrangement and is called the second inversion) Note that if we try moving the first note again, it takes us back to the root position. which means we have used up all inversions giving us a total of three inversions for our triad chord.
        </p>
        <p  className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
        Inversions are important and very useful because they allow us to play one chord in many different ways thereby giving us many options. Another reason is because they help us limit hand movements on the keyboard since we can invert all our chords to the same area on the keyboard. This will be ilustrated later on in the course.
        </p>
    </div>
     );
}
 
export default ChordInversion;