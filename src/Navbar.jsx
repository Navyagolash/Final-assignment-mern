import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="relative">
            <nav className="flex items-center justify-around  px-6 py-4 shadow-md bg-white">
                <h1 className="text-xl font-bold ">Logo</h1>

                <ul className="hidden md:flex gap-8 items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>How it work</li>
                    <li>Pricing</li>
                    <button className="bg-green-600 text-white px-4 py-2 rounded"> Create Account</button>
                </ul>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(true)} className="text-gray-700 hover:text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="fixed inset-0 bg-green-700 text-white z-50 flex flex-col">
                    <div className="flex justify-end p-6">
                        <button onClick={() => setIsOpen(false)} className="text-2xl">
                            X
                        </button>
                    </div>
                    <div className="hidden md:flex justify-center gap-10 mt-10 text-lg">
                        <span className="py-2">Home</span>
                        <span className="py-2">About</span>
                        <span className="py-2">How it work</span>
                        <span className="py-2">Pricing</span>
                        <button className="bg-white text-green-700 px-4 py-4 rounded">Create Account</button>
                    </div>

                    <div className="flex flex-col item-center justify-center flex-1gap-6 md:hidden text-lg m-[20px]">
                        <span className="py-2">Home</span>
                        <span className="py-2">About</span>
                        <span className="py-2">How it work</span>
                        <span className="py-2">Pricing</span>
                    </div>
                    <div className="md:hidden p-6">
                        <button className="w-full bg-white text-green-700 py-3 rounded">Create Account</button>
                    </div>

                </div>
            )}
        </div>
    )
}