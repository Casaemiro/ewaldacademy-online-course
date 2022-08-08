import DashNav from '../DashboardComponents/DashboardNavBar';
import DashCourse from '../DashboardComponents/DashCourse';
import DashEvents from '../DashboardComponents/DashEvents';
import Program from '../DashboardComponents/DashProgram';
import './dashboard.css'

const Dashboard = ({collec, postlist, programs, programlist}) => {
    return ( 
        <div className="dashboard-section">
            <DashNav />
            <DashEvents colec= {collec} postlist={postlist}/>
            <DashCourse courselist={programlist}/>
            <Program programs = {programs} programlist={programlist}/>
        </div>
     );
}
 
export default Dashboard;