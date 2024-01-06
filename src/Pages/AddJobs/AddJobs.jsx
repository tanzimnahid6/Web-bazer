
import { useContext } from 'react';
import Footer from '../../Shared/Footer';
import NavBar from '../../Shared/NavBar';
import useDocumentTitle from '../../Title/useDocumentTitle'
import AddJobsForm from './AddJobsForm';
import { AuthContext } from '../../Providers/AuthProvider';

const AddJobs = () => {
    useDocumentTitle('WebBazaar|AddJobs')
    const {user}=useContext(AuthContext)
    console.log(user?.email);

    return (
        <div>
            <NavBar></NavBar>
            <div className='my-20'><AddJobsForm></AddJobsForm></div>
            <Footer></Footer>
        </div>
    );
};

export default AddJobs;