import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import { FaBuilding, FaMapMarkerAlt, FaMoneyBillWave, FaClock, FaCalendarAlt } from "react-icons/fa";
import ApplyBtn from "../../../components/ApplyBtn";

const page = async ({ params }) => {
    const paramss = await params;
    const jobId = paramss.jobId;
    
    const client = await clientPromise;
    const db = client.db("job-nest");
    const jobFromMongo = await db.collection("jobs").findOne({_id : new ObjectId(jobId)});
    const job = JSON.parse(JSON.stringify(jobFromMongo));
    return (
        
        <div className="flex justify-center mt-10 ">
            <div className="p-8 border-2 rounded-2xl">
                {/* Job Header */}
                <div className="mb-10">
                    <h1 className="text-5xl font-extrabold text-[#0abab5] mb-4">{job.title}</h1>
                    <div className="flex flex-wrap gap-6 text-gray-800 text-lg">
                        <span className="flex items-center gap-2 hover:text-[#0abab5] transition duration-300">
                            <FaBuilding className="text-[#56dfcf]" /> {job.company}
                        </span>
                        <span className="flex items-center gap-2 hover:text-[#0abab5] transition duration-300">
                            <FaMapMarkerAlt className="text-[#56dfcf]" /> {job.location}
                        </span>
                        <span className="flex items-center gap-2 hover:text-[#0abab5] transition duration-300">
                            <FaClock className="text-[#56dfcf]" /> {job.type}
                        </span>
                        <span className="flex items-center gap-2 hover:text-[#0abab5] transition duration-300">
                            <FaMoneyBillWave className="text-[#56dfcf]" /> {job.salary}
                        </span>
                        <span className="flex items-center gap-2 hover:text-[#0abab5] transition duration-300">
                            <FaCalendarAlt className="text-[#56dfcf]" /> Posted: {job.postedDate}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#0abab5] mb-4 hover:underline transition duration-300">Job Description</h2>
                    <p className="text-gray-800 text-lg leading-relaxed hover:text-[#0abab5] transition duration-300">{job.description}</p>
                </section>

                {/* Requirements */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-[#0abab5] mb-4 hover:underline transition duration-300">Requirements</h2>
                    <ul className="list-disc list-inside text-gray-800 space-y-2 text-lg">
                        {job.requirements.map((req, index) => (
                            <li key={index} className="hover:text-[#0abab5] transition-colors duration-300">{req}</li>
                        ))}
                    </ul>
                </section>

                {/* Apply Button */}
                <ApplyBtn job={job}></ApplyBtn>
            </div>
        </div>
    );
};

export default page;