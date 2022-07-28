import './DashProgram.css'
import Created from './created';

const Program = () => {
    return ( 
        <div className="program">
            <div className='dashcreatedevents col-4'>
                <div className='createdEvents'>Trainings</div>
                <Created />
                <Created />
                <Created />
            </div>
            <div className='dashcreateevents col-6 p-md-5 p-sm-3 p-1' >
                <div className='createdEvents pb-5'>Add training</div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Name of program</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload cover Image</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Price</label>
                </div>
                <div className="form-floating">
                    <button className='px-5 mt-3 create-btn'>Create</button>
                </div>

            </div>
        </div>
     );
}
 
export default Program;