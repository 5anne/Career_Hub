import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Job/Job";


const Featuredjobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));

    }, [])

    return (
        <div>
            <h2 className="text-5xl text-center font-bold my-20">Featured Jobs: {jobs.length}</h2>
            <div className="grid grid-cols-3 gap-8 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary my-10">Show All Jobs</button>
            </div>
        </div>
    );
};

export default Featuredjobs;