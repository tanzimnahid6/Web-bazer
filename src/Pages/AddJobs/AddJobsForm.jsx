import Swal from "sweetalert2";
import "../../Styles/Headings.css";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const AddJobsForm = () => {
  const navigate = useNavigate();
  const { user, setCount } = useContext(AuthContext);
  const userEmail = user?.email;
  const handleAdd = (e) => {
    e.preventDefault();
    const email = user?.email;
    const jobTile = e.target.jobTile.value;
    const img = e.target.img.value;
    const deadline = e.target.deadline.value;
    const category = e.target.category.value;
    const minimum = e.target.minimum.value;
    const maximum = e.target.maximum.value;
    const des = e.target.des.value;
    const newProduct = {
      email,
      jobTile,
      deadline,
      category,
      maximum,
      minimum,
      des,
      img,
    };

    fetch("https://server-psi-navy.vercel.app/addJobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "A job is successfully added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    setCount((count) => count + 1);
    e.target.reset();
    navigate("/webBazaar/myPostedJobs");
  };
  return (
    <div className="max-w-6xl mx-auto md:p-0 p-4">
      <h1 className="headings text-center my-10 text-3xl md:text-5xl">
        Add New Jobs
      </h1>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />

      {/* form  */}
      <div>
        <form onSubmit={handleAdd}>
          {/* email and job title */}
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6  my-10">
            <div className=" h-12 w-full md:w-1/2 flex items-center justify-between">
              <label htmlFor="email" className="text-[#194a63] font-bold w-3/12">
                Email:
              </label>
              <input
                className="border border-[#c3bd2e] input input-bordered w-9/12 font-semibold"
                type="email"
                name="email"
                readOnly
                value={userEmail ? userEmail : ""}
                id="email"
              />
            </div>
            <div className="relative h-12 w-full  md:w-1/2 flex items-center justify-between">
              <label htmlFor="title" className="text-[#194a63] font-bold w-3/12">
                Title:
              </label>
              <input
                className="border border-[#c3bd2e] input input-bordered w-9/12 font-semibold"
                placeholder="Title "
                type="text"
                name="jobTile"
                required
                id="title"
              />
            </div>
          </div>
          {/* Img and type */}
          <div className="flex flex-col md:flex-row gap-6 justify-between my-10">
            <div className="relative h-12 w-full flex items-center gap-2 md:gap-0 justify-between">
              <label htmlFor="deadline" className="text-[#194a63] font-bold w-3/12">
                Deadline:
              </label>
              <input
                className="border border-[#c3bd2e] input input-bordered w-9/12 font-semibold"
                placeholder="Deadline "
                type="date"
                name="deadline"
                required
                id="deadline"
              />
            </div>
            <div className="relative h-12 w-full flex items-center gap-2 md:gap-0 justify-between">
              <label htmlFor="category" className="text-[#194a63] font-bold w-3/12">
                Category:
              </label>
              <select
                className="select select-bordered border-[#c3bd2e] input  w-9/12 font-semibold"
                id="category"
                name="category"
              >
                <option>Web development</option>
                <option>Digital marketing</option>
                <option>Graphics design</option>
              </select>
            </div>
          </div>
          {/* minimum and maximum */}
          <div className="flex flex-col md:flex-row justify-between gap-6 my-10">
            <div className="relative h-12 w-full md:w-1/2 gap-2  flex items-center justify-between">
              <label htmlFor="min" className="text-[#194a63] font-bold w-3/12">
                Min($):
              </label>

              <input
                className="border border-[#c3bd2e] input input-bordered w-9/12 font-semibold"
                placeholder="Minimum-salary"
                type="number"
                name="minimum"
                required
                id="min"
              />
            </div>
            <div className="relative h-12 w-full md:w-1/2 flex items-center justify-between gap-2">
              <label htmlFor="max" className="text-[#194a63] font-bold w-3/12">
                Max($):
              </label>

              <input
                className="border border-[#c3bd2e] input input-bordered w-9/12 font-semibold"
                placeholder="Maximum-salary"
                type="number"
                name="maximum"
                required
                id="max"
              />
            </div>
          </div>
          <div className="h-12 w-full flex items-center gap-12 justify-center">
            <label htmlFor="Img" className="text-[#194a63] font-bold w-1/12 ">
              Image:
            </label>

            <input
              className="border border-[#c3bd2e] input input-bordered w-11/12 font-semibold"
              placeholder="Image"
              type="url"
              name="img"
              required
              id="img"
            />
          </div>

          <div className="relative h-32 w-full mt-8 md:mt-2  md:flex items-center justify-center gap-12">
            <label htmlFor="des" className="text-[#194a63] font-bold w-1/12">
              Description:
            </label>
            <textarea
              className="textarea border border-[#c3bd2e] w-11/12 font-semibold"
              placeholder="Description"
              name="des"
              id="des"
              required
            ></textarea>
          </div>

          <input
            type="submit"
            value="Add Product"
            className="block md:w-1/4  w-11/12 rounded text-[#fcf540] bg-gradient-to-r from-[#193e51] to-[#146666]  px-7 pb-2.5 pt-3 text-sm font-medium uppercase  mx-auto"
          />
        </form>
      </div>
    </div>
  );
};

export default AddJobsForm;
