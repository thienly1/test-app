import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation, Navigate, useParams} from 'react-router-dom';
import ShowData from './ShowData';


const AppRouter = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Welcome/>}/>
                    <Route path='welcome' element={<Welcome/>}/>
                    <Route path='home' element={<Home/>}/>
                    <Route path='data/:id' element={<ShowData/>}/>
                    <Route path={'error'} element={<ErrorPage/>}/>
                    <Route path={'*'} element={<Navigate to={'/error'}
                    state={{message:'Path Not Available'}}
                    />}/>
                </Routes>
            </Router>           
        </div>
    );
};

const Header = () => {
    return(
    <>
    <ul className='nav nav-pills nav-fill bg-dark text-white'>
        <li className='nav-item'>
            <Link className='nav-link' to='/'>Welcome</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to='/home'>Home</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to='/register'>Register</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to='/about'>About Us</Link>
        </li>
    </ul>
    </>
    )
}

const Welcome = () => <h3>Hello and Welcome to this page</h3>

const Home = () =>{

    //Where do we want to go? Redirect or back?
    const navigate =useNavigate();

    //where we are
    const location = useLocation();

    //console.log("LOCATION", location)

    return (
        <>
        <h2>In Home Page</h2>
        <br/>
        <button className='btn btn-outline-danger' onClick={() =>navigate(-1)}>Back</button>
        <button className='btn btn-outline-danger' onClick={() =>navigate('/about')}>Redirect</button>
        </>
    )
}
 const ErrorPage = () =>{

    const location = useLocation();
    console.log("Location in errorPage: ", location);
    return (
        <>
        Error : <b>{location.state.message}</b>
        </>
    )
 }
 

export default AppRouter;