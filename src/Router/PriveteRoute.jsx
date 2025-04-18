import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PriveteRoute = ({children}) => {
    console.log(children)
    const {user, loading}=useContext(AuthContext)
    if(loading){
        return <h1>Loading...</h1>
    }
    if(!user){
        return <Navigate to="/login"/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PriveteRoute;