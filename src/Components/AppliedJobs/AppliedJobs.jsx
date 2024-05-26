import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage.js";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    useEffect(() => {
        const storeJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storeJobIds.includes(job.id));
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [])
    const handleFilter = (filter) => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const OnsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(OnsiteJobs);
        }
    }
    return (
        <div>
            <h2 className="text-center font-bold text-2xl text-black">Job I applied: {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">Filter</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('all')}><a>All</a></li>
                    <li onClick={() => handleFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map((job, idx) => <li key={job.id} className="border-2 rounded-2xl p-4 border-blue-950 text-teal-900 my-2"><span>{idx + 1}  {job.job_title} {job.company_name}: {job.remote_or_onsite}</span></li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;




// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { getStoredJobApplication } from "../../Utility/localStorage";


// const AppliedJobs = () => {
//     const jobs = useLoaderData();
//     const [appliedJobs, setAppliedJobs] = useState([]);
//     useEffect(() => {
//         const storeJobIds = getStoredJobApplication();
//         if (jobs.length > 0) {
//             const jobsApplied = jobs.filter(job => storeJobIds.includes(job.id))
//             const jobsApplied = [];
//             for (const id of storeJobIds) {
//                 const job = jobs.find(job => job.id == id);
//                 if (job) {
//                     jobsApplied.push(job);
//                 }
//             }
//             setAppliedJobs(jobsApplied);
//             console.log(jobs, storeJobIds, jobsApplied);
//         }
//     }, [])
//     return (
//         <div>
//             <h2 className="text-center font-bold text-2xl text-black">{appliedJobs.length}</h2>
//         </div>
//     );
// };

// export default AppliedJobs;