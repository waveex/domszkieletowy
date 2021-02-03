import React from 'react';

const Nav = () => {
    return (
        <div >
            <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
                <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
                    <div className="flex items-center flex-1">
                        <div className="hidden md:block md:ml-10 md:space-x-10">
                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Product</a>
                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Features</a>
                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Marketplace</a>
                            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Company</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Nav;
