import DashNav from '../DashboardComponents/DashboardNavBar';
import DashEvents from '../DashboardComponents/DashEvents';
import Program from '../DashboardComponents/DashProgram';
import './dashboard.css'

const Dashboard = ({collec, postlist, programs, programlist}) => {
    return ( 
        <div className="dashboard-section">
            <DashNav />
            <DashEvents colec= {collec} postlist={postlist}/>
            <Program programs = {programs} programlist={programlist}/>
        </div>
     );
}
 
export default Dashboard;