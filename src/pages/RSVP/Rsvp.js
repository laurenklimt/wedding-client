import { useState, useEffect } from "react"
import axios from 'axios';
import "./RSVP.css"
import Context from "../../components/Context";
import Guest from "./Guest";
import NavBar from "../../components/NavBar/NavBar";
import Loading from "../../components/Loading";

function RSVP() {
    const [id, setId] = useState('')
    const [party, setParty] = useState({})
    const [guests, setGuests] = useState([])
    const [subheading, setSubheading] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        setId(localStorage.getItem('id'))
    }, [])

    useEffect( () => {
        const fetchParty = async() => {
            // await axios.get('/party/id/' + id)
            await axios.get('https://lauren-benji-wedding.herokuapp.com/party/id/' + id)
            .then(res => {
                setParty(res.data)
                setGuests(res.data.guests)
                if (res.data.responded) {
                    setSubheading("Your RSVP has been sent")
                } else {
                    setSubheading("Please RSVP below by 13 July 2023")
                }
                setLoading(false)
            })
            .catch(err => console.log(err))
        }

        fetchParty()
        setError("hidden")
        setSuccess("hidden")
    },[id])

    const updateParty = async() => {
        // await axios.put('/party/id/' + id, party)
        await axios.put('https://lauren-benji-wedding.herokuapp.com/party/id/' + id, party)
        .then((res) => {
            setSubheading(res.data)
            setError("hidden")
            setSuccess("")
        })
        .catch(err => console.log(err))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for (const guest of guests) {
            if (guest.rsvp === undefined) {
                setError("")
                return
            }
        }
        updateParty()
    }

    if(loading) {
        return (
            <>
                <NavBar />
                <Loading />
            </>
        )
    } else {
        return (
            <>
                <NavBar />
                <Context.Provider value={{guests, setGuests, party, setParty}}>
                    <div className="container rsvp">
                        <h1>RSVP</h1>
                        <p>13 AUGUST 2023 -  <b>{subheading}</b></p>
                        <form>
                            {guests?.map( (item, index) => (
                                <Guest key={`guest-${index}`} index={index} />
                            ))}
                            <div className="form-bottom">
                                <p id="form-error" className={"form-error " + error}><b>PLEASE RSVP FOR ALL GUESTS.</b></p>
                                <button type="submit" onClick={handleSubmit}>RSVP</button>
                                <p id="form-success" className={"form-success " + success}><b>Thank you for submitting your RSVP.</b></p>
                            </div>
                        </form>
                    </div>
                </Context.Provider>
            </>
        )
    }
}

export default RSVP;
