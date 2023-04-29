import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home';
import RSVP from '../pages/RSVP/Rsvp';
import Event from '../pages/Event/Event';
import Registry from '../pages/Registry/Registry';
import Login from '../pages/Login/Login';

function Router() {

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element ={<Login />} />
                    <Route path="/:id" element ={<Home />} />
                    <Route path="/:id/rsvp" element ={<RSVP />} />
                    <Route path="/:id/event" element ={<Event />} />
                    <Route path="/:id/registry" element ={<Registry />} />
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
}

export default Router;