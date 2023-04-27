import './Photos.css';
import photo from '../../assets/sunset.jpeg'

function Photos() {

    return (
        <div className='photos'>
            <div className='container'>
                <div className='gallery'>
                    <img src={photo} height='200'/>
                </div>
            </div>
        </div>
    );
}

export default Photos;