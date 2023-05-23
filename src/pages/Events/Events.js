// import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import './Events.css'
import EventDetails from './EventDetails'
import NavBar from "../../components/NavBar/NavBar";
import engagement1 from '../../assets/engagement-1.JPG'
import engagement2 from '../../assets/engagement-2.jpeg'
import engagement3 from '../../assets/engagement-3.JPG'
import aufrauf from '../../assets/cal/aufrauf.ics'
import chuppah from '../../assets/cal/chuppah.ics'
import reception from '../../assets/cal/reception.ics'

function Events() {
    const photos = [engagement1, engagement2, engagement3]
    const cal = [aufrauf, chuppah, reception]

    return (
        <>
            <NavBar />
            <div className="container events">
                <h1>EVENTS</h1>
                <div className="events-group">
                    { EventDetails?.map((ev, i) => {
                        return (
                            <div className='event'>
                                <div className='detail top'>
                                    <div className='photo'>
                                        <img src={photos[i]} width="100" />
                                    </div>
                                    <div className='title'>
                                        <h2>{ev.day} {ev.month.slice(0, 3).toUpperCase()}</h2>
                                        <p>{ev.event.toUpperCase()}</p>
                                    </div>
                                </div>
                                
                                <p>{ev.description}</p>
                                <div className='detail'>
                                    <p className='detail-1'>DATE:</p>
                                    <p>{ev.day} {ev.month} {ev.year}</p>
                                </div>
                                <div className='detail'>
                                    <p className='detail-1'>TIME:</p>
                                    <p>{ev.time}</p>
                                </div>
                                <div className='detail'>
                                    <p className='detail-1'>VENUE:</p>
                                    <div>{ev.location.map((line) => (<p className='address'>{line}</p>))}</div>
                                </div>
                                <div className='detail'>
                                    <p className='detail-1'>DRESS:</p>
                                    <p>{ev.dress}</p>
                                </div>
                                <div>
                                    Add to calendar <a href={ev.calendar.google} target="_blank">Google</a> | <a href={cal[i]} download>iCal</a> | <a href={ev.calendar.outlook} target="_blank">Outlook</a>
                                </div>
                            </div>
                        )
                    }) }
                </div>
                <div className="bottom-links">
                    <Link to="/details"><b>Details</b> about travel, venues and more<i className="material-icons">arrow_forward_ios</i></Link>
                    <Link to="/rsvp"><b>RSVP</b> for the Chuppah and Reception<i className="material-icons">arrow_forward_ios</i></Link>
                </div>
            </div>
        </>
    )
}

export default Events;