// import { useParams } from 'react-router';
import './Invitation.css';
import Invitation from './Invitation';
import Photos from './Photos';
import HomeNav from './HomeNav';

function Home() {
    // const params = useParams()

    return (
        <div class="home">
            <Invitation />
            <Photos />
            <HomeNav />
        </div>
    );
}

export default Home;
