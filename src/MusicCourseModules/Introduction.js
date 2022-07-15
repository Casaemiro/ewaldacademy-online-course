import './Introduction.css'

const Introduction = () => {
    return ( 
        <div className="introduction-section">
            <p className="intro-text"><span className='extra-link'>Music</span> has been around for ages and is used in defferent fields and for different reasons. Some people use music for pleasure, relaxation, source of income, information, for <span className="extra-link">religious purposes</span> or a combination of diverse reasons. But what is common in most if not all  of them is that music acts as a tool for conveying information/emotions.<br/><br/>That said, music does not neccesarily have to be pleasing to the ear since that is subjective to the listener. Many people have different views as to what music really is. thus we will not be settling on a particular definition but we'll be giving a broad description.</p>
            <div className='intro-img'>
                <img src='' alt=""/>
            </div>
            <span className='intro-text'>There is a whole lot about the history of music we will not cover in this course but you can learn more <span className="extra-link">here</span></span>
            <p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
                <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.6)"}}>Definition 1:</span> Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion. (Oxford dictionary)
            </p><p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
                <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.6)"}}>Definition 2:</span> The science or art of ordering tones or sounds in succession, in combination, and in temporal relationships to produce a composition having unity and continuity. (<a href="https://www.merriam-webster.com/dictionary/music">ref</a>)
            </p><p className='intro-text' style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
                <span style={{fontWeight:"bold",color:"rgba(0,0,0,0.6)"}}>Definition 3:</span> The written system of symbols representing musical notes. (<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjRxf_-oub4AhUSx4UKHWn0Ag4QFnoECBcQAQ&url=https%3A%2F%2Fdictionary.cambridge.org%2Fdictionary%2Fenglish%2Fmusic&usg=AOvVaw0AvVTeP1DH0iqULFLkzxtu">ref</a>)
            </p>
            <p className='intro-text'>
               As mentioned above, people have different views as to what <span className='extra-link'>music</span> is and they may not be wrong because what one person may enjoy may be detested by the other person. Nevertheless, the definitions given above capture a general view of the whole idea.<br/> Music plays a very important role in communities. This is illustrated clearly in <span className="extra-link">Cameroon</span> where all the (more than 250) tribes have music as a very important part of the culture. Religious people/gatherings use it for worship and to communicate certain messages.<br/><br/> Music is considered very spiritual as it captivates the soul. Scientific <span className="extra-link">research</span> has shown that music can be used to cure certain health disorders <a href='https://www.health.harvard.edu/blog/healing-through-music-201511058556'>(Study more Here)</a> and those who study music generally have a tendency to be better at every other thing they do. This brief introduction has set us on a good backdrop on wich which we can start learning. But first, we will start from the basics and then build from there. Feel free to ask a question when you do not understand.
            </p>
            
        </div>
     );
}
 
export default Introduction;