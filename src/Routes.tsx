import React, { useEffect, useState } from 'react'
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom'
import Auth from './Auth';
import Dashboard from './view/Dashboard/Dashboard.index';
import Login from './view/Login/Login';



type ProtectedRouteProps = {
    // isAuthenticated: boolean;
    // authenticationPath: string;
    outlet: JSX.Element;
};

export default function MainRouter() {
    
    function ProtectedRoute({  outlet }: ProtectedRouteProps) {
        Auth.checkAuth();
        const isAuthenticated = Auth.isAuthenticated; 
        if (isAuthenticated) {
            return outlet;
        } else {
            return <Navigate to={'/login'} />;
        }
    };

    return (
        <>
            <Routes>
            <Route path='dashboard' element={<ProtectedRoute outlet={<Dashboard />} />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
        </>
    )
}