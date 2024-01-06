import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import AddJobs from "../Pages/AddJobs/AddJobs";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import MyBids from "../Pages/MyBids/MyBids";
import BidRequests from "../Pages/BidRequests/BidRequests";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import JobDetails from "../Pages/JobDetails/JobDetails";
import UpdateJobs from "../Pages/UpdateJobs/UpdateJobs";
import Private from "../Private/Private";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children:[{
        path:'/',
        element:<Home></Home>
      },{
        path:'/webBazaar/addJobs',
        element:<Private><AddJobs></AddJobs></Private>
      },{
        path:'/webBazaar/myPostedJobs',
        element:<Private><MyPostedJobs></MyPostedJobs></Private>
      },{
        path:'/webBazaar/myBids',
        element:<Private><MyBids></MyBids></Private>,
        
      },{
        path:'/webBazaar/bidRequests',
        element:<Private><BidRequests></BidRequests></Private>
      },{
        path:'/login',
        element:<Login></Login>
      },{
        path:'/register',
        element:<Register></Register>
      },{
        path:'/jobs/:id',
        element:<Private><JobDetails></JobDetails></Private>,
        loader:({params})=>fetch(`https://server-psi-navy.vercel.app/addJobs/${params.id}`)
      },{
       
        path:'/update/:id',
        element:<UpdateJobs></UpdateJobs>,
        loader:({params})=>fetch(`https://server-psi-navy.vercel.app/addJobs/${params.id}`)
      }
    
    ]
    },
  ]);

  export default router