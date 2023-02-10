import React from "react";
import ProductCard from "../components/card";
import Link from "next/link";
import "../styles/modules.css";

const artcard = () => {
    return (
        <div className="">
            <div className="font-serif ">
                <header className='text-center text-black text-3xl mt-6 '>
                    <h1 className="text-5xl">Meeting <br /> Booking Rooms</h1>
                </header>
                <body>

                    <div className="mt-10 pl-5 pr-5 ">
                        <h1 className="text-center text-black text-3xl border-4 border-black rounded-full p-3">Building 1</h1>
                    </div>

                    <nav className="flex justify-center">
                        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6 mt-6  ">
                            <div className="card">

                                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                    <li className="mr-2">
                                        <Link href="/Building1/b1f1" className="inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" aria-current="page">Floor 1</Link>
                                    </li>
                                    <li className="mr-2">
                                        <Link href="/Building1/b1f2" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Floor 2</Link>
                                    </li>
                                    <li className="mr-2">
                                        <Link href="/Building1/b1f3" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Floor 3</Link>
                                    </li>
                                    <li className="mr-2">
                                        <Link href="/Building1/b1f4" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Floor 4</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                      <ProductCard roomname={"Room I"} productBooker={"ผู้จองห้อง"} name={"สิรภพ ปานโชติ"} starttime={"18:00"} endtime={"20:00"} descriptions={"12312"}   />
                        
                    
                </body >
            </div >
        </div>
    );
}

export default artcard;