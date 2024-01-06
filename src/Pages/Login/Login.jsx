import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2'
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext, useState } from 'react';
import '../../Styles/box.css'
import useDocumentTitle from '../../Title/useDocumentTitle';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer';

const Login = () =>  {
    useDocumentTitle('WebBazaar|Login')
    const {loginUser, googleSignIn}=useContext(AuthContext)
  
    const location=useLocation()
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const handleLogIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        setError('');
         loginUser(email,password)
         .then(()=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
               
                title: 'Successfully register by email and password ',
              
                
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset();
              navigate(location?.state ? location.state :'/')
        })
        .catch((error) => {
         const errormessage=error.message;
         (errormessage && setError('Give correct  email and password'));

});

          
        
      
    }
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
          .then((result) => {
            console.log(result.user);
            Swal.fire({
              position: "center",
              icon: "success",
    
              title: "Successfully register by Google",
    
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch(() => {
            Swal.fire({
              position: "center",
              icon: "error",
    
              title: "Cannot register by Google",
    
              showConfirmButton: false,
              timer: 1500,
            });
          });
      };
    // style={{backgroundImage:`url(${backgroundImg})`}}
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex justify-center" >
     
        <div className="hero-content text-center text-neutral-content w-full ">
          <div className="md:w-2/4 w-full ">
            <h2 className='text-[#193e51] my-10 font-bold md:text-4xl text-2xl'>Please Log in </h2>
          <div className=' rounded-3xl '>
          <div className="card w-full  shadow-2xl  box ">
          <form className="card-body text-xl " onSubmit={handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-[#193e51]">Email:</span>
          </label>
          <input type="email" placeholder="email" className="input login input-bordered  text-black bg-white  " required  name='email'/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl text-[#193e51]">Password:</span>
          </label>
          <input type="password" placeholder="password" className="input login input-bordered  text-black bg-white" name='password' required />
          
        </div>
        {error && <p className='text-red-500 '>{error}</p>}
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-[#193e51] to-[#146666]hover:bg-white hover:border hover:border-[#193e51] text-[#fcf540] font-bold ">Login</button>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold text-black">
                    OR
                  </p>
                </div>

                {/* <!-- Social login buttons --> */}

                <a
                  className="mb-3 flex md:w-1/2 w-11/12 mx-auto items-center text-[#fcf540] justify-center rounded bg-gradient-to-r from-[#193e51] to-[#146666]   px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  href="#!"
                  role="button"
                >
                  {/* <!-- Google --> */}
                  <FaGoogle></FaGoogle>
                  <span className="ml-3">
                    {" "}
                    <button onClick={handleGoogleSignIn}>
                      Continue with Google
                    </button>
                  </span>
                </a>
       <p className='text-black'>Do not have any account ? Go to <Link className='text-[#c3bd2e] font-bold underline' to='/register'>Register</Link></p>
      </form>
          </div>
          </div>
        
          </div>
        </div>
      </div>
      <Footer></Footer>
        </div>
    );
};

export default Login;