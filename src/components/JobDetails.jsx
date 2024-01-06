/* eslint-disable react/prop-types */


const JobDetails = ({jobs}) => {
    const {
        jobTile,
        deadline,
        maximum,
        minimum,
        des,
        img,
      } = jobs;
    return (
        <>
        <div className="md:w-6/12  w-full">
          <div className="h-full">
            <div className="card bg-base-100 shadow-xl border border-[#c3bd2e]">
              <figure className="p-4  border   ">
                <img src={img} alt="Shoes" className="rounded-xl border  " />
              </figure>
              <div className="card-body items-center text-center  border flex flex-col  space-y-3">
                <h2 className=" text-2xl">
                  Job-title:
                  <span className="font-bold text-[#146666]">{jobTile}</span>
                </h2>
                <p className="text-center ">{des}</p>
                <p>
                  <span className="text-[#146666] font-bold text-justify">
                    Deadline:
                  </span>
                  {deadline}
                </p>
                <p>
                  <span className="text-[#146666] font-bold text-justify">
                    Price:
                  </span>
                  {maximum}$-{minimum}$
                </p>
                <div className="card-actions flex-grow"></div>
              </div>
            </div>
          </div>
        </div>
            
        </>
    );
};

export default JobDetails;