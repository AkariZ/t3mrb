import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageHome = () => {
  return (
    
    <div className="font-serif bg-stone-700 bg-cover p-10 ">
      <header className='text-center text-white text-7xl mt-2 '>
        <h1>Meeting <br /> Booking Rooms</h1>
      </header>
      <body>
        <div className="container mx-auto">
          <div className="rows justify-center mt-20 pl-5 pr-5 flex ">
            <div className="grid grid-cols-2 gap-x-20 gap-y-20 items-center ">

              <div className="bg-white rounded-lg shadow-lg max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ... ">
                <Link href="/Building1/b1f1" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={'/1.jpg'} alt='Home Page' width={300} height={300} />
                </Link>
                <div className="p-2">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Building 1</h5>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ... ">
                <Link href="/Building1/b1f1" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={'/1.jpg'} alt='Home Page' width={300} height={300} />
                </Link>
                <div className="p-2">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Building 2</h5>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ... ">
                <Link href="/Building1/b1f1" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={'/1.jpg'} alt='Home Page' width={300} height={300} />
                </Link>
                <div className="p-2">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Building 3</h5>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg max-w-sm transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ... ">
                <Link href="/Building1/b1f1" data-mdb-ripple="true" data-mdb-ripple-color="light">
                  <Image src={'/1.jpg'} alt='Home Page' width={300} height={300} />
                </Link>
                <div className="p-2">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">Building 4</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body >/
      

    </div >
  );
}
export default PageHome;
