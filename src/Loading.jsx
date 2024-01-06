import { Spinner } from "@material-tailwind/react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center my-20 text-[#193e51]">
      <div className="flex  max-w-6xl mx-auto ">
        <h2 className="text-6xl">L</h2>
        <Spinner className="h-16 w-16  text-[#c3bd2e]" />
        <h2 className="text-6xl">ADING</h2>
      </div>
      ;
    </div>
  );
};

export default Loading;
