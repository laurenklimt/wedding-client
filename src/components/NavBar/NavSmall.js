import { Link } from "react-router-dom";
import { useState, useEffect } from "react"
import './NavSmall.css'
import Heart from '../../assets/heart.png'

function NavSmall() {
    const [menu, setMenu] = useState('')
    const [open, setOpen] = useState('')
    const [close, setClose] = useState('')

    useEffect(() => {
        setMenu("")
        setOpen("")
        setClose("hidden")
    }, [])

    function OpenMenu() {
        setMenu("open")
        setOpen("hidden")
        setClose("")
    }

    function CloseMenu() {
        setMenu("")
        setOpen("")
        setClose("hidden")
    }

    return (
        <>
            <div className="nav-bar">
                <Link to="/" className="item l-b"><img src={Heart} alt="heart" height='40'/></Link>
                <span className="item menu-icon"> 
                    <i className={`material-icons ${open}`} onClick={() => OpenMenu()}>menu</i>
                    <i className={`material-icons ${close}`} onClick={() => CloseMenu()}>close</i>
                </span>
            </div>
            <div className={`menu ${menu}`}>
                <div className="container">
                    <Link className="link" to="/">INVITATION</Link>
                    <Link className="link" to="/rsvp">RSVP</Link>
                    <Link className="link" to="/event-details">EVENT DETAILS</Link>
                    <Link className="link" to="/registry">REGISTRY</Link>
                </div>
            </div>
        </>
    )
}

export default NavSmall