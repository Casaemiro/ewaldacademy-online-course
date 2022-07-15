import './CommonlyUsedTerms.css'

const CommonlyUsedTerms = () => {
    return ( 
        <div className="commonlyUsed">
            <p className="intro-text">Before getting into real work, it is important that we take some time to understand the different terminology that we'll be using often. Perhaps not indepth but just so we have an idea. <b>Note</b> that not every term can be covered in this section but the most basic/relevant. Those that will be left out will eventualy be talked about when we come across them.</p>
            <div className='intro-img'>
                <img src='' alt=""/>
            </div>
            <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Tempo:</span> Tempo refers to how fast or slow a particular piece of music is. If the piece of music is done at a fast pace, we say that It has a high tempo and other wise a low tempo<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Note:</span> A note referes to any distinct musical sound. that is, any sound that can be used to produce music.<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Pitch:</span> Pitch refers to how high or low any note is.<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Scale:</span> A scale is a ladder of notes. It often  starts on a note and ends on that same note on the next octave,<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Interval:</span> This is the distance or separation between any two notes. distance on land is measured in meters and kilometers while in music, distance or separation in measured in intervals. there are many types and will be covered in the modules ahead.<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Melody:</span> Melody is a beautifuly arranged successsion of notes, where the intervals between the notes and the sustain on the notes are nicely situated.<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Chords:</span> A chord is a combination of three or more notes played simultaneuosly.<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Solo:</span> A part of music whereby a single individual stands out to be heard.<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Harmony:</span> A simultaneous placement of multiple melodies (Most likely three or more). The different melodies are called parts.(Soprano, alto, tenor,..etc)<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Duet:</span> A two-part harmony.<br/>
            <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.7)"}}>Transpose:</span> Transposing means programmaticaly causing different keys to sound like others (Changing the key).<br/>
            </p>
        </div>
     );
}
 
export default CommonlyUsedTerms;