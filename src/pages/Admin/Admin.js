import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Admin() {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('hidden')

    useEffect(()=>{
        localStorage.removeItem('id')
    }, []) 

    const validatePassword = async() => {
        if(password === 'laurenbenjiadmin') {
            setError('hidden')
            localStorage.setItem('admin', true)
            navigate("/responses")
        } else {
            setError('')
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        validatePassword()
    }

    return(
        <div className="login-page">
            <div className="login-container container">
                <p>PLEASE ENTER THE PASSWORD</p>
                <form>
                    <input type="text" autocorrect="off" autocapitalize="off" id="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                    <button type="submit" onClick={handleSubmit} className="login-submit">
                        <i className="material-icons">arrow_forward_ios</i>
                    </button>
                </form>
                <p className={`error ${error}`}>Incorrect password.</p>
            </div>
        </div>
    )
}

export default Admin