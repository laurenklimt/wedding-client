import './Photos.css';
import sunset from '../../assets/sunset.jpeg'
import falls from '../../assets/falls.jpeg'
import { useNavigate } from "react-router-dom";

function Photos() {
    const navigate = useNavigate()

    return (
        <div className='photos'>
            <div className='positions'>
                <img className='big' src={sunset} alt="sunset"/>
                <img className='small' src={falls} alt="view"/>
            </div>
            <div className='home-buttons'>
                <div className='rsvp-button'>
                    <button onClick={() => navigate("/event-details")}>EVENT DETAILS</button>
                </div>
                <div className='rsvp-button'>
                    <button onClick={() => navigate("/registry")}>REGISTRY</button>
                </div>
            </div>
        </div>
    );
}

export default Photos;