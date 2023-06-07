import './Events.css'
import { EventDetails } from './EventDetails'
import NavBar from "../../components/NavBar/NavBar";
import engagement1 from '../../assets/engagement-1.JPG'
import engagement2 from '../../assets/engagement-2.jpeg'
import chuppah from '../../assets/cal/chuppah.ics'
import reception from '../../assets/cal/reception.ics'
import Details from "../Details/Details";

function Events() {
    const photos = [engagement1, engagement2]
    const cal = [chuppah, reception]

    return (
        <>
            <NavBar />
            <div className="container events">
                <h1>EVENT DETAILS</h1>
                <div className="events-group">
                    { EventDetails?.map((ev, i) => {
                        return (
                            <div className='event'>
                                <div className='detail top'>
                                    <div className='photo'>
                                        <img src={photos[i]} width="100" alt="Lauren and Benji's engagement" />
                                    </div>
                                    <div className='title'>
                                        {/* <h2>{ev.day} {ev.month.slice(0, 3).toUpperCase()}</h2> */}
                                        <h2>{ev.event.toUpperCase()}</h2>
                                        <p>{ev.subtext}</p>
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
                                <div className="calendar">
                                    Add to calendar <a href={ev.calendar.google} target="_blank" rel="noreferrer">Google</a> | <a href={cal[i]} download>iCal</a> | <a href={ev.calendar.outlook} target="_blank" rel="noreferrer">Outlook</a>
                                </div>
                            </div>
                        )
                    }) }
                </div>
                <Details/>
            </div>
        </>
    )
}

export default Events;