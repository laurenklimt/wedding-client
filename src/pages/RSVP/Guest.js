import { useContext } from "react"
import Context from "../../components/Context"

function Guest(props) {
    const {guests, setGuests, party, setParty} = useContext(Context)
    const guestIndex = props.index
    const dietOptions = ["Vegetarian", "Vegan", "Pescetarian", "No Gluten", "No Dairy"]

    const dietOtherDefault = () => {
        const diet = guests[guestIndex].diet
        let dietOther = ''
        if(diet.length !== 0) {
            const dietOtherArray = diet.filter((opt) => {return !dietOptions.includes(opt)})
            if(dietOtherArray.length !== 0){
                dietOther = dietOtherArray[0]
            }
        }
        return dietOther
    }

    const DietChecklist = () => {
        return (
            dietOptions.map((option, index) => (
                <>
                    <input type="checkbox" value={option} checked={guests[guestIndex].diet.includes(option)} onChange={ (e) => handleChangeDiet(e) } /><span>{option}</span>
                </>
            ))
        )
    }

    const handleChangeDiet = (e) => {
        const index = guests[guestIndex].diet.indexOf(e.target.value)
        const oldDiet = guests[guestIndex].diet
        let newDiet = []
        if (index === -1) {
            newDiet = [...oldDiet, e.target.value]
        } else {
            newDiet = oldDiet.filter((n) => {return n !== e.target.value})
        }
        const guestUpdate = guests.map((g, i) => {
            if(i === guestIndex) {
                return(
                    {
                        ...g,
                        diet: newDiet
                    }
                )
            } else {
                return g
            }
        })
        setGuests(guestUpdate)
        setParty({
            ...party,
            guests: guestUpdate
        })
    }

    const handleChangeDietOther = (e) => {
        const diet = guests[guestIndex].diet
        let newDiet = []
        if (diet.length !== 0) {
            newDiet = diet.filter((opt) => {
                return dietOptions.includes(opt)
            })
        }
        if (e.target.value !== '') {
            newDiet.push(e.target.value)
        }
        const guestUpdate = guests.map((g, i) => {
            if(i === guestIndex) {
                return(
                    {
                        ...g,
                        diet: newDiet
                    }
                )
            } else {
                return g
            }
        })
        setGuests(guestUpdate)
        setParty({
            ...party,
            guests: guestUpdate
        })
    }

    function handleChangeResponse(response) {
        const guestUpdate = guests.map((g,i) => {
            if (i === guestIndex) {
                return(
                    {
                        ...g,
                        rsvp: response
                    }
                )
            } else {
                return g
            }
        })
        setGuests(guestUpdate)
        setParty({
            ...party,
            guests: guestUpdate
        })
    }

    return(
        <div>
            <h3>{guests[guestIndex].firstName} {guests[guestIndex].lastName}</h3>

            <label htlmfor="yes">Accept</label>
            <input type="radio" id="accept" name={"attendance-" + guestIndex} value="true" checked={guests[guestIndex].rsvp === true} onChange={ (e) => handleChangeResponse(true) } />
            <label htlmfor="no">Decline</label>
            <input type="radio" id="decline" name={"attendance-" + guestIndex} value="false" checked={guests[guestIndex].rsvp === false} onChange={ (e) => handleChangeResponse(false) } />

            <p>Please specify any dietary requirements:</p>
            <DietChecklist />
            <input type="text" placeholder="Other, please specify..." defaultValue={dietOtherDefault()} onChange={ (e) => handleChangeDietOther(e) }/>
        </div>
    )
}

export default Guest;