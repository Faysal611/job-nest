import React from 'react';

const Banner = () => {
    return (
        <div className='flex flex-col items-center relative justify-center h-screen bg-fixed bg-no-repeat bg-cover bg-[url("/2149300648.jpg")]'>
            <div className='h-screen w-full bg-[#00000076] absolute'></div>
            <h1 className='text-6xl mb-4 font-bold text-[#4fc3ee] z-20'>Find your next gig with us!</h1>
            <h2 className='text-4xl font-bold text-[#79c2dc] z-20'>1 million+ jobs are ready for you to apply</h2>
        </div>
    );
};

export default Banner;