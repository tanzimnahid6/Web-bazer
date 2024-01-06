import {  useLoaderData } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";


import BidOnProject from "./BidOnProject";

const JobDetails = () => {
    
  const jobs = useLoaderData();
  

  const {
    
    jobTile,
    deadline,
    
    maximum,
    minimum,
    des,
    img,
    
  } = jobs;
  
  return (
    <div>
      <NavBar></NavBar>
      <div className="flex md:flex-row flex-col max-w-6xl mx-auto p-4 md:p-0 gap-12 my-20 justify-center items-center">
      <div className="md:w-6/12  w-full">
        <div className="h-full">
          <div className="card bg-base-100 shadow-xl border border-[#c3bd2e]">
            <figure className="p-4  border   ">
              <img
                src={img}
                alt="Shoes"
                className="rounded-xl border  "
              />
            </figure>
            <div className="card-body items-center text-center  border flex flex-col  space-y-3">
            <h2 className=" text-2xl">Job-title:<span className="font-bold text-[#146666]">{jobTile}</span></h2>
      <p className="text-center ">{des}</p>
    <p><span className="text-[#146666] font-bold text-justify">Deadline:</span>{deadline}</p>
     <p><span className="text-[#146666] font-bold text-justify">Price:</span>{maximum}$-{minimum}$</p>
              <div className="card-actions flex-grow"></div>
            </div>
          </div>
        </div>

       
      </div>
       {/* form for biding  */}
      <div className="w-8/10">
      <h1 className="headings text-center my-10 text-3xl md:text-5xl">
          Please your bid
        </h1>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />

       <BidOnProject></BidOnProject>
      </div>
      </div>
      
      <Footer></Footer>
    </div>
  );
};

export default JobDetails;
