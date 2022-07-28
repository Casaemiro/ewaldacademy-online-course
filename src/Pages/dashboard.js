import DashNav from '../DashboardComponents/DashboardNavBar';
import DashEvents from '../DashboardComponents/DashEvents';
import Program from '../DashboardComponents/DashProgram';
import './dashboard.css'

const Dashboard = () => {
    return ( 
        <div className="dashboard-section">
            <DashNav />
            <DashEvents />
            <Program />
        </div>
     );
}
 
export default Dashboard;