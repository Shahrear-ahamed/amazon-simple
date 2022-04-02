import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const goHome = () => navigate('/')
    return (
        <div>
            <h4>Page Not Found</h4>
            <h1>404</h1>
            <h3>Are you lookin for <button onClick={goHome}>Home</button></h3>
        </div>
    );
};

export default Error;