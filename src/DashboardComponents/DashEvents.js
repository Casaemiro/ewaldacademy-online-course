import React from 'react';
import Created from './created';
import './DashEvents.css'
import { useState } from 'react';
import { storage } from '../firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore'


const DashEvents = ({ colec }) => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [hashtag, setHashtag] = useState("")
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url)
                setImageURL(url)
                
                console.log(name)
                console.log(description)
                console.log(hashtag)
                console.log(imageURL)
            }).then(()=>{
                CreateEvent()
            })
        })
    }
    const CreateEvent = async () => {
        await addDoc(colec, { Caption: name, description: description, hashtag: hashtag, likes: 0, url: imageURL })
    }
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
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setName(e.target.value) }} />
                    <label htmlFor="floatingInput">Name of event</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload cover Image</label>
                    <input className="form-control" type="file" id="formFile" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setDescription(e.target.value) }} />
                    <label htmlFor="floatingInput">Description</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="text" onChange={(e) => { setHashtag(e.target.value) }} />
                    <label htmlFor="floatingPassword">Hash tags</label>
                </div>
                <div className="form-floating">
                    <button className='px-5 mt-3 create-btn' onClick={uploadImage}>Create</button>
                </div>

            </div>
        </div>
    );
}

export default DashEvents;