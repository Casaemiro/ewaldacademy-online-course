
import './Events.css'
const Events = ({ post }) => {

    return (
        <>
            <div className='qualityinfo'>
                <p className="qualityinfo-topic">Events</p>
                <p>
                    Below is a list of our <b>upcoming events</b>. Subscribe to our mail list to get notified each time we have a new event.
                </p>
            </div>
            <div className="eventlist px-md-5">
                {post.map((evt) => {

                    return (<div className=" col-sm-6 col-12 p-2" key={evt.id}>
                    
                        <div className="post card">
                            <div className="card-body">
                                <h5 className="card-title courset">{evt.Caption}</h5>
                                <p className="card-text faint">#{evt.hashtag}</p>

                            </div>
                            <img src={evt.url} className="card-img-top eventimage" alt="..." />
                            <div className="card-body">
                                {/* <h5 className="card-title courset">Coming soon: DWK2022</h5> */}
                                <p className="card-text faint">{evt.description}</p>
                                <a href="/"><i className="fa-solid fa-thumbs-up fa-2x"></i></a>  <a href={`whatsapp://send?text=${evt.description}`} data-action="share/whatsapp/share" style={{ marginLeft: "2%" }}><i className="fa-solid fa-share-nodes fa-2x "></i></a>
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