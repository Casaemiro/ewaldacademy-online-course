import './CourseMusic.css'
import { useState } from 'react';
import Started from '../MusicCourseModules/Started';
import Introduction from '../MusicCourseModules/Introduction';
import CommonlyUsedTerms from '../MusicCourseModules/CommonlyUsedTerms';
import ClassificationOfMusicalInstruments from '../MusicCourseModules/category';
import MusicalAphabet from '../MusicCourseModules/MusicalAlphabet';
import ThePiano from '../MusicCourseModules/ThePiano';
import NamingWhiteKeys from '../MusicCourseModules/namingWhiteKeys';
import NamingBlackKeys from '../MusicCourseModules/namingBlackKeys';
import Scales from '../MusicCourseModules/scales';
import FingeringChart from '../MusicCourseModules/fingeringCharts';
import MajorScale from '../MusicCourseModules/majorScale';
import Chords from '../MusicCourseModules/Chords';
import MajorChords from '../MusicCourseModules/majorChords';
import MinorChords from '../MusicCourseModules/minorChords';
import DiminishedChords from '../MusicCourseModules/diminishedChords';
import ChordInversion from '../MusicCourseModules/chordInversions';
import DiatonicChords from '../MusicCourseModules/diatonicChords';
import React from 'react';
import Intervals from '../MusicCourseModules/intervals';

const Course = () => {
    const [menu, setMenu] = React.useState("true")
    const [topp, setTop] = useState("Getting Started")
    const [temp, setTemp] = useState(".strt-section")


    const showTab = (e) => {
        if (menu) {
            document.querySelector(".mobl").style.display = "contents";
            setMenu(false)
        } else {
            document.querySelector(".mobl").style.display = "none";
            setMenu(true)
        }

    }
    const displayModule = (val) => {
        if (temp !== "") {
            document.querySelector(temp).style.display = "none"

        }
        document.querySelector(val).style.display = "contents"
        document.querySelector(val).style.lineHeight = "25px"
        setTemp(val)
        document.querySelector(".mobl").style.display = "none"
    }
    const leftTabFunctionality = (e) => {
        setTop(e.target.innerHTML);
        // document.querySelectorAll('.course-module')
        // console.log(document.querySelector('.course-module'))
        document.querySelector('#activeTab').removeAttribute('id','activeTab')
        e.target.setAttribute('id', 'activeTab')
    }
    return (
        <>
            <div className="course-title-section">
                <b>Basic Music Theory</b>
            </div>
            <div className="course-section">
                <div className="course-outline">
                    <div className="course-module " id='activeTab' onClick={(e)=>{leftTabFunctionality(e); displayModule(".strt-section")}}>Getting started</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule(".introduction-section") }}>Introduction</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule(".commonlyUsed") }}>Commonly used terms</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule(".category") }}>Classification of musical instruments</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.musical-alphabet') }}>The musical alphabet</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.the-piano') }}>The piano</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.whiteKeys') }}>Naming of white keys</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule(".blackKeys") }}>Naming of black keys</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule(".intervals") }}>Intervals</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule(".scales") }}>Scales</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.fingerChart') }}>Fingering Charts</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.majorScale-section') }}>The major scale</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.chords-section') }}>Chords</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.majorChords-section') }}>Major chords</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.minorChords-section') }}>Minor chords</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.dimChords-section') }}>Diminished chords</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.chordInversion-section') }}>Chord inversions</div>
                    <div className="course-module" onClick={(e) => { leftTabFunctionality(e); displayModule('.diatonicChords-section') }}>Diatonic chord progression</div>
                    <div className='testing'></div>
                </div>
                <div className="course-material">
                    <div className="topic-section"><span className='tab-section' onClick={showTab} >tab<i className="fa-solid fa-angle-down" style={{ marginTop: "6px", marginRight: "0%" }}></i></span>
                        <div className=" mobl">
                            <div className="course-module" onClick={(e) => { setTop("Getting Started"); displayModule(".strt-section") }}>Getting started</div>
                            <div className="course-module" onClick={() => { setTop("Introduction"); displayModule(".introduction-section") }}>Introduction</div>
                            <div className="course-module" onClick={() => { setTop("Commonly used terms"); displayModule(".commonlyUsed") }}>Commonly used terms</div>
                            <div className="course-module" onClick={() => { setTop("Classification of musical instruments"); displayModule(".category") }}>Classification of musical instruments</div>
                            <div className="course-module" onClick={() => { setTop("The musical alphabet"); displayModule('.musical-alphabet') }}>The musical alphabet</div>
                            <div className="course-module" onClick={() => { setTop("The piano"); displayModule('.the-piano') }}>The piano</div>
                            <div className="course-module" onClick={() => { setTop("Naming of white keys"); displayModule('.whiteKeys') }}>Naming of white keys</div>
                            <div className="course-module" onClick={() => { setTop("Naming of black keys"); displayModule(".blackKeys") }}>Naming of black keys</div>
                            <div className="course-module" onClick={() => { setTop("Intervals"); displayModule(".intervals") }}>Intervals</div>
                            <div className="course-module" onClick={() => { setTop("Scales"); displayModule(".scales") }}>Scales</div>
                            <div className="course-module" onClick={() => { setTop("Fingering Charts"); displayModule('.fingerChart') }}>Fingering Charts</div>
                            <div className="course-module" onClick={() => { setTop("The major scale"); displayModule('.majorScale-section') }}>The major scale</div>
                            <div className="course-module" onClick={() => { setTop("Chords"); displayModule('.chords-section') }}>Chords</div>
                            <div className="course-module" onClick={() => { setTop("Major chords"); displayModule('.majorChords-section') }}>Major chords</div>
                            <div className="course-module" onClick={() => { setTop("Minor chords"); displayModule('.minorChords-section') }}>Minor chords</div>
                            <div className="course-module" onClick={() => { setTop("Diminished chords"); displayModule('.dimChords-section') }}>Diminished chords</div>
                            <div className="course-module" onClick={() => { setTop("Chord inversions"); displayModule('.chordInversion-section') }}>Chord inversions</div>
                            <div className="course-module" onClick={() => { setTop("Diatonic chord progression"); displayModule('.diatonicChords-section') }}>Diatonic chord progression</div>
                            <div className='testing'></div>
                        </div>
                        {topp}
                    </div>
                    <Started />
                    <Introduction />
                    <CommonlyUsedTerms />
                    <ClassificationOfMusicalInstruments />
                    <MusicalAphabet />
                    <ThePiano />
                    <NamingWhiteKeys />
                    <NamingBlackKeys />
                    <Intervals />
                    <Scales />
                    <FingeringChart />
                    <MajorScale />
                    <Chords />
                    <MajorChords />
                    <MinorChords />
                    <DiminishedChords />
                    <ChordInversion />
                    <DiatonicChords />

                </div>
            </div>
        </>
    );
}

export default Course;