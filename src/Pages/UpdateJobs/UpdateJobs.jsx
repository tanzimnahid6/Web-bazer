import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";


const UpdateJobs = () => {
    const job=useLoaderData();
    const {email,jobTile,deadline,category,maximum,minimum,des,img,_id}=job
    const handleUpdate=e=>{
        e.preventDefault();
        const email=e.target.email.value ;
        const jobTile=e.target.jobTile.value ;
        const img=e.target.img.value;
        const deadline=e.target.deadline.value ;
        const category=e.target.category.value ;
        const minimum=e.target.minimum.value ;
        const maximum=e.target.maximum.value ;
        const des=e.target.des.value ;
        const updateJob={email,jobTile,img,deadline,category,minimum,maximum,des}
        fetch(`https://server-psi-navy.vercel.app/addJobs/${_id}`,{
          method:'PUT',
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateJob),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.modifiedCount>0){
                  Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'A job is successfully added',
                      showConfirmButton: false,
                      timer: 1500
                    })
              }
              
            });
            
        
      
      
  
        
        


    }
    return (
        <div>
          <NavBar></NavBar>
             <div className='max-w-6xl mx-auto md:p-0 p-4 my-20'>
     <h1 className='headings text-center my-10 text-3xl md:text-5xl'> Update your jobs</h1>
     <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />

     {/* form  */}
     <div>
        <form onSubmit={handleUpdate}>
            {/* email and job title */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
          <label htmlFor="email" className='text-[#194a63] font-bold'>Email:</label><input
      className="border border-[#c3bd2e] input input-bordered w-full"
      type='email' name="email" readOnly value={email ? email :''} id='email' 
    />
   
   
  </div>
  <div className="relative h-12  w-full flex items-center justify-center gap-2">
  <label htmlFor="title" className='text-[#194a63] font-bold'>Title:</label>
    <input 
    defaultValue={jobTile}
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Job-title " type="text" name="jobTile" required id='title'
    />
    
  </div>
          </div>
          {/* Img and type */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
          <label htmlFor="deadline" className='text-[#194a63] font-bold'>Deadline:</label> 
    <input 
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Deadline " type="date" name="deadline" required id='deadline' defaultValue={deadline}
    />
   
  </div>
  <div className="relative h-12 w-full flex items-center justify-center gap-2">
  <label htmlFor="category" className='text-[#194a63] font-bold'>Category:</label> 
  <select className="select select-bordered border-[#c3bd2e] input  w-full" id='category' name='category' defaultValue={category}>
  <option>Web development</option>
  <option>Digital marketing</option>
  <option>Graphics design</option>
</select>
    
   
  </div>
          </div>
          {/* minimum and maximum */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
          <label htmlFor="min" className='text-[#194a63] font-bold'>Minimum($):</label>

    <input
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Minimum-Price" type="number" name="minimum" required id='min' defaultValue={minimum}
    />
    
  </div>
  <div className="relative h-12 w-full flex items-center justify-center gap-2">
  <label htmlFor="max" className='text-[#194a63] font-bold'>Maximum($):</label>

    <input
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Maximum-Price" type="number" name="maximum" required id='max' defaultValue={maximum}
    />
  
  </div>
          </div>
          <div className="relative h-12 w-full flex items-center justify-center gap-2">
  <label htmlFor="Img" className='text-[#194a63] font-bold'>Image:</label>

    <input
      className="border border-[#c3bd2e] input input-bordered w-full"
      placeholder="Image" type="url" name="img" required id='img' defaultValue={img}
    />
  
  </div>


          <div className="relative h-32 w-full  flex items-center justify-center gap-2">
          <label htmlFor="des" className='text-[#194a63] font-bold'>Description:</label>
          <textarea className="textarea border border-[#c3bd2e] w-full"  name='des' defaultValue={des} required ></textarea>
    
  </div>
         
     <input type="submit" value='Add Product' className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto" />  
          
        </form>
      </div>
    </div> 
    <Footer></Footer>
        </div>
    );
};

export default UpdateJobs;