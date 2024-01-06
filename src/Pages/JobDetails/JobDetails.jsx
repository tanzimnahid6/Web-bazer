import { useLoaderData } from "react-router-dom";
import NavBar from "../../Shared/NavBar";
import Footer from "../../Shared/Footer";

import BidOnProject from "./BidOnProject";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { jobTile, deadline, maximum, minimum, des, img } = jobs;

  return (
    <div>
      <NavBar></NavBar>
      <div className="flex md:flex-row flex-col max-w-6xl mx-auto p-4 md:p-4 gap-12 my-10 justify-center items-center border ">
        <div className="md:w-6/12  w-full">
          <div className="h-full">
            <div className="card bg-base-100 shadow-xl border border-yellow-700">
              <figure className="p-4  border">
                <img
                  src={img}
                  alt="Shoes"
                  className="rounded-xl border w-full h-80 object-cover"
                />
              </figure>
              <div className="card-body  border flex flex-col  space-y-1">
                <h2 className="text-xl font-bold ">
                  Title:
                  <span className="font-semibold">{jobTile}</span>
                </h2>
                <p className="text-sm text-gray-700">{des}</p>
                <p>
                  <span className=" font-bold text-justify">Deadline:</span>
                  <span className="font-semibold">{deadline}</span>
                </p>
                <p>
                  <span className=" font-bold text-justify">Price:</span>
                  <span className="font-semibold">
                    ({maximum}-{minimum})$
                  </span>
                </p>
                <div className="card-actions flex-grow"></div>
              </div>
            </div>
          </div>
        </div>

        {/* form for biding  */}
        <div className="w-8/10 border border-yellow-700 p-7 rounded-lg shadow-2xl">
          <h1 className="headings text-center text-3xl md:text-5xl">
            Please your bid
          </h1>
          <hr className="  border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />
          <BidOnProject></BidOnProject>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default JobDetails;
