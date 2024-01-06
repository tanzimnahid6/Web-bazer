
import  { useContext } from 'react';
import PropTypes from "prop-types";
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
   
    if(loading){
        return <> 
      <div className='min-h-[calc(100vh-52px)] flex  items-center justify-center '>
           <span className="loading loading-spinner loading-lg text-error"></span>
        </div></>
       
   
    }
    if(user){
        return children
    }
    return (
        <Navigate to='/login' state={location.pathname}></Navigate>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
  };


export default PrivateRoute;