import { useState } from "react"
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('hidden')

    const validateEmail = async() => {
        await axios.get('https://lauren-benji-wedding.herokuapp.com/party/' + email)
        .then((res) => {
            setError('hidden')
            window.location = "/"+res.data._id
        })
        .catch(() => setError(''))
    }

    function handleSubmit(e) {
        e.preventDefault()
        validateEmail()
    }

    return (
        <div>
            <p>Plese enter your email</p>
            <p>Use the email address that your invitation was sent to.</p>
            <form>
                <input type="text" id="email" value={email} onChange={ (e) => setEmail(e.target.value) } />
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <p className={error}>Email not found</p>
            </form>
        </div>
    )
}

export default Login