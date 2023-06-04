import './Details.css'
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function Details() {
    const City2Surf = () => {
        return(
            <div className='section'>
                <h3>IMPORTANT - City2Surf</h3>
                <p>Sydney's <b>City2Surf</b> fun run will be taking place on 13 August. Please be aware that this will impact traffic and road closures throughout Sydney's Eastern Suburbs on the wedding day.</p>
                <p>If you are travelling in to Sydney for the weekend, please keep this in mind when booking flights and organising accommodation. Many suburbs will either be fully or partially blocked off by road closures including Double Bay, Rose Bay, Vaucluse, Dover Heights and Bondi.</p>
                <p>Key roads around the Hyde Park start area in the Sydney CBD start closing from as early as 3.30am with major roads closed along the course between the city and Bondi Beach from 6am. Roads begin progressively reopening from 11.30am in the city, 12pm at Edgecliff, 1pm at Rose Bay, 2pm at Vaucluse & Dover Heights and 4pm at Bondi Beach.</p>
                <p>Further details and road closure maps will be provided here once they are published on the NSW Government website.</p>
                {/* <p>Please see the NSW Government website for further details and road closure maps.</p> */}
                <p>We also ask that you take heavy traffic into account when planning your arrival at The Central Synagogue in Bondi Junction as the Bedekin will begin at 3:15pm sharp.</p>
            </div>
        )
    }

    const Sydney = () => {
        return(
            <div className='section'>
                <h3>TRAVELLING TO SYDNEY</h3>
                <p>If you are travelling interstate or internationally, thank you! We are so excited and grateful to be celebrating with you.</p>
                <p>There are many accommodation options in the Bondi Junction and Sydney CBD if you wish to stay close to the Synagogue (Bondi Junction) or the reception venue (CBD).</p>
                <p>Please keep in mind that the wedding day falls on <b>City2Surf</b> so many suburbs will either be fully or partially blocked off by road closures for most of the day including Double Bay, Rose Bay, Vaucluse, Dover Heights and Bondi.</p>
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
                <p>Discounted parking is available near The Ivy at <a href="https://goo.gl/maps/oRrd1BpDUUYXEo7f7" target="_blank" rel="noreferrer">109 Pitt Street<i className="material-icons">open_in_new</i></a> (closes at Midnight) and <a href="https://goo.gl/maps/72uyUUZDSKtmdpvX8" target="_blank" rel="noreferrer">No.1 Martin Place<i className="material-icons">open_in_new</i></a> (24 hours). A <a href="https://merivale.com/secureparking/" target="_blank" rel="noreferrer">10% Merivale discount<i className="material-icons">open_in_new</i></a> can be used on pre-booked parking at these Secure Parking sites.</p>
                <p>We reccomend using rideshare and taxi services to travel between the venue with ease.</p>
            </div>
        )
    }

    return (
        <>
            <NavBar />
            <div className="container details">
                <h1>EVENT DETAILS</h1>
                <div className="detail-sections">
                    <City2Surf />
                    <Sydney />
                    <Transport />
                </div>
                <div className="bottom-links">
                    <Link to="/rsvp"><b>RSVP</b> for the Chuppah and Reception<i className="material-icons">arrow_forward_ios</i></Link>
                    <Link to="/events">See all of the <b>events</b><i className="material-icons">arrow_forward_ios</i></Link>
                </div>
            </div>
        </>
    )
}

export default Details;