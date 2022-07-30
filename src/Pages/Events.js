// import slide1 from '../images/DSC_2185.JPG'
import slide2 from '../images/DSC_2415.JPG'
import './Events.css'
const Events = ({ post }) => {

    let id = 1;
    return (
        <>
            <div className='qualityinfo'>
                <p className="qualityinfo-topic">Events</p>
                <p>
                    Below is a list of our <b>upcoming events</b>. subscribe to out mail list to get notified each time we have a new event.
                </p>
            </div>
            <div className="eventlist px-md-5">
                {post.map((evt) => {

                    return (<div className=" col-sm-6 col-12 p-2" key={id++}>
                    
                        <div className="post card">
                            <div className="card-body">
                                <h5 className="card-title courset">{evt.Caption}</h5>
                                <p className="card-text faint">#{evt.hashtag}</p>

                            </div>
                            <img src={evt.url} className="card-img-top eventimage" alt="..." />
                            <div className="card-body">
                                {/* <h5 className="card-title courset">Coming soon: DWK2022</h5> */}
                                <p className="card-text faint">{evt.description}</p>
                                <a href="/"><i className="fa-solid fa-thumbs-up fa-2x"></i></a>  <a href="/" style={{ marginLeft: "2%" }}><i className="fa-solid fa-share-nodes fa-2x "></i></a>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>

        </>
    );
}

export default Events;