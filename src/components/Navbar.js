import Image from 'next/image';
import React from 'react';
import MiddleNav from "./MiddleNav.tsx";
import Link from 'next/link.js';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pt-3 pb-4 bg-slate-100 border-b'>
            <Image src={"/logo.png"} width={160} height={100} className='ml-6' alt='logo image'></Image>
            <MiddleNav></MiddleNav>
            <Link href={"/"} className='text-2xl mr-6 font-semibold bg-[#5c7b86] text-white px-4 py-2 rounded-2xl'>Sign Up</Link>
        </div>
    );
};

export default Navbar;