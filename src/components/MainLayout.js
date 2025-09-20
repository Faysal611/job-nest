import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div className='w-11/12 mx-auto'>
            {children}
        </div>
    );
};

export default MainLayout;