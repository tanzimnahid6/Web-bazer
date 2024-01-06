/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";

const Card = ({ job }) => {
  const {
    jobTile,
    deadline,
    category,
    maximum,
    minimum,
    des,
    img,
    _id,
  } = job;
  return (
    <>
      <div className="rounded overflow-hidden shadow-2xl flex flex-col ">
        <a href="#" />
        <div className="relative">
          <a href="#">
            <img
              className="w-full h-72 "
              src={img}
              alt="Sunset in the mountains"
            />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
          </a>
          <a href="#!">
            <div className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
              {category}
            </div>
          </a>
        </div>
        <div className="text-left py-4 mb-auto ">
          <span className="font-semibold text-xl  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            {jobTile}
          </span>
          <p className="text-gray-500 text-sm px-1">{des}</p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
          <div className="flex flex-col items-start">
            <span className="text-xs">Deadline</span>
            <span className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
              <span>
                <BsCalendar3 />
              </span>
              <span className="ml-1">{deadline}</span>
            </span>
          </div>
          <span
            href="#"
            className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
          >
            <span>
              <CiDollar size={20} />
            </span>
            <span className="ml-1">
              USD ({minimum} - {maximum}) ${" "}
            </span>
          </span>
        </div>
        <Link to={`/jobs/${_id}`}>
          <div className="btn btn-outline btn-warning  w-full">BIT NOW</div>
        </Link>
      </div>
    </>
  );

  // return (
  //   <div className="card lg:card-side bg-brown-50-50 shadow-xl  h-full border-deep-orange-100 border-2  ">
  //     <figure className=" md:w-5/12 w-full h-full">
  //       <img
  //         className="h-[300px] w-full opacity-70"
  //         src={img}
  //         alt="Product"
  //       />
  //     </figure>
  //     <div className="card-body text-lg md:w-1/2 space-y-2 w-full ">
  //       <h2 className="text-2xl">
  //         Job-title:<span className="font-bold text-[#146666]">{jobTile}</span>
  //       </h2>
  //       <p className="text-justify ">{des.slice(0, 150)}</p>
  //       <p>
  //         <span className="text-[#146666] font-semibold text-justify">
  //           Deadline:
  //         </span>
  //         {deadline}
  //       </p>
  //       <p>
  //         <span className="text-[#146666] font-semibold text-justify">
  //           Price:
  //         </span>
  //         {maximum}$-{minimum}$
  //       </p>

  //       <div className="card-actions flex-grow mx-auto">
  //         <Link to={`/jobs/${_id}`}>
  //           <button className="className=' p-4 btn bg-[#146666] text-[#ffffff] hover:bg-[#6b8783] ">
  //             {" "}
  //             Bit Now{" "}
  //           </button>
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Card;
