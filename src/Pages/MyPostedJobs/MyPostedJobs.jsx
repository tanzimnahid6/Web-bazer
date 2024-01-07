import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyPostedJobs = () => {
  useDocumentTitle("WebBazaar|MyPostedJobs");
  const { user, count, setCount } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const userEmail = user?.email;
  console.log(count);

  // const { isPending, error, data,refetch } = useQuery({
  //     queryKey: ["postedJobs"],
  //     queryFn:  async() =>{
  //    return  await fetch("https://server-psi-navy.vercel.app/addJobs")
  //    .then(
  //     (res) => res.json(),)

  //   }
  //   });
  //   refetch()
  //   if (isPending) return <Loading></Loading>;

  //   if (error) return "An error has occurred: " + error.message;
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://server-psi-navy.vercel.app/addJobs");
      const result = await res.json();
      setData(result);
    };
    getData();
  }, [count]);

  const getTheJobsOfTheUser = data.filter((user) => user.email === userEmail);
  console.log(getTheJobsOfTheUser);
  //delete the product

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure to delete the product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b8a11-server-side-sumaiyakhan322.vercel.app/addJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
            }
            setCount((count) => count + 1);
          });
      }
    });
  };
  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-6xl mx-auto p-4 md:p-0">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-6 my-20 ">
          {getTheJobsOfTheUser.map((job) => (
            <div key={job._id}>
              <div className="h-full">
                <div className="card bg-base-100 shadow-xl border ">
                  <figure className="p-4  border  h-[200px] ">
                    <img
                      src={job.img}
                      alt="Shoes"
                      className="rounded-xl border  h-full w-full"
                    />
                  </figure>
                  <div className="card-body items-center text-center  border flex flex-col h-full ">
                    <h2 className="card-title font-bold text-[#193e51]">
                      {job.jobTile}
                    </h2>
                    <p className="text-center ">{job.des}</p>
                    <p className="text-[#193e51] font-bold">
                      Deadline:{job.deadline}
                    </p>

                    <p className="text-[#193e51] font-bold">
                      {job.maximum}$-{job.minimum}$
                    </p>
                    <div className="card-actions flex-grow my-8">
                      <button
                        className="btn bg-[#146666] text-[#ffffff] hover:bg-[#6b8783]"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                      <Link to={`/update/${job._id}`}>
                        <button className="btn bg-[#146666] text-[#ffffff] hover:bg-[#6b8783]">
                          Update
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MyPostedJobs;
