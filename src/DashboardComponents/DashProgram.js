import './DashProgram.css'
import { useState } from 'react';
import { storage } from '../firebaseconfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig';
import './created.css'

const Program = ({ programs, programlist }) => {

    const [imageUpload, setImageUpload] = useState(null)
    // const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [price, setPrice] = useState(0)
    const [UpdateId, setUpdateId] = useState("")

    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/training/${imageUpload.name}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url)
                console.log(name)
                console.log(description)
                console.log(price)
                console.log(programs)
                addDoc(programs, { name: name, description: description, cost: price, likes: 0, url: url })
            }).then(() => { })
        })
    }

    const deleteProgram = async (id) => {
        const userPost = doc(db, "programs", id)
        await deleteDoc(userPost).then(console.log('Deleted'))
    }

    const update = { name: name, description: description, cost: price, url: imageURL }
    const editEvent = async (id) => {
        const userPost = doc(db, "programs", id)
        await updateDoc(userPost, update).then(console.log("Updated"))
        document.querySelector(".wow").style.display = "flex"
        document.querySelector(".nop").style.display = "none"
    }
    return (
        <div className="program">
            <div className='dashcreatedevents col-md-4'>
                <div className='createdEvents'>Trainings</div>
                {
                    programlist.map((prog) => {
                        return (
                            <div className="created m-2 p-2" key={prog.id}>
                                <div className="nameEvt col-5">{prog.name}</div>
                                <span><div className="bg-warning mx-1 px-2 round" onClick={() => { deleteProgram(prog.id) }}>delete</div></span>
                                <span><div className="bg-success mx-1 px-2 round" onClick={() => {
                                    document.querySelector(".wow").style.display = "none"
                                    document.querySelector(".nop").style.display = "flex"
                                    setUpdateId(prog.id)
                                    setImageURL(prog.url)
                                    setName(prog.name)
                                    setDescription(prog.description)
                                    console.log(prog.id)
                                    

                                }}>edit</div></span>
                            </div>
                        )
                    })
                }

            </div>
            <div className='dashcreateevents col-md-6 p-md-5 p-sm-3 p-1' >
                <div className='createdEvents pb-5'>Add training</div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setName(e.target.value) }} />
                    <label htmlFor="floatingInput">Name of program</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Upload cover Image</label>
                    <input className="form-control" type="file" id="formFile" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setDescription(e.target.value) }} />
                    <label htmlFor="floatingInput">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => { setPrice(e.target.value) }} />
                    <label htmlFor="floatingInput">Price</label>
                </div>
                <div className="form-floating">
                    <button className='px-5 mt-3 create-btn wow' onClick={uploadImage}>Create</button>
                    <button className='px-5 mt-3 edit-btn nop' onClick={()=>{editEvent(UpdateId)}}>Save changes</button>
                </div>

            </div>
        </div>
    );
}

export default Program;