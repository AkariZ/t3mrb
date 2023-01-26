import React from "react";

import Link from "next/link";
import Clock from "../components/clock"


const PageHome = () => {
  return (
   
      <><header className='bg-green-700  text-center text-white text-3xl p-'>
      <h1>Meeting Room</h1>
      <Clock />
    </header><body className="items-center bg-white justify-items-center pt-2 min-h-screen ">
        <div className="row">
          <br />
          <div className="color-green-300 text-center text-2xl ">Available</div>
          <br />
          <div className="color-black text-left ml-10 pt-3">
            <h2>Welcome Partner</h2>
            <h1 style={{ color: "Green" }}>02.00 - 03.00 PM</h1>
            <h2>by Admin</h2>
          </div>
          <div className="text-center cursor-pointer">
            <Link href="/form">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Book
              </button>
            </Link>
          </div>
        </div>
        <br />
      </body><footer className="text-xl bg-green-700 bg-cover p-10 text-center text-white">
        Design Dolly Solution co,td
      </footer></>
 
  );
}

export default PageHome;