import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('hidden')

    console.log(email)
    useEffect(()=>{
        localStorage.removeItem('id')
    }, []) 

    const validateEmail = async() => {
        // await axios.get('/party/email/' + email)
        await axios.get('https://lauren-benji-wedding.herokuapp.com/party/email/' + email.toLowerCase())
        .then((res) => {
            setError('hidden')
            localStorage.setItem('id', res.data._id)
            navigate("/")
        })
        .catch(() => setError(''))
    }

    function handleSubmit(e) {
        e.preventDefault()
        validateEmail()
    }

    return (
        <div className="login-page">
            <div className="login-container container">
                <p>PLEASE ENTER YOUR EMAIL</p>
                <form>
                    <input type="text" autocorrect="off" autocapitalize="off" id="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                    <button type="submit" onClick={handleSubmit} className="login-submit">
                        <i className="material-icons">arrow_forward_ios</i>
                    </button>
                </form>
                <p className={`error ${error}`}>Email not found. Please use the email address that your invitation was sent to.</p>
            </div>
        </div>
    )
}

export default Login