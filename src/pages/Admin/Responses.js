import { useState, useEffect } from "react"
import axios from 'axios';
import './Responses.css'

function Responses() {
    const [parties, setParties] = useState([])
    const [filter, setFilter] = useState('')
    const [owner, setOwner] = useState('')

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

    const Rows = (guests, date) => {
        const rows = guests.map(guest => {
            let rsvp = ''
            if (guest.rsvp === true) {
                rsvp = 'Attending'
            } else if (guest.rsvp === false) {
                rsvp = 'Not attending'
            }
            if(filter === '') {
                return (
                    <tr>
                        <td>{guest.firstName}</td>
                        <td>{guest.lastName}</td>
                        <td>{rsvp}</td>
                        <td>{guest.diet}</td>
                        <td>{date}</td>
                    </tr>
                )
            } else if(filter === 'attending') {
                if(guest.rsvp === true) {
                    return (
                        <tr>
                            <td>{guest.firstName}</td>
                            <td>{guest.lastName}</td>
                            <td>{rsvp}</td>
                            <td>{guest.diet}</td>
                            <td>{date}</td>
                        </tr>
                    )
                } else {
                    return null
                }
            } else if(filter === 'no-response') {
                if(guest.rsvp === undefined) {
                    return (
                        <tr>
                            <td>{guest.firstName}</td>
                            <td>{guest.lastName}</td>
                            <td>{rsvp}</td>
                            <td>{guest.diet}</td>
                            <td>{date}</td>
                        </tr>
                    )
                } else {
                    return null
                }
            } else {
                return null
            }
        })

        return rows
    }

    const Table = () => {
        const table = parties?.map((party) => {
            let date = party.updated.substr(0,10)
            let guests = party.guests
            if(owner === '') {
                return Rows(guests, date)
            } else {
                if(party.owner === owner) {
                    return Rows(guests, date)
                } else {
                    return null
                }
            }
        })
        return table
    }

    return(
        <div className="container">
            <div className="responses">
                <h1>Responses</h1>
                <div>
                    <button className={`${filter==='attending' ? "selected" : ""}`} onClick={() => setFilter('attending')}>Attending</button>
                    <button className={`${filter==='no-response' ? "selected" : ""}`} onClick={() => setFilter('no-response')}>Not responded</button>
                </div>
                <div>
                    <button className={`${owner===0 ? "selected" : ""}`} onClick={() => setOwner(0)}>L&B</button>
                    <button className={`${owner===1 ? "selected" : ""}`} onClick={() => setOwner(1)}>Klimts</button>
                    <button className={`${owner===2 ? "selected" : ""}`} onClick={() => setOwner(2)}>Prawers</button>
                </div>
                <div><button onClick={() => {setFilter(''); setOwner('')}}>Reset table</button></div>
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
                            <Table />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Responses