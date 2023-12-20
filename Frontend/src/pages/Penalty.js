import React, { useState, useEffect } from 'react';
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';
import { useUserContext } from '../contexts/UserContext';
import Navbar from '../components/Navbar';
import UserAttendanceStat from '../components/UserAttendanceStat'

const Penalty = () => {
    
    const { userInfo } = useUserContext();

    return (
        <>
        
        <div className="home-container" style={{ display: 'flex', width: '100%' }}>
        <Navbar />
        <div className="content-container mt-5 ms-5" style={{ flexGrow: 1, margin: '5rem' }}>
                <div className="main-content">
                    <h1>{userInfo.user_name} 님의 벌금정보</h1>
                </div>
                <div>
                    <UserAttendanceStat/>
                </div>
            </div>
            
        </div>
        </>
    );
};

export default Penalty;