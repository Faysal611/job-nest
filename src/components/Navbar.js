"use client";

import Image from 'next/image';
import React from 'react';
import MiddleNav from "./MiddleNav.tsx";
import Link from 'next/link.js';
import { useSession, signOut } from 'next-auth/react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const session = useSession();

    return (
        <div className='flex justify-between items-center pt-2 pb-3 bg-[#56DFCF] border-b'>
            <Image src={"/logo.png"} width={140} height={50} className='ml-6' alt='logo image' priority></Image>
            <MiddleNav></MiddleNav>
            {session.status === "authenticated" ?
                <>
                    <DropdownMenu>
                        <DropdownMenuTrigger><Image src={session.data.user?.image} alt='user image' width={50} height={50} className='rounded-3xl mr-4 cursor-pointer'></Image> </DropdownMenuTrigger>
                        <DropdownMenuContent className='bg-slate-200'>
                            <DropdownMenuLabel>{session.data.user.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => signOut()}>Log Out</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </>

                : <Link href={"/api/auth/signin"} className='text-2xl text-[#0ABAB5] mr-6 font-semibold bg-white px-4 py-2 pb-3 rounded-3xl'>Sign Up</Link>}
        </div>
    );
};

export default Navbar;