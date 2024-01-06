// import axios from "axios";
// import { useContext } from "react";
// import { useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";

// const axiosSecure=axios.create({
//     baseURL:`https://server-psi-navy.vercel.app`,
//     withCredentials:true
// })
// const UseAxios = () => {
//     const {SignOutUser}=useContext(AuthContext)
//     const navigate=useNavigate()
//     useEffect(()=>{
//        axiosSecure.interceptors.response.use(
//         (res)=>{
//         return res;
//        },
//        (err)=>{
//         console.log(err.response);
//         SignOutUser()
//         .then(()=>{
//             navigate('/login')
//         })
//         .catch()
        
//  })
//     },[SignOutUser,navigate])
//     return axiosSecure
// };

// export default UseAxios;