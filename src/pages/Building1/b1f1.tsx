import React from "react";
import ProductCard from "../../components/card";
import Link from "next/link";

const b1 = () => {
  return (
    <div className="height- bg-stone-700 bg-cover p-10 font-serif ">
      <div className="font-serif ">
        <header className="mt-4 text-center text-7xl text-white ">
          <h1 className="text-5xl">
            Meeting <br /> Booking Rooms
          </h1>
        </header>
        <body>
          <div className="mt-10 pl-5 pr-5 ">
            <h1 className="rounded-full bg-green-500 p-3  text-center text-3xl text-white">
              Building 1
            </h1>
          </div>

          <nav className="flex justify-center">
            <div className="lex mx-auto mt-6 max-w-screen-xl justify-center px-4  py-3 md:px-6">
              <div className="flex items-center">
                <ul className="flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400">
                  <li className="mr-2">
                    <Link
                      href="/Building1/b1f1"
                      className="active inline-block rounded-lg bg-green-600 px-4 py-3 text-white"
                      aria-current="page"
                    >
                      Room 1
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link
                      href="/Building1/b1f2"
                      className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      Room 2
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link
                      href="/Building1/b1f3"
                      className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      Room 3
                    </Link>
                  </li>
                  <li className="mr-2">
                    <Link
                      href="/Building1/b1f4"
                      className="inline-block rounded-lg px-4 py-3 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                    >
                      Room 4
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <ProductCard />

          <div className="text-center">
            <Link href="/Forms/form">
              <button
                type="button"
                className="my-6 mx-auto rounded-lg bg-green-400 px-5 py-3 text-center text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Booking
              </button>
            </Link>
          </div>
          <Link
            href="/"
            className="my-6 mx-auto rounded-lg bg-white px-5 py-3 text-center text-base font-medium text-black hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-300 dark:hover:bg-blue-400 dark:focus:ring-blue-400"
          >
            <button> Back </button>
          </Link>
        </body>
      </div>
    </div>
  );
};

export default b1;
