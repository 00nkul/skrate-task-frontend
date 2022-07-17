import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './view/Dashboard/Dashboard.index';
import Login from './view/Login/Login';

export default function MainRouter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const PrivateRouter = () => {
        return isLoggedIn ? <Dashboard /> : <Navigate to='/login' />
    }
    useEffect(() => {
        if (localStorage.getItem('uid')) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path='/dashboard' element={<PrivateRouter />}  />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </>
    )
}