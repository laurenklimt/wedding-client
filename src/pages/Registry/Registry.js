import './Registry.css'
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

function Registry() {
    const navigate = useNavigate()

    return (
        <>
            <NavBar />
            <div className="container registry">
                <h1>REGISTRY</h1>
                <div className='section'>
                    <p>We are so excited to be celebrating with you at our wedding. Should you wish to help us celebrate with a gift we have created a gift registry of things we would love for our home and a wishing well. We are already so grateful.</p>
                    <p><a href="https://www.petersofkensington.com.au/gift-registry/giftregistrysearch/giftregistrydetails/?Id=b5059e38-5cd7-45fe-8289-b1f4d3968cb9" target="_blank" rel="noreferrer">Peter's of Kensington (registry no. 1755200)<i className="material-icons">open_in_new</i></a></p>
                    <p><a href="https://thesilverco.com/wedding-registries/" target="_blank" rel="noreferrer">Antique Silver Co. (Judaica)<i className="material-icons">open_in_new</i></a></p>
                    <p><a href="https://www.thehintregistry.com.au/browse/laurenandbenji" target="_blank" rel="noreferrer">Wishing Well<i className="material-icons">open_in_new</i></a></p>
                    <p>We have also put together a list at <b>By Kim</b> in Rose Bay. To purchase a gift from this list please visit in store or call on <a href="tel:0293713377">(02) 9371 3377</a></p>
                    <div className='event-button'>
                        <button onClick={() => navigate("/event-details")}>EVENT DETAILS</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registry;