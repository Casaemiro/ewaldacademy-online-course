import Created from './created';
import './DashEvents.css'

const DashEvents = () => {
    return (
        <div className="dash-events" id='vis'>
            <div className='dashcreatedevents col-md-4'>
                <div className='createdEvents'>Created Events</div>
                <Created />
                <Created />
                <Created />
            </div>
            <div className='dashcreateevents col-md-6 p-md-5 p-sm-3 p-1' >
                <div className='createdEvents pb-5'>Create Event</div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Name of event</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload cover Image</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Description</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="text" />
                    <label htmlFor="floatingPassword">Hash tags</label>
                </div>
                <div className="form-floating">
                    <button className='px-5 mt-3 create-btn'>Create</button>
                </div>

            </div>
        </div>
    );
}

export default DashEvents;