import { Link } from "react-router-dom";
import falls from '../../assets/falls.jpeg'
import shnat from '../../assets/shnat.jpeg'
import float from '../../assets/float.jpeg'
import './HomeNav.css';

function HomeNav(props) {

    return (
        <div className='home-nav'>
            <div className='home-nav-container'>
                <div className="col top">
                    <div className="nav-component">
                        <Link to="/rsvp">
                            <div className="button-text">
                                <div className="main-text"><b>R S V P</b></div>
                                <div className="sub-text">PLEASE RSVP BY 13 JULY 2023</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col link">
                    <div className="nav-component">
                        <Link to="/events">
                            <div className="button-text">
                                <div className="main-text">EVENTS</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col link border">
                    <div className="nav-component">
                        <Link to="/details">
                            <div className="button-text">
                                <div className="main-text">DETAILS</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col link">
                    <div className="nav-component">
                        <Link to="/registry">
                            <div className="button-text">
                                <div className="main-text">REGISTRY</div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col photo first">
                    <div className="nav-component">
                        <div className="photo-container">
                            <img className="photo" src={shnat}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeNav;