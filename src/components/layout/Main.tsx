import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <main className="flex-grow container mx-auto min-h-0 overflow-y-auto bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/src/assets/images/main-bg.jpg')] bg-cover bg-center">
            <Outlet />
        </main>
    )
}

export default Main; 