"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ApplyBtn = ({job}) => {
    const {data} = useSession();
    const [alreadyApplied, setAlreadyApplied] = useState([]);

    const handleApply = async () => {
        const jobId = job.id;
        const finalData = {...job, ...data.user}
        finalData.userId = parseInt(data.user.id);
        finalData.jobId = jobId;
        delete finalData.id;

        const res = await fetch("/api/apply", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(finalData)
        })

        if(res.ok) {
            toast.success("Applied Successfully!")
            hasApplied();
        } else {
            toast.error("Opps..Something Went Wrong")
        }
    }

    const hasApplied = async () => {
        fetch(`/api/hasApplied/${job.id}/${data?.user.id}`)
            .then(res => res.json())
            .then(data => {
                setAlreadyApplied(data)
            })
    }

    useEffect(() => {
        hasApplied();
    }, [job, data])

    return (
        <div className="text-center">
            <button
            disabled={alreadyApplied || !data}
            onClick={handleApply}
                rel="noopener noreferrer"
                className={` disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer hover:bg-[#56dfcf] hover:scale-105 inline-block bg-[#0abab5] text-white px-10 py-4 rounded-xl font-bold text-xl  transition duration-300 shadow-lg hover:shadow-2xl`}
            >
                Apply Now
            </button>
        </div>
    );
};

export default ApplyBtn;