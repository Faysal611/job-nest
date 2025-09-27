"use client";
import React from 'react';
import { Input } from "@/components/ui/input"
import { signIn } from 'next-auth/react';
import { FaGoogle } from "react-icons/fa";

const page = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const username = e.target.username.value;
        const password = e.target.password.value;
        
    }

    return (
        <div className='flex justify-center mt-20'>
            <div className='w-[500px]'>
                <h2 className='text-3xl font-bold text-[#0ABAB5] my-10'>SignUp For Free!</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <Input name="username" type="text" className="border-2" placeholder="Username" />
                    <Input name="email" type="email" className="border-2" placeholder="Email" />
                    <Input name="password" type="password" className="border-2" placeholder="Password" />
                    <button className=' outline outline-[#56DFCF] hover:outline-0 hover:text-white hover:bg-[#56DFCF] duration-200 px-4 py-2 cursor-pointer text-[#56DFCF] font-bold rounded-xl'>Sign Up</button>
                </form>
                <div className='w-full h-[1px] bg-gray-600 my-9'></div>
                <div className='flex justify-center'>
                    <button onClick={() => signIn("google", { callbackUrl: "/" })} className='text-2xl border-2 rounded-xl px-4 py-2 text-[#0ABAB5] border-[#0ABAB5] cursor-pointer font-semibold flex items-center gap-2'><FaGoogle></FaGoogle><span>Sign in with Google</span></button>
                </div>
            </div>
        </div>
    );
};

export default page;