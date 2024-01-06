import  { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Loading';
import Swal from 'sweetalert2';

const BidRequestTable = () => {
    const { user } = useContext(AuthContext);
    
  
  
    const { isPending, error, data,refetch } = useQuery({
      queryKey: ["bidJobs"],
      queryFn:  async() =>{
     return  await fetch(`https://server-psi-navy.vercel.app/usersBids`)
     .then(
      (res) => res.json(),)
     
      
    }
    });
  
    if (isPending) return <Loading></Loading>;


  
    if (error) return "An error has occurred: " + error.message;

    const bids=data.filter(bid=>bid.buyerEmail==user?.email)
    const handleAccept=(_id)=>{
      const status='In progress';
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
            refetch()
          });
        
    
}

    
    const handleReject=(_id)=>{
      const status='Rejected';
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
           refetch()
            
          });
        
    
}
    return (
        <div>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-[#146666] font-bold text-xl '>
        
        <th>Job-Title</th>
        <th>Email(who bid on projects)</th>
        <th>deadline</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {bids.map(bid=>(
        <tr key={bid._id}>
        <td>{bid.jobTile}</td>
        <td>{bid.userEmail}</td>
        <td>{bid.deadline}</td>
        <td>{bid.price}</td>
        <td className='font-semibold'>{bid.status}</td>
       
        {(bid.disable==='true' && bid.status==='pending') && <><td><button className='btn bg-[#146666] text-[#ffffff] hover:bg-[#6b8783]' onClick={()=>handleAccept(bid._id)}>Accept</button></td>
        <td><button className='btn bg-[#146666] text-[#ffffff] hover:bg-[#6b8783] ' onClick={()=>handleReject(bid._id)}>Reject</button></td></>  }
      </tr>

      ))}
      {/* row 1 */}
      
     
    </tbody>
  </table>
               </div> 
        </div>
    );
};

export default BidRequestTable;