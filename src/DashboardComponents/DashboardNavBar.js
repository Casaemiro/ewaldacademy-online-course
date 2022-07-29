import './DashboardNavBar.css'

const DashNav = () => {
    const changeNavLink =(e)=> {
        document.querySelector("#headgreen").removeAttribute("id","headgreen")
        e.target.setAttribute("id","headgreen")
        if(e.target.innerHTML ==="Posts"){
            document.querySelector("#vis").setAttribute("id","inv")
            document.querySelector(".dash-events").setAttribute("id","vis")
        }
        if(e.target.innerHTML ==="Courses"){
            document.querySelector("#vis").setAttribute("id","inv")
            document.querySelector(".dash-events").setAttribute("id","vis")
        }
        if(e.target.innerHTML ==="Programs"){
            document.querySelector("#vis").setAttribute("id","inv")
            document.querySelector(".program").setAttribute("id","vis")
        }
    }

    return ( 
        <div className="dashnav-section">
            <span href="/" onClick={changeNavLink} className='dashlink' id="headgreen">Posts</span>
            <span href="/" onClick={changeNavLink}  className='dashlink'>Courses</span>
            <span href="/"  onClick={changeNavLink} className='dashlink'>Programs</span>
        </div>
     );
}
 
export default DashNav;