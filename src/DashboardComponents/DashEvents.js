import React from 'react';
// import Created from './created';
import './DashEvents.css'
import { useState } from 'react';
import { storage } from '../firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig';


const DashEvents = ({ colec, postlist }) => {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [hashtag, setHashtag] = useState("")
    const [UpdateId, setUpdateId] = useState("")
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/Posts/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageURL(url)
                addDoc(colec, { Caption: name, description: description, hashtag: hashtag, likes: 0, url: url })
            }).then(() => {
                console.log("Upload Successful")
            })
        })
    }

    const deleteProgram = async (id) => {
        const userPost = doc(db, "posts", id)
        await deleteDoc(userPost).then(console.log('Deleted'))
    }
    
    const update = { Caption: name, description: description, hashtag: hashtag, url: imageURL }
    const editEvent = async (id) => {
        const userPost = doc(db, "posts", id)
        await updateDoc(userPost, update).then(console.log("Updated"))
        document.querySelector(".create-btn").style.display = "flex"
        document.querySelector(".edit-btn").style.display = "none"
    }
    return (
        <div className="dash-events" id='vis'>
            <div className='dashcreatedevents col-md-4'>
                <div className='createdEvents'>Created Events</div>

                {
                    postlist.map((post) => {
                        return (
                            <div className="created m-2 p-2" key={post.id}>
                                <div className="nameEvt col-5">{post.Caption}</div>
                                <span><div className="bg-warning mx-1 px-2 round" onClick={() => { deleteProgram(post.id) }}>delete</div></span>
                                <span><div className="bg-success mx-1 px-2 round" onClick={(e) => {
                                    document.querySelector(".create-btn").style.display = "none"
                                    document.querySelector(".edit-btn").style.display = "flex"
                                    setUpdateId(post.id)
                                    setImageURL(post.url)
                                    setName(post.Caption)
                                    setHashtag(post.hashtag)
                                    setDescription(post.description)
                                    console.log(post.url)
                                    console.log(post.hashtag)

                                }}>edit</div></span>
                            </div>
                        )
                    })
                }
                {/* <div className="created m-2 p-2">
                    <div className="nameEvt col-5">{prog}</div>
                    <div className="bg-warning mx-1 px-2 round">delete</div>
                    <div className="bg-success mx-1 px-2 round">edit</div>
                </div> */}

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
                    <textarea rows={3} type="text" className="form-control tarea" style={{ height: "170px" }} id="floatingInput" placeholder="name@example.com" onChange={(e) => { setDescription(e.target.value) }} />
                    <label htmlFor="floatingInput">Description</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingPassword" placeholder="text" onChange={(e) => { setHashtag(e.target.value) }} />
                    <label htmlFor="floatingPassword">Hash tags</label>
                </div>
                <div className="form-floating">
                    <button className='px-5 mt-3 create-btn' onClick={uploadImage}>Create</button>
                    <button className='px-5 mt-3 edit-btn' onClick={() => { editEvent(UpdateId) }} >Save Changes</button>
                </div>

            </div>
        </div>
    );
}

export default DashEvents;