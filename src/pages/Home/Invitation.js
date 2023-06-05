import './Invitation.css';
import NamesJpg from '../../assets/names.jpg'

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
            <div className='text'>
                <div className='text-container'>
                    <p><b>DEAR <Names/>,</b></p>
                    <p>THE KLIMT AND PRAWER FAMILIES ARE THRILLED TO INVITE YOU TO CELEBRATE THE MARRIAGE OF</p>
                    <div className='names'>
                        <img src={NamesJpg} width="100%"/>
                        <h3 className='hebrew'>חנה וישראל בנימין</h3>
                    </div>
                    <p>SUNDAY, 13TH AUGUST 2023<br/><span className='hebrew'>כ"ו אב תשפ"ג</span></p>
                    <p><b>THE CHUPPAH</b><br/>THE CENTRAL SYNAGOGUE<br/>15 BON ACCORD AVENUE, BONDI JUNCTION, SYDNEY<br/>3.15 PM SHARP</p>
                    <p><b>THE RECEPTION</b><br/>IVY BALLROOM<br/>LEVEL 1/320 GEORGE STREET, SYDNEY<br/>6:00 PM<br/>DRESS LOUNGE SUIT</p>
                </div>
            </div>
        </div>
    );
}

export default Invitation;
