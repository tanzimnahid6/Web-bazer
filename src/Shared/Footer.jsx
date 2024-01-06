
import {FaConnectdevelop} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className=''>
            <footer className=" text-center bg-[#193e51] lg:text-left text-white ">
        
        <div className="mx-auto  max-w-6xl py-10 text-center md:text-left md:px-10 px-4 lg:px-0 ">
          <div className="grid-1 grid gap-8 grid-cols-1 md:grid-cols-3">
            <div className="">
              <h2 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
              <span className="text-4xl text-[#c3bd2e] flex"><FaConnectdevelop></FaConnectdevelop>WebBazaar</span> </h2>
                <p className='text-sm'>Welcome to our web development company website! We are passionate about creating exceptional websites and web applications that drive your digital success. Our team of expert developers and designers are dedicated to crafting stunning, user-friendly</p>
              
            </div>

            <div className="text-center">
              <h6 className="mb-4 text-xl font-bold uppercase md:justify-start text-center text-[#c3bd2e]">
                 Links
              </h6>
              <p className="mb-4">
                <a href="#!" className=" footer-text ">
                  <Link to="/">Home</Link>
                </a>
              </p>
              <p className="mb-4">
                <a href="#!" className=" footer-text">
                  <Link to="/webBazaar/addJobs">Add Jobs</Link>
                </a>
              </p>
              <p className="mb-4">
                <a href="" className=" footer-text">
                  <Link to='/webBazaar/myPostedJobs'>Posted Jobs</Link>
                </a>
              </p>
              <p>
                <a href="" className=" footer-text">
                  <Link to="/webBazaar/myBids">Bids</Link>
                </a>
              </p>
            </div>

            <div className="">
              <h6 className="mb-4 text-xl font-bold  uppercase md:justify-start text-[#c3bd2e]">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
                New York, NY 10012, US
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                healthyevents@gmail.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                + 0083855034
              </p>
            </div>
          </div>
          <p className='text-center mt-10'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
       
      </footer>
        </div>
        </div>
    );
};

export default Footer;