"use client";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const ApplyBtn = ({job}) => {
    const {data} = useSession();

    const handleApply = async () => {
        const finalData = {...job, ...data.user}
        finalData.userId = finalData.id;
        delete finalData.id;
        const res = await fetch("/api/apply", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(finalData)
        })

        if(res.ok) {
            toast("Applicat")
        }
    }

    return (
        <div className="text-center">
            <button
            onClick={handleApply}
                rel="noopener noreferrer"
                className="inline-block cursor-pointer bg-[#0abab5] text-white px-10 py-4 rounded-xl font-bold text-xl hover:bg-[#56dfcf] hover:scale-105 transition duration-300 shadow-lg hover:shadow-2xl"
            >
                Apply Now
            </button>
        </div>
    );
};

export default ApplyBtn;