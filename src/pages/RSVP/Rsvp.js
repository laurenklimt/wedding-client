import { useState, useEffect } from "react"
import { useParams } from 'react-router';
import axios from 'axios';
import "./RSVP.css"
import Context from "../../components/Context";
import Guest from "./Guest";

function RSVP() {
    const params = useParams()

    const [party, setParty] = useState({})
    const [guests, setGuests] = useState([])
    const [subheading, setSubheading] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    useEffect( () => {
        const fetchParty = async() => {
            // await axios.get('/parties/' + params.id)
            await axios.get('https://lauren-benji-wedding.herokuapp.com/parties/' + params.id)
            .then(res => {
                setParty(res.data)
                setGuests(res.data.guests)
                if (res.data.responded) {
                    setSubheading("Your RSVP has been sent")
                } else {
                    setSubheading("Please RSVP below")
                }
            })
            .catch(err => console.log(err))
        }

        fetchParty()
        setError("hidden")
        setSuccess("hidden")
    },[params])

    const updateParty = async() => {
        await axios.put('/parties/' + params.id, party)
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

    return (
        <Context.Provider value={{guests, setGuests, party, setParty}}>
            <h1>RSVP</h1>
            <p>{subheading}</p>

            <form>
                {guests?.map( (item, index) => (
                    <Guest index={index} />
                ))}
                <p id="form-error" className={"form-error " + error}>Please RSVP for all guests.</p>
                <button type="submit" onClick={handleSubmit}>RSVP</button>
                <p id="form-success" className={"form-success " + success}>Thank you for submitting your RSVP.</p>
            </form>

        </Context.Provider>
    )
}

export default RSVP;
