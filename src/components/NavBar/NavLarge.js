import { Link } from "react-router-dom";
import './NavLarge.css'

function NavLarge() {

    return (
        <div className="nav-bar">
            <div className="left">
                <Link to="/" className="item l-b">L <span className="and">&</span> B</Link>
            </div>
            <div className="right">
                <Link className="link" to="/">INVITATION</Link>
                <Link className="link" to="/rsvp">RSVP</Link>
                <Link className="link" to="/events">EVENTS</Link>
                <Link className="link" to="/details">DETAILS</Link>
                <Link className="link" to="/registry">REGISRTY</Link>
            </div>
        </div>
    )
}

export default NavLarge