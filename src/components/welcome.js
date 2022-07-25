import './welcome.css'

const Welcome = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-text">
                Welcome to <b>Ewald Music Academy</b>. We offer the following services
            </div>
            <div className="what-we-do w-100" style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap:"wrap" }}>
                <div className="service col-md-3 col-sm-3 col-8 bg-warning">
                <i className="fa-solid fa-chalkboard-user fa-4x my-3 p-2" style={{color:"white", border:"1px solid white", borderRadius:"3px"}}></i>
                    <div><div><b>Organize music trainings</b></div>teaching you everything you need to know in order to kick-start your music career.</div>
                </div>
                <div className="service col-md-3 col-sm-3 col-8 bg-warning">
                <i className="fa-brands fa-soundcloud fa-4x my-3  p-2" style={{color:"white", border:"1px solid white", borderRadius:"3px"}}></i>
                    <div><div><b>Sound engineering workshops</b></div>Training on how to make the most of your soud equipment</div>
                </div>
                <div className="service col-md-3 col-sm-3 col-8 bg-warning">
                <i className="fa-solid fa-people-group fa-4x my-3  p-2" style={{color:"white", border:"1px solid white", borderRadius:"3px"}}></i>
                    <div><div><b>CAMP</b></div>Available on hire to train bands and teams in and out of Buea.</div>
                </div>
            </div>
            <div className="welcome-text" style={{padding:"none"}}>
            <div style={{border:"1px solid rgba(0,0,0,0.3)",width:"75%",margin:"0px auto",padding:"1%",borderRadius:"3px"}} className="sect-bt">We are well <b>equiped and trained</b> to offer you the best</div>
                
            </div>
        </div>
    );
}

export default Welcome;