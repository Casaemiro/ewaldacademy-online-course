import Course from '../components/CourseMusicNew'
import './musicbasics.css'
import { a } from './CourseList'
const MusicBasics = ({ course }) => {
    console.log("a", a);
    return (
        <div className='bgicon'>
            <div className='whiteoverl'>
                <Course course={course} />
            </div>
        </div>
    );
}

export default MusicBasics;