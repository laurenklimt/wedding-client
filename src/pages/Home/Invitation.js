import { useParams } from 'react-router';
import './Invitation.css';

function Invitation() {
    const params = useParams()

    return (
        <div className='invite'>
            <div className='container'>
                <div className='text'>
                    <p>Dear </p>
                    <p><i>The Klimt and Prawer families invite you to join us in celebrating the marriage of</i></p>
                    <br></br>
                    <h1><span className='first-letter'>L</span>AUREN<br></br>&<br></br><span className='first-letter'>B</span>ENJI</h1>
                    <br></br>
                    <p><i>which will take place on</i></p>
                    <p>SUNDAY 13TH OF AUGUST 2023</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Invitation;
