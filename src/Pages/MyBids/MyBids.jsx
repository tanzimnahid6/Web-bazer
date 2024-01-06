import { useContext, useEffect, useState} from "react";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";
import { AuthContext } from "../../Providers/AuthProvider";

import Footer from "../../Shared/Footer";

import Swal from "sweetalert2";

const MyBids = () => {
  useDocumentTitle("WebBazaar|MyBids");
  const { user,count,setCount } = useContext(AuthContext);
 
  const [data,setData]=useState([])
  
  useEffect(()=>{
    const getData= async()=>{
     const res=await fetch("https://server-psi-navy.vercel.app/usersBids")
     const result=await res.json();
     setData(result)
    }
     getData()
 },[count])


  const bids=data.filter(bid=>bid.userEmail==user?.email)
  

const handleStatus=(_id)=>{
  
    const status='Complete';
    const disable='false' ;
    const newStatusDisable={status,disable}
    
    fetch(`https://server-psi-navy.vercel.app/usersBids/${_id}`,{
      method:'PATCH',
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStatusDisable),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.modifiedCount>0){
              Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'A Product is successfully added',
                  showConfirmButton: false,
                  timer: 1500
                })
          }
          setCount(count=>count+1)
        });
}

  

  return (
    <div className="">
      <NavBar></NavBar>
     
 <div className="max-w-6xl mx-auto p-4 md:p-0  ">
 <h1 className='headings text-center my-10 text-3xl md:text-5xl'>My bids </h1>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />
 <div className="overflow-x-auto my-16">
  
  <table className="table ">
    {/* head */}
    <thead className="">
      <tr className="text-[#146666] font-bold text-xl  ">
        
        <th>Job-Title</th>
        <th>Buyer Email</th>
        <th>deadline</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className="">
      {bids.map(bid=>(
        <tr key={bid._id} className="">
        <td>{bid.jobTile}</td>
        <td>{bid.buyerEmail}</td>
        <td>{bid.deadline}</td>
        <td className="font-semibold">{bid.status}</td>
        {/* <td><button className=''>Complete</button></td> */}
        {
         bid.status=='In progress'  ? <td><button className='btn bg-[#146666] text-[#ffffff] hover:bg-[#6b8783]' onClick={()=>handleStatus(bid._id)}>Complete</button></td> : <td></td>
        }
      </tr>

      ))}
      {/* row 1 */}
      
     
    </tbody>
  </table>
</div>
 </div>
 <Footer></Footer>
    </div>
  );
};

export default MyBids;
