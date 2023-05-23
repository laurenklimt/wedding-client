import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from '../pages/Home/Home';
import RSVP from '../pages/RSVP/Rsvp';
import Events from '../pages/Events/Events';
import Details from '../pages/Details/Details';
import Registry from '../pages/Registry/Registry';
import Login from '../pages/Login/Login';
import ScrollToTop from './ScrollToTop';

function Router() {

    const ProtectedRoutes = () => {
        let auth = false
        if (localStorage.getItem("id")) {
            auth = true
        }
        return (auth ? <Outlet /> : <Navigate to="/login" />)
    }
      

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route element={<ProtectedRoutes />} >
                        <Route path="/rsvp" element={<RSVP />} />
                        <Route path="/events" element={<Events />} />
                        <Route path="/details" element={<Details />} />
                        <Route path="/registry" element={<Registry />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }

    return (
        <BrowserRoutes />
    )
}

export default Router;