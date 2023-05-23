import Photos from './Photos';
import './Invitation.css';

function Invitation(props) {
    const Names = () => {
        const guestList = props.guests
        const list = guestList.map((guest, index) => {
            if (index === 0) {
                return guest.firstName.toUpperCase()
            } else if(index === (guestList.length - 1)) {
                return (" AND " + guest.firstName.toUpperCase())
            } else {
                return (", " + guest.firstName.toUpperCase())
            }
        })
        return (list)
    }

    return (
        <div className='invite'>
            <div className='invite-container'>
                <Photos />
                <div className='text'>
                    <div className='text-container'>
                        <p>DEAR <Names/>,</p>
                        <p>THE KLIMT AND PRAWER FAMILIES ARE THRILLED TO INVITE YOU TO CELEBRATE THE MARRIAGE OF</p>
                        <div className='names'>
                            <h1><span className='first-letter'>L</span>auren <span className='and'> & </span> <span className='first-letter'>B</span>enji</h1>
                            <h2 className='hebrew'>חנה וישראל בנימין</h2>
                        </div>
                        <br />
                        <p>SUNDAY THE THIRTEENTH OF AUGUST<br />TWO THOUSAND AND TWENTY-THREE</p>
                        <p className='hebrew'>כ"ו אב תשפ"ג</p>
                        <br />
                        <p>PLEASE KINDLY RSVP BY <b>13.7.2023</b></p>
                    </div>
                </div>
                <span className='scroll-down'>
                    <i className="material-icons">expand_more</i>
                </span>
            </div>
        </div>
    );
}

export default Invitation;
