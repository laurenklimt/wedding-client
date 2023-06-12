import { useState, useEffect } from "react"
import axios from 'axios';
import './Responses.css'

function Responses() {
    const [parties, setParties] = useState([])

    useEffect( () => {
        const fetchParties = async() => {
            // await axios.get('/parties')
            await axios.get('https://lauren-benji-wedding.herokuapp.com/parties')
            .then(res => {
                setParties(res.data)
            })
            .catch(err => console.log(err))
        }

        fetchParties()
    },[])

    const Rows = () => {
        const rows = parties?.map((party) => {
            console.log(party)
            let date = party.updated.substr(0,10)
            return (
                party.guests.map(guest => {
                    let rsvp = ''
                    if (guest.rsvp === true) {
                        rsvp = 'Attending'
                    } else if (guest.rsvp === false) {
                        rsvp = 'Not attending'
                    }
                    return (
                        <tr>
                            <td>{guest.firstName}</td>
                            <td>{guest.lastName}</td>
                            <td>{rsvp}</td>
                            <td>{guest.diet}</td>
                            <td>{date}</td>
                        </tr>
                    )
                })
            )
        })
        return rows
    }

    return(
        <div className="container">
            <div className="responses">
                <h1>Responses</h1>
                <div></div>
                <div className='response-table'>
                    <table width='100%'>
                        <thead>
                            <tr>
                                <th align='left'>First name</th>
                                <th align='left'>Last name</th>
                                <th align='left'>Response</th>
                                <th align='left'>Diet</th>
                                <th align='left'>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Rows />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Responses