import './majorScale.css'
const MajorScale = () => {
    return ( 
        <div className="majorScale-section">
        <p className="intro-text">The major scale is the most used scale and it is called major because it sounds happy. The major scale has 8 notes where the eighth note is a higher octave(repeatition) of the first so technicaly it has just 7 notes. Recall that  there are 12 notes in western music. The major scale can be played beginning from any of the 12 notes giving us 12 different versions of the major scale. When it is played beginning from C, it is called the C-major scale, When begun fom F-sharp, it is called the F-sharp-major scale and so on. The first note of the major scale is called the key of the scale. In other words, Playing the major scale on the key on C means taking C as the first note of the scale. Now we know how to get the first note but how do we figure out the other 6 notes? thats where the major scale formular comes in.</p>
        <div className='intro-img'>
            <img src='' alt=""/>
        </div>
        <p className='intro-text'>
            The formular bellow is the formular we'll use to get the notes of the major scale on all 12 keys. The concept of intervals will be used extensively in this section. On the formular, <span className='extra-link'>T</span> means tone or whole step and <span className='extra-link'>st</span> means semitone or half step. The most important thing to remember are the intervervals between the different notes. Its more important that you remember that between 1 and 2 is tone, between 2 and 3 is tone, between 3 and 4 is semitone, between 4 and 5 is tone, between 5 and 6 is tone, between 6 and 7 is tone, between 7 and 8 is semitone.
        </p>
        <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}} >
            <span className='extra-link'>For example</span> to play the major scale on the key of C, C becomes the first note of the scale or the 1. From 1 to 2 is a tone so 2 is a tone interval from 1. looking at the keyboard, the key one tone from C is ..... D. Meaning we now know 1 which is C and we also know 2 which is D. We also know that from 2 to 3 is also a tone interval. on that backdrop, a tone from D is E which means our 3 is E. The rest of the process is summerize in the diagram below.
        </p>
    </div>
     );
}
 
export default MajorScale;