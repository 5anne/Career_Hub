import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi"
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact w-96 bg-base-300 shadow-xl p-4">
            <figure><img className="w-50 h-24" src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-2 py-2 font-extrabold border rounded bordder-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
                    <button className="px-2 py-2 font-extrabold border rounded bordder-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
                </div>
                <div  className="flex gap-8">
                    <h2 className="flex items-center"><MdOutlineLocationOn className="text-xl"></MdOutlineLocationOn>{location}</h2>
                    <h2 className="flex items-center"><HiOutlineCurrencyDollar className="text-xl"></HiOutlineCurrencyDollar>{salary}</h2>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">view Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;