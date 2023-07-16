import './Details.css'
import { AufrufDetails } from '../Events/EventDetails';
import aufrufCal from '../../assets/cal/aufruf.ics'
import { useNavigate } from "react-router-dom";

function Details() {
    const navigate = useNavigate()

    const Aufruf = () => {
        return(
            <div className='section'>
                <h3>AUFRUF | CALL UP</h3>
                <p>5TH AUGUST 2023</p>
                <p>Benji and Lauren will both be called to the Torah at Shira Hadasha, 222 Balaclava Road, Caulfield, Melbourne. The Mincha (afternoon) service will start at 4:30pm, followed by kiddush and havdalah (bringing out Shabbat).</p>
                <div className="calendar">
                    Add to calendar <a href={AufrufDetails.calendar.google} target="_blank" rel="noreferrer">Google</a> | <a href={aufrufCal} download>iCal</a> | <a href={AufrufDetails.calendar.outlook} target="_blank" rel="noreferrer">Outlook</a>
                </div>
            </div>
        )
    }

    const Sydney = () => {
        return(
            <div className='section'>
                <h3>TRAVELLING TO SYDNEY</h3>
                <p>If you are travelling interstate or internationally, thank you! We are so excited and grateful to be celebrating with you.</p>
                <p>There are many accommodation options in the Bondi Junction and Sydney CBD if you wish to stay close to the Synagogue (Bondi Junction) or the reception venue (CBD).</p>
                <p>Sydney's <b>City2Surf</b> fun run will be taking place on 13 August. Please be aware that this will impact traffic and road closures throughout Sydney's Eastern Suburbs on the wedding day. Many suburbs will either be fully or partially blocked off by road closures for most of the day including Double Bay, Rose Bay, Vaucluse, Dover Heights and Bondi.</p>
                <p>Further details and road closure maps will be provided here once they are published on the NSW Government website.</p>
                {/* <p>You can find mroe information on the NSW Government website for further details and road closure maps.</p> */}
            </div>
        )
    }

    const Transport = () => {
        return(
            <div className='section'>
                <h3>GETTING TO THE VENUE</h3>
                <p>It is approximately a 20 minute drive between The Central Synagogue and The Ivy. We anticipate that traffic leaving Bondi after City2Surf will have dissipated by this time. Please note that the doors to the reception room will only open at 6pm and not before. There will be refreshments following the Chuppah so you are welcome to stay and enjoy until it is time to go.</p>
                <p>Discounted parking is available near The Ivy at <a href="https://goo.gl/maps/oRrd1BpDUUYXEo7f7" target="_blank" rel="noreferrer">109 Pitt Street</a> (closes at Midnight) and <a href="https://goo.gl/maps/72uyUUZDSKtmdpvX8" target="_blank" rel="noreferrer">No.1 Martin Place</a> (24 hours). A <a href="https://merivale.com/secureparking/" target="_blank" rel="noreferrer">10% Merivale discount</a> can be used on pre-booked parking at these Secure Parking sites.</p>
                <p>We recommend using rideshare and taxi services to travel between the venues with ease.</p>
            </div>
        )
    }

    const Registry = () => {
        return(
            <div className='section'>
                <h3>REGISTRY</h3>
                <p>Should you wish to help us celebrate with a gift we have created a gift registry which can be found <button onClick={() => navigate("/registry")}>here</button>.</p>
            </div>
        )
    }

    return (
        <>
            <div className="details">
                <Aufruf />
                <Sydney />
                <Transport />
                <Registry />
            </div>
        </>
    )
}

export default Details;