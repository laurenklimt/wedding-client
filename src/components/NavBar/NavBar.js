import './NavBar.css'
import NavSmall from "./NavSmall";
import NavLarge from "./NavLarge";

function NavBar() {

    return (
        <>
            <div className="nav-bar-large">
                <NavLarge />
            </div>
            <div className="nav-bar-small">
                <NavSmall />
            </div>
        </>
    )
}

export default NavBar