import JobCard from "../../components/JobCard";
import clientPromise from "../../lib/mongodb";

const Jobs = async () => {
    const client = await clientPromise;
    const db = client.db("job-nest");
    const jobs = await db.collection("jobs").find({}).toArray();

    return (
        <div className="min-h-screen w-full">
            <p className="text-3xl font-extrabold text-center text-[#0abab5] mb-8 mt-17">Job Openings</p>
            <div className="flex flex-wrap gap-9 justify-center">
                {jobs.map((job, index) => <JobCard job={job} key={index}></JobCard>)}
            </div>
        </div>
    );
};

export default Jobs;