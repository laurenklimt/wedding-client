import './Registry.css'
import NavBar from "../../components/NavBar/NavBar";
import giantSteps from "../../assets/giant-steps.png"
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
                        <img src={peters} width="50%"/>
                        <img src={myer} width="50%"/>
                    </div>
                </div>
                <div className='section'>
                    <h3>WISHING WELL</h3>
                    <p></p>
                </div>
                <div className='section'>
                    <h3>TZEDAKA | DONATIONS</h3>
                    <p>We have each selected a charity that is important to us if you wish to make a donation in honour of our wedding.</p>
                    <div>
                        <img src={giantSteps} width="50%"/>
                        <img src={giantSteps} width="50%"/>
                    </div>                
                </div>
            </div>
        </>
    )
}

export default Registry;