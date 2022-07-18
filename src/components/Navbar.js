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
    return (
        <div className="top-nav">
            <div className="nav-left">
                {/* <div className="logo-area">
                    <a href="/" style={{textDecoration:"none",color:"black"}}></a>
                </div> */}
                <img src={logo} alt="" className="lgo"/>
            </div>
            <form className="top-nav-area">
                <input name="search" type="text" placeholder="search course..." className="search-form" style={{ paddingLeft: "2%", color: "#121B15" }} />

            </form><button onClick={displaySearch} onSubmit={displaySearch} className="search-button">SEARCH</button>
            <div className="nav-right">
                <a href="/"><i className="fa-solid fa-magnifying-glass newSearch" style={{paddingRight:"2%"}}></i></a>
                <a href="/">Admissions</a>
                <a href="musiccourse">Courses</a>
                <a href="/">Sponsor</a>
                <a href="/">Events</a>

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
                <select className='evt'>
                    <option>Social</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Youtube</option>
                </select>
            </div>
            <div className='mobileMenu'>
            <a href="/" style={{ marginLeft:"1rem"}}><i className="fa-solid fa-magnifying-glass newSearch"></i></a>
                <a href="#howto" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Admissions</a>
                <a href="/musiccourse" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Courses</a>
                <a href="#howto" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Sponsor</a>

                {/* <select className='evt'>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Events</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Holiday music Camps</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Yearly music session(3mo)</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Sound engineering training</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Music workshops</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none"}}>Master class</option>
                </select> */}

                <a href="/" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Events</a>
                <a href="/Aboutusd" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>About</a>
                <a href="/contactus" onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Contact us</a>
                <select className='evt'>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Social</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Facebook</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Instagram</option>
                    <option onClick={()=>{document.querySelector('.mobileMenu').style.display="none";setMenu(true)}} style={{paddingLeft:"1rem"}}>Youtube</option>
                </select>
            </div>
            <div className='menuIcon' onClick={()=>{if(menu){document.querySelector('.mobileMenu').style.display="flex"; setMenu(false)};if(!menu){document.querySelector('.mobileMenu').style.display="none"; setMenu(true)};}}><i className="fa-solid fa-bars" ></i></div>
        </div>
    );
}

export default Navbar;