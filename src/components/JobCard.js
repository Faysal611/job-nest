// src/components/JobCard.jsx
import Link from "next/link.js";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";

export default function JobCard({ job }) {
    return (
        <div className="bg-slate-200 w-[20%] rounded-2xl shadow-md p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-xl font-bold text-[#0abab5] mb-1">{job.title}</h2>
            <p className="flex items-center text-gray-700 mb-2">
                <FaBuilding className="mr-2 text-[#56dfcf]" /> {job.company}
            </p>
            <p className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-[#56dfcf]" /> {job.location}
            </p>
            <p className="flex items-center text-gray-600 mt-1">
                <FaClock className="mr-2 text-[#56dfcf]" /> {job.type}
            </p>
            <p className="flex items-center text-gray-600 mt-1">
                <FaMoneyBillWave className="mr-2 text-[#56dfcf]" /> {job.salary}
            </p>

            <p className="text-gray-700 mt-3 line-clamp-3">{job.description}</p>

            <Link
                href={`/job/${job._id}`}
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-[#0abab5] text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:outline-2 hover:outline-[#56dfcf] hover:text-[#56dfcf] transition duration-300"
            >
                View Details
            </Link>
        </div>
    );
}
