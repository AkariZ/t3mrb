import React from "react";
import ProductCard from "../../components/card";
import Link from "next/link";

const b1 = () => {
    return (
        
        <div className="font-serif bg-stone-700 bg-cover height- p-10 ">
            <div className="font-serif ">
                <header className='text-center text-white text-7xl mt-4 '>
                    <h1 className="text-5xl">Meeting <br /> Booking Rooms</h1>
                </header>
                <body>
                    <div className="mt-10 pl-5 pr-5 ">
                        <h1 className="text-center text-white text-3xl  bg-green-500 rounded-full p-3">Building 1</h1>
                    </div>

                    <nav className="flex justify-center">
                        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6 mt-6  lex justify-center">
                            <div className="flex items-center">
                                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                                    <li className="mr-2">
                                        <Link href="/Building1/b1f1" className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Floor 1</Link>
                                    </li>
                                    <li className="mr-2">
                                        <Link href="/Building1/b1f2" className="inline-block px-4 py-3 text-white bg-green-600 rounded-lg active" aria-current="page">Floor 2</Link>
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

                  
     <ProductCard/>

<div className="text-center">
     <Link href="/Forms/form">
              <button type="button" className="my-6 mx-auto px-5 py-3 text-base font-medium text-center text-white bg-green-400 rounded-lg hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Booking</button>
              </Link>
</div>
<Link href="/" className="my-6 mx-auto px-5 py-3 text-base font-medium text-center text-black bg-white rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-300 dark:hover:bg-blue-400 dark:focus:ring-blue-400">
                        <button> Back </button>
                      </Link>
                </body >
              
            </div >
        </div>
    );
}

export default b1;