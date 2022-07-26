import './socialpop.css'
const SociaPop = () => {
    const hideFunc = () => {
        document.querySelector('.social-sec').style.display = "none"
    }
    return (
        <div className="social-sec">
            <div className='scio1'>
                <span className='scio row col-md-6 p-md-3 p-sm-1'>
                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fyoutube.com%2Fchannel%2FUCHWW84oJGcYqfOuWkQME5-Q&e=ATPMYuHQUQMjFGHyTClVcCovoB_YQsfEnBT-DJWBh1wpGZsNhoGD9YnwZi-5L3v4f6D81WIT6QV1wvOC3vAw54U&s=1"  target={"_blank"} rel="noreferrer" className='socialicon col-sm-3 px-2' style={{ color: "red" }}><i className="fa-brands fa-youtube fa-4x"></i></a>
                    <a href="https://www.instagram.com/ewald_music/" target={"_blank"} rel="noreferrer" className='socialicon col-sm-3' style={{ color: "violet" }}><i className="fa-brands fa-instagram-square fa-4x"></i></a>
                    <a href="/" className='socialicon col-sm-3'  target={"_blank"} style={{ color: "rgba(0,0,256,0.7)" }}><i className="fa-brands fa-facebook-square fa-4x"></i></a>
                </span> 
                <i className="fa-solid fa-xmark p-1" onClick={hideFunc} style={{ color: "red"}}></i>
            </div>
            <div className='opc' onClick={hideFunc}>

            </div>
           
        </div>
    );
}

export default SociaPop;