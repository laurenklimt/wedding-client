import { Link } from "react-router-dom";
import './NavLarge.css'
import Heart from '../../assets/heart.png'

function NavLarge() {

    return (
        <div className="nav-bar">
            <div className="left">
                <Link to="/" className="item l-b"><img src={Heart} alt="heart" height='40'/></Link>
            </div>
            <div className="right">
                <Link className="link" to="/">INVITATION</Link>
                <Link className="link" to="/rsvp">RSVP</Link>
                <Link className="link" to="/event-details">EVENT DETAILS</Link>
                <Link className="link" to="/registry">REGISTRY</Link>
            </div>
        </div>
    )
}

export default NavLarge