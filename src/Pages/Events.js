import slide1 from '../images/DSC_2185.JPG'
import slide2 from '../images/DSC_2415.JPG'
import './Events.css'
const Events = () => {
    return (
        <>
            <div className='qualityinfo'>
                <p className="qualityinfo-topic">Events</p>
                <p>
                    Below is a list of our <b>upcoming events</b>. subscribe to out mail list to get notified each time we have a new event.
                </p>
            </div>
            <div className="eventlist px-md-5">
                <div className=" col-12 col-sm-6 p-2">
                    <div className="post card" >
                        <div className="card-body">
                            <h5 className="card-title courset">Ewald Music 6th batch graduation</h5>
                            <p className="card-text faint">#enjoyment</p>

                        </div>
                        <img src={slide1} className="card-img-top eventimage" alt="..." />
                        <div className="card-body">
                            {/* <h5 className="card-title courset">Ewald Music 6th batch graduation</h5> */}
                            <p className="card-text faint">We are exited to inform you that in coming months, we will be hosting a graduation ceremony of the 6th bath of ewald music academy.</p>
                            <a href="/"><i className="fa-solid fa-thumbs-up fa-2x"></i></a>  <a href="/" style={{ marginLeft: "2%" }}><i className="fa-solid fa-share-nodes fa-2x "></i></a>
                        </div>
                    </div>
                </div>
                <div className=" col-sm-6 col-12 p-2">
                    <div className="post card">
                        <div className="card-body">
                            <h5 className="card-title courset">Coming soon: DWK2022</h5>
                            <p className="card-text faint">#Celebration</p>

                        </div>
                        <img src={slide2} className="card-img-top eventimage" alt="..." />
                        <div className="card-body">
                            {/* <h5 className="card-title courset">Coming soon: DWK2022</h5> */}
                            <p className="card-text faint">Giant steps. Improving your sound</p>
                            <a href="/"><i className="fa-solid fa-thumbs-up fa-2x"></i></a>  <a href="/" style={{ marginLeft: "2%" }}><i className="fa-solid fa-share-nodes fa-2x "></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <img src="..." class="rounded me-2" alt="..."/>
                        <strong class="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        </>
    );
}

export default Events;