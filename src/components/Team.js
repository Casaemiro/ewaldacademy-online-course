import './Team.css'
import slide1 from '../images/DSC_2185.JPG'
import slide2 from '../images/DSC_2415.JPG'
import slide3 from '../images/DSC_2203.JPG'
import slide4 from '../images/DSC_2311.JPG'


const Team = () => {
    return (
        <div className="team-section px-3 ">
        <div className="team-head">
            Staff
        </div>
            <div class="row w-80" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <div className="col-md-2 p-2 col-5 col-sm-3" >
                    <img src={slide1} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">Ngwaya Nelson</h5>
                        <p className="card-text faint">General manager (IT engr. NRC, Bassist).</p>
                    </div>
                </div>
                <div className="col-md-2 p-2 col-5  col-sm-3" >
                    <img src={slide2} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">Tata Oswald</h5>
                        <p className="card-text faint">Music Director (Artist).</p>
                    </div>
                </div>
                <div className=" col-md-2 p-2  col-5 col-sm-3" >
                    <img src={slide3} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">B.Emmanuel.</h5>
                        <p className="card-text faint">CEO.(Agronomist, Bussines, Saxophonist) </p>
                    </div>
                </div>
                <div className=" col-md-2 p-2  col-5 col-sm-3" >
                    <img src={slide4} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">Harry Kesseng</h5>
                        <p className="card-text faint">Studio director.(Electrical engr, Bassist)</p>
                    </div>
                </div>
            </div>
            <div class="row w-80" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <div className="col-md-2 p-2 col-5 col-sm-3" >
                    <img src={slide1} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">Akoneh Silas</h5>
                        <p className="card-text faint">Diretor of Academy (Software engr. Iknitespace, Pianist).</p>
                    </div>
                </div>
                <div className="col-md-2 p-2 col-5  col-sm-3" >
                    <img src={slide2} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">T.Evaristus</h5>
                        <p className="card-text faint">Ganitor (Software engr Iknitespace, bassist).</p>
                    </div>
                </div>
                <div className=" col-md-2 p-2  col-5 col-sm-3" >
                    <img src={slide3} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">Nfor Stephanus.</h5>
                        <p className="card-text faint">Drummer.(Nurse) </p>
                    </div>
                </div>
                <div className=" col-md-2 p-2  col-5 col-sm-3" >
                    <img src={slide4} className="card-img-top team-image" alt="..." />
                    <div className="card-body team-role">
                        <h5 className="card-title staff-name">Ali Nesinyu</h5>
                        <p className="card-text faint">Lead pianist.(Producer)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;