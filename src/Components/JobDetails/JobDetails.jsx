import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savejobApplication } from "../../Utility/localStorage";
import { Helmet } from "react-helmet";



const JobDetails = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs?.find(job => job.id === idInt);

    const notify = () => {
        toast("You have applied successfully!");
        savejobApplication(idInt);
    }

    return (
        <div className="my-8">
            <Helmet>
                <title>Career Hub | Job Details {id}</title>
            </Helmet>
            <h2 className="text-2xl font-semibold my-2">Job Details of: {job.job_title}</h2>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="border-2 rounded-xl p-4 md:col-span-3">
                    <h2 className="text-4xl">{job.company_name}</h2>
                    <p>Details Coming Here</p>
                </div>
                <div className="border-2 rounded-xl p-4">
                    <h2 className="text-3xl">Side things</h2>
                    <button onClick={notify} className="btn btn-primary w-full mt-4">Apply Now</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default JobDetails;