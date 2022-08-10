import Course from '../components/CourseMusic'
import './musicbasics.css'
import { a } from './CourseList'
const MusicBasics = () => {
    console.log("a", a);
    return ( 
        <div className='bgicon'>
        <div className='whiteoverl'>
        <Course />
        </div>
        </div>
     );
}
 
export default MusicBasics;