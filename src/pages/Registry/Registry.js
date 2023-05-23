import './Registry.css'
import NavBar from "../../components/NavBar/NavBar";
import peters from "../../assets/peters.png"
import myer from "../../assets/myer.png"

function Registry() {

    return (
        <>
            <NavBar />
            <div className="container registry">
                <h1>REGISTRY</h1>
                <div className='section'>
                    <h3>GIFTS</h3>
                    <p></p>
                    <div>
                        <img src={peters} width="50%" alt="Peter's of Kensington"/>
                        <img src={myer} width="50%" alt="Myers"/>
                    </div>
                </div>
                <div className='section'>
                    <h3>WISHING WELL</h3>
                    <p></p>
                </div>
            </div>
        </>
    )
}

export default Registry;