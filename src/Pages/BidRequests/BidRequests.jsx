
import Footer from "../../Shared/Footer";
import NavBar from "../../Shared/NavBar";
import useDocumentTitle from "../../Title/useDocumentTitle";

import BidRequestTable from "./BidRequestTable";


const BidRequests = () => {
    useDocumentTitle('WebBazaar|BidRequests')
 
    return (
        <div>
            <NavBar></NavBar>
            <h1 className='headings text-center my-10 text-3xl md:text-5xl'>My bid requests</h1>
        <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent  w-10/12 via-[#193e51] to-transparent opacity-25 dark:opacity-100 center" />

      
    <div className="max-w-6xl mx-auto p-4 md:-0 my-16">
    <BidRequestTable></BidRequestTable>
    </div>
           <Footer></Footer>
        </div>
    );
};

export default BidRequests;