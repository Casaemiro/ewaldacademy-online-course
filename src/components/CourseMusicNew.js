import './CourseMusic.css'
import { useState } from 'react';

import React from 'react';


const Course = ({ course }) => {
    const [menu, setMenu] = React.useState("true")
    const [topp, setTop] = useState("Getting Started")
    // const [temp, setTemp] = useState(".strt-section")
    const [tempcourse, setTempcourse] = useState(course[0])

    console.log(course);

    const showTab = (e) => {
        if (menu) {
            document.querySelector(".mobl").style.display = "contents";
            setMenu(false)
        } else {
            document.querySelector(".mobl").style.display = "none";
            setMenu(true)
        }

    }
 
    const leftTabFunctionality = (e) => {
        setTop(e.target.innerHTML);

        document.querySelector('#activeTab').removeAttribute('id', 'activeTab')
        e.target.setAttribute('id', 'activeTab')
    }
    let i = 0
    return (
        <>
            <div className="course-title-section">
                <b>{tempcourse.course}</b>
            </div>
            <div className="course-section">
                <div className="course-outline">
                    {
                        
                        course.map((elem) => {
                            if(i === 0){
                                return <div key={elem.id} className={`course-module ${i++}`} id='activeTab' onClick={(e) => { leftTabFunctionality(e); setTempcourse(elem) }}>{elem.moduletitle}</div>
                            }else{
                                return <div key={elem.id} className={`course-module `}  onClick={(e) => { leftTabFunctionality(e); setTempcourse(elem)  }}>{elem.moduletitle}</div>
                            }
                            
                        })
                    }

                </div>
                <div className="course-material">
                    <div className="topic-section"><span className='tab-section' onClick={showTab} >tab<i className="fa-solid fa-angle-down" style={{ marginTop: "6px", marginRight: "0%" }}></i></span>
                        <div className=" mobl">
                            {
                                course.map((elem) => {
                                    return <div key={elem.id} className="course-module " id='activeTab' onClick={(e) => { setTop("Getting Started");}}>{elem.moduletitle}</div>
                                })
                            }

                        </div>
                        {topp}
                    </div>
                    <p className="intro-text">{tempcourse.modulenotes[0]}</p>
                  
                    <iframe width="100%" height="415"
                        src={"https://www.youtube.com/embed/" + tempcourse.modulevideourl}>
                    </iframe>
                    <p className="intro-text">{tempcourse.modulenotes[1]}</p>
                    <p className="intro-text">{tempcourse.modulenotes[2]}</p>
                </div>
            </div>
        </>
    );
}

export default Course;