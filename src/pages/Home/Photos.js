import './Photos.css';
import sunset from '../../assets/sunset.jpeg'
import falls from '../../assets/falls.jpeg'

function Photos() {

    return (
        <div className='photos'>
            <div className='positions'>
                <img className='big' src={sunset} alt="sunset"/>
                <img className='small' src={falls} alt="view"/>
            </div>
        </div>
    );
}

export default Photos;