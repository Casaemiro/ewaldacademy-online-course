import './welcome.css'

const Welcome = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-text">
                Welcome to <b>Ewald Music Academy</b> site. We offer the following services
            </div>
            <div className="what-we-do row w-100" style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <div className="service col-md-3 col-sm-3 col-8 bg-warning">
                <i className="fa-solid fa-chalkboard-user fa-4x" ></i>
                    <div>Organize music trainings</div>
                </div>
                <div className="service col-md-3 col-sm-3 col-8 bg-warning">
                <i class="fa-brands fa-soundcloud fa-4x"></i>
                    <div>Sound engineering workshops</div>
                </div>
                <div className="service col-md-3 col-sm-3 col-8 bg-warning">
                <i class="fa-solid fa-people-group fa-4x"></i>
                    <div>Available on hire to train bands and teams</div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;