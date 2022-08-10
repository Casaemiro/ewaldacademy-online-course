import './DashProgram.css'
import { useState } from 'react';
// import { storage } from '../firebaseconfig';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig';
import './created.css'
import './dashcourse.css'

const DashCourse = ({ coursesCollectionRef, courses }) => {
    const [course, setCourse] = useState(courses)
    const [coursename, setCourseName] = useState('')
    const [moduletitle, setModuleTitle] = useState("")
    const [modulenotes, setModulenotes] = useState([])
    const [modulevideourl, setModulevideourl] = useState("")
    const [UpdateId, setUpdateId] = useState('')
    // const [topics, setTopics] = useState([])
    const [introd, setIntrod] = useState("")
    const [imageurl, setImageurl] = useState("")
    const [textone, setTextone] = useState("")
    const [texttwo, setTexttwo] = useState("")

    

    const createCourse = async () => {
        setModulenotes([introd,textone, texttwo])
       console.log(modulenotes);
        // if (moduleimages == null) return;
        addDoc(coursesCollectionRef, { course: coursename, moduletitle: moduletitle, modulenotes: [introd,textone, texttwo], modulevideourl: modulevideourl, img: imageurl})
    }

    const deleteProgram = async (id) => {
        const userPost = doc(db, "courses", id)
        await deleteDoc(userPost).then(console.log('Deleted'))
    }

    const update = { course: coursename, moduletitle: moduletitle, modulenotes: [introd,textone, texttwo], modulevideourl: modulevideourl, img: imageurl}
    const editEvent = async (id) => {
        const userPost = doc(db, "courses", id)
        await updateDoc(userPost, update).then(console.log("Updated"))
        document.querySelector(".wow").style.display = "flex"
        document.querySelector(".nop").style.display = "none"
    }
    const creatText = () => {


        const text = '<textarea class=" mb-3 w-100 p-1 added-text module-text" placeholder="Add section"/>'
        document.querySelector('.new-edit-area').innerHTML += text
        console.log("text");
    }
    const creatHeading = () => {
        const text = '<div class="form-floating mb-3"><input type="text" class="form-control module-heading" id="floatingInput" placeholder="Heading"/><label htmlfor="floatingInput">Heading</label></div>'
        document.querySelector('.new-edit-area').innerHTML += text
        console.log("heading");
    }

    const creatImage = () => {
        const text = '<div class="form-floating mb-3"><input type="email" class="form-control module-image" id="floatingInput" placeholder="name@example.com" /><label htmlFor="floatingInput">Image URL</label></div>'
        document.querySelector('.new-edit-area').innerHTML += text
        console.log("Image");
    }

    const creatCaveate = () => {
        const text = '<textarea class=" mb-3 w-100 p-1 added-text caveate" placeholder="Add Caveate"/>'
        document.querySelector('.new-edit-area').innerHTML += text
        console.log("Image");
    }
    const sortCourses = (e) => {
        let cou = courses.map((el) => { return el }).filter((elem) => { return (elem.course === e) })
        setCourse(cou)
    }
    return (
        <div className="dashcourse">
            <div className='dashcreatedevents col-md-4'>
                <div className='createdEvents'>Courses</div>
                <div className="m-2 row">
                    <div className='col-6'>
                        <select className="w-100 p-2" onChange={(e) => { sortCourses(e.target.value); setCourseName(e.target.value) }}>
                            <option>Select course</option>
                            {courses.map((course) => {
                                return (
                                    <option key={course.id}>{course.course}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='col-6'>
                        <div className='p-2' onClick={()=>{document.querySelector('.coursename').style.display = "flex"}} style={{ border: "1px solid rgba(70,50,100,0.5)", borderRadius: "3px", backgroundColor: "rgba(250,232,256,0.9)", cursor:"pointer" }}>New course</div>
                    </div>
                </div>

                <div><b>Modules</b></div>
                {
                    course.map((prog) => {

                        return (
                            <div className="created m-2 p-2" key={prog.id}>
                                <div className="nameEvt col-5">{prog.moduletitle}</div>
                                <span><div className="bg-warning mx-1 px-2 round" onClick={() => { deleteProgram(prog.id) }}>delete</div></span>
                                <span><div className="bg-success mx-1 px-2 round" onClick={() => {
                                    document.querySelector(".wow").style.display = "none"
                                    document.querySelector(".nop").style.display = "flex"
                                    setUpdateId(prog.id)
                                    console.log(prog.id)
                                    setCourseName(prog.course)
                                    setImageurl(prog.img)
                                    setModulevideourl(prog.modulevideourl)
                                    setModuleTitle(prog.moduletitle)
                                    setIntrod(prog.modulenotes[0])
                                    setTextone(prog.modulenotes[1])
                                    setTexttwo(prog.modulenotes[2])


                                }}>edit</div></span>
                            </div>
                        )
                    })
                }

            </div>
            <div className='dashcreateevents col-md-6 p-md-5 p-sm-3 p-1' >
                <div className=" p-2 mb-3 edit-area">
                    <div className='createdEvents pb-5'>Add Modules</div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control coursename" onChange={(e) => { setCourseName(e.target.value) }} id="floatingInput" placeholder="name@example.com" style={{display:"none"}} value={coursename} />
                        <label htmlFor="floatingInput">Name of Course</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" value={moduletitle}  placeholder="name@example.com" onChange={(e) => { setModuleTitle(e.target.value) }} />
                        <label htmlFor="floatingInput">Name of module</label>
                    </div>
                    <textarea className=" mb-3 w-100 p-1 module-introduction" value={introd}  placeholder='Introduction...' onChange={(e)=>{setIntrod(e.target.value)}} />
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" value={modulevideourl}  placeholder="name@example.com" onChange={(e) => { setModulevideourl(e.target.value) }} />
                        <label htmlFor="floatingInput">Video URL</label>
                    </div>
                    <textarea className=" mb-3 w-100 p-1 module-text" value={textone}  placeholder='Add section...'  onChange={(e)=>{setTextone(e.target.value)}} />
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control module-image" value={imageurl}  id="floatingInput" placeholder="name@example.com"  onChange={(e)=>{setImageurl(e.target.value)}} />
                        <label htmlFor="floatingInput">Image URL</label>
                    </div>
                    <textarea className=" mb-3 w-100 p-1 module-text" placeholder='Add Section...' value={texttwo}   onChange={(e)=>{setTexttwo(e.target.value)}} />


                </div>
                <div className='new-edit-area'>

                </div>
                <div className="w-100">
                    <button className="mx-1 px-4" style={{ border: "none", borderRadius: "3px" }} onClick={creatText} disabled>Text</button>
                    <button className="mx-1 px-4" style={{ border: "none", borderRadius: "3px" }} onClick={creatImage} disabled>Image</button>
                    <button className="mx-1 px-4" style={{ border: "none", borderRadius: "3px" }} onClick={creatHeading} disabled>Heading</button>
                    <button className="mx-1 px-4" style={{ border: "none", borderRadius: "3px" }} onClick={creatCaveate} disabled>Caveate</button>
                </div>
                <div className="form-floating">
                    <button className='px-5 mt-3 create-btn wow' onClick={createCourse}>Create</button>
                    <button className='px-5 mt-3 edit-btn nop' onClick={() => { editEvent(UpdateId) }}>Save changes</button>
                </div>

            </div>
        </div>
    );
}

export default DashCourse;