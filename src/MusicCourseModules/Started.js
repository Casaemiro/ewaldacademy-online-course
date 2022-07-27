import './Started.css'
// import introimg from '../images/DSC_2163.JPG'
const Started = () => {
    return ( 
        <div className="strt-section">
            <p className="intro-text"><b>Hello!</b> Welcome to this course.We are honored that you chose to learn from us. Here, we will teach you everything you need to know before calling yourself a musician. This section is meant to prepare you for the lessons ahead, making sure that you have all you need for a smooth experience. You will be guided through each level at your pace. Extra study material will also be provied as need arises. You also have access to our very talented and <b>experienced</b> team of musicians for any questions/doubts.<br/><br/>This course is designed to be very simple and concise and each module is a prerequisite for the next module so even though the material is <b>comprehensive</b> enough, make sure you understand each module before moving to the next. This is to ensure optimal usage of the resources.</p>
            <div className='intro-img'>
                <img src={''} alt=""/>
            </div>
            <div className="intro-text">You do not need any prior knowledge in order to take this course but it is important that you own an instrument, preferably a piano since most of the illustrations in this course will be made on a piano. However some of the excercises will be doable without a piano.  Here are a few points that will help you make maximum use of this platform.</div>
            
            <ul style={{border:"1px solid rgba(90, 20, 0, 0.327)", marginLeft:"2%",marginRight:"2%", borderRadius:"5px",paddingTop:"1%",paddingBottom:"1%", backgroundColor:"rgba(90, 100, 0, 0.127)",paddingRight:"1%"}}>
                <li>Make sure you understand one lesson before going to the next.</li>
                <li>Ask questions when you don't understand.</li>
                <li>Study everyday (<b>Consistency is key</b>).</li>
                <li>Most lessons will be accompanied by some hands on excercises. Do well to practice along.</li>
            </ul>
            <p className="intro-text">Your honest comments will be very much appreciated.</p>
            
        </div>
     );
}
 
export default Started;