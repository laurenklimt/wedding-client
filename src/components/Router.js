import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from '../pages/Home/Home';
import RSVP from '../pages/RSVP/Rsvp';
import Events from '../pages/Events/Events';
import Registry from '../pages/Registry/Registry';
import Login from '../pages/Login/Login';
import ScrollToTop from './ScrollToTop';
import Admin from '../pages/Admin/Admin';
import Responses from '../pages/Admin/Responses';

function Router() {

    const ProtectedRoutes = () => {
        let auth = false
        if (localStorage.getItem("id")) {
            auth = true
        }
        return (auth ? <Outlet /> : <Navigate to="/login" />)
    }

    const AdminRoutes = () => {
        let auth = false
        if (localStorage.getItem("admin")) {
            auth = true
        }
        return (auth ? <Outlet /> : <Navigate to="/admin" />)
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
                        <Route path="/event-details" element={<Events />} />
                        <Route path="/registry" element={<Registry />} />
                    </Route>
                    <Route path="/admin" element={<Admin />} />
                    <Route element={<AdminRoutes />} >
                        <Route path="/responses" element={<Responses />} />
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