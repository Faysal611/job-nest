import React from 'react';

const Banner = () => {
    return (
        <div className='flex w-screen right-17 flex-col items-center relative justify-center h-screen bg-fixed bg-no-repeat bg-cover bg-[url("/2149300648.jpg")]'>
            <div className='h-screen w-full bg-[#00000088] absolute'></div>
            <h1 className='text-7xl mb-7 font-semibold text-[#0ABAB5] z-20 relative bottom-17'>Find your next gig with us!</h1>
            <h2 className='text-4xl font-semibold text-[#ADEED9] z-20 relative bottom-17'><span className='border text-[#56DFCF] font-bold border-white rounded-xl pb-2 backdrop-brightness-50 px-3'>1 million+</span> jobs are ready for you to apply</h2>
        </div>
    );
};

export default Banner;