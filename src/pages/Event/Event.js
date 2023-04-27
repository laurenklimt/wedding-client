import { useParams } from 'react-router';

function Event() {
    const params = useParams()

    return (
        <>
            <p>Event details</p>
        </>
    )
}

export default Event;