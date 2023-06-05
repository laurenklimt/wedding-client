import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Home.css';
import Invitation from './Invitation';
import Photos from "./Photos";
import NavBar from "../../components/NavBar/NavBar";
import Flowers from '../../assets/flowers.jpeg'

function Home() {
    const navigate = useNavigate()
    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const [id, setId] = useState('')
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
                setGuests(res.data.guests)
                setLoading(false)
            })
            .catch(err => console.log(err))
        }
        fetchParty()
    },[id])

    if(loading) {
        return(
            null
        )
    } else {
        return (
            <>
                <NavBar />
                <div className="container">
                    <div className="home">
                        <Photos />
                        <Invitation guests={guests}/>
                    </div>
                </div>
                <div class="flowers"><img src={Flowers} width="100%" alt="flowers"/></div>
            </>
        )
    }
}

export default Home;
