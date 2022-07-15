import './Howto.css'
const Howto = () => {
    return ( 
        <div className="howto-section">
            <div className="howto-section-header">Admission into Ewald music academy</div>
            <div className="howto-steps">
                <span style={{color:"black", fontWeight:"700", marginRight:"3%"}}>Step 1</span>Click on Admission from the top menu..............
            </div>
            <div className="howto-steps">
            <span style={{color:"black", fontWeight:"700", marginRight:"3%"}}>Step 2</span>Select the program you want to register for....
            </div>
            <div className="howto-steps">
            <span style={{color:"black", fontWeight:"700", marginRight:"3%"}}>Step 3</span>Fill in the form that pops up...................................
            </div>
            <div className="howto-steps">
            <span style={{color:"black", fontWeight:"700", marginRight:"3%"}}>Step 4</span>Select payment method and make payment...
            </div>
            
        </div>
     );
}
 
export default Howto;