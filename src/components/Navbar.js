import './Navbar.css'
import logo from '../images/logo.png'
import React from 'react'
// import { Link } from 'react-router-dom'
// import { a } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = React.useState("true")
    const displaySearch = () => {
        document.querySelector('.hero-section').style.display = "none"
        document.querySelector('.howto-section').style.paddingTop = "5%"
        document.querySelector('.events').style.display = "flex"
        // document.querySelector('.events').style.margin = "0px auto"
        console.log("wow")
    }
    const showFunc =()=>{
        document.querySelector('.social-sec').style.display ="flex"
        document.querySelector('.scio').style.alignItems = "center"
        document.querySelector('.mobileMenu').style.display="none";
        setMenu(true)
    }
    return (
        <div className="top-nav">
            <div className="nav-left">
                {/* <div className="logo-area">
                    <a href="/" style={{textDecoration:"none",color:"black"}}></a>
                </div> */}
                <a href="/"><img src={logo} alt="" className="lgo"/></a>
            </div>
            <div className="middlemobile"><b><a href="/">EwaldMusic</a></b></div>
            <form className="top-nav-area">
                <input name="search" type="text" placeholder="search course..." className="search-form" style={{ paddingLeft: "2%", color: "#121B15" }} disabled />

            </form><button onClick={displaySearch} onSubmit={displaySearch} className="search-button" disabled>SEARCH</button>
            <div className="nav-right">
                <a href="/"><i className="fa-solid fa-magnifying-glass newSearch" style={{paddingRight:"2%"}}></i></a>
                <a href="admission">Admissions</a>
                <a href="courselist">Courses</a>
                <a href="/events">Events</a>

                {/* <select className='evt'>
                    <option>Events</option>
                    <option>Holiday music Camps</option>
                    <option>Yearly music session(3mo)</option>
                    <option>Sound engineering training</option>
                    <option>Music workshops</option>
                    <option>Master class</option>
                </select> */}
                <a href="/Abt">About</a>
                <a href="contactus">Contact us</a>
                <a href="/dashboard">Admin</a>
                <span href="/" onClick={showFunc}>Social</span>
            </div>
            <div className='mobileMenu'>
            <a href="/" style={{ marginLeft:"1rem"}}><i className="fa-solid fa-magnifying-glass newSearch"></i></a>
                <a href="admission" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Admissions</a>
                <a href="/courselist" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Courses</a>
                <a href="/dashboard" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Admin</a>

                <a href="/events" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Events</a>
                <a href="/Abt" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>About</a>
                <a href="/contactus" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Contact us</a>
                <span onClick={showFunc}>Social</span>
            </div>
            <div className='menuIcon' onClick={()=>{if(menu){document.querySelector('.mobileMenu').style.display="flex"; setMenu(false)};if(!menu){document.querySelector('.mobileMenu').style.display="none"; setMenu(true)};}}><i className="fa-solid fa-bars" ></i></div>
        </div>
    );
}

export default Navbar;