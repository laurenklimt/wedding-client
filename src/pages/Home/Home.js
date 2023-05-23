import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Home.css';
import Invitation from './Invitation';
import HomeNav from './HomeNav';

function Home() {
    const navigate = useNavigate()
    const location = useLocation()

    const [id, setId] = useState('')
    // const [party, setParty] = useState({})
    const [guests, setGuests] = useState([])

    useEffect(() => {
        const invalidId = () => {
            navigate("/login")
        }

        const validId = (vid) => {
            setId(vid)
            localStorage.setItem('id', vid)
        }

        const partyExists = async(testId) => {
            // await axios.get('/party_exists/' + testId)
            await axios.get('https://lauren-benji-wedding.herokuapp.com/party_exists/' + testId)
            .then(res => {
                if(res.data) {
                    validId(testId)
                } else {
                    invalidId()
                }
            })
            .catch(err => console.log(err))
        }
        
        const queryParams = new URLSearchParams(location.search)
        if(queryParams.has('id')) {
            const testId =  queryParams.get('id')
            partyExists(testId)
        } else {
            if (localStorage.getItem("id")) {
                validId(localStorage.getItem('id'))
            } else {
                invalidId()
            }
        }
    }, [location, navigate])

    useEffect( () => {
        const fetchParty = async() => {
            // await axios.get('/party/id/' + id)
            await axios.get('https://lauren-benji-wedding.herokuapp.com/party/id/' + id)
            .then(res => {
                // setParty(res.data)
                setGuests(res.data.guests)
            })
            .catch(err => console.log(err))
        }
        fetchParty()
    },[id])

    return (
        <div className="home">
            <Invitation guests={guests}/>
            <HomeNav />
        </div>
    );
}

export default Home;
