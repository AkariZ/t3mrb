/* eslint-disable @typescript-eslint/no-misused-promises */


import React, { useState } from "react";
import Link from "next/link";
import { api } from "../../utils/api";
import { useRouter } from "next/router";



const PageForm = () => {

  const createBuildMutation = api.builds.createBuild.useMutation();

  const [subject, setsubject] = useState("");
  const [name, setname] = useState("");
  const [date, setDate] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endtime, setendtime] = useState("");
  const [room, setroom] = useState("");
  const [description, setdescription] = useState("");

  

  const router = useRouter();

  async function  handleSubmitBook(e: React.FormEvent) {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      subject,
      name,
      date: new Date(),
      starttime: new Date(),
      endtime: new Date(),
      room,
      description
    })
      .then(() => {
        void router.push('/')
        
      })
      .catch(error => console.log(error)) 
  }


  return (
    <>
    <div className="bg-[url('/bg1.jpg')]">
      <div className="container max-w-full mx-auto md:py-24 px-6">
        <div className="max-w-sm mx-auto px-6">
          <div className="relative flex flex-wrap">
            <div className="w-full relative">

              <div className="md:mt-6 bg-white p-6 rounded-lg shadow-md" >
                <div className="text-center font-normal text-black pt-6">
                  Meeting Room Booking System
                </div>
                <div className="text-center font-base text-black">
                  Dolly Soluution Company
                </div>
                <form onSubmit={handleSubmitBook}>
                  <div className="mx-auto max-w-lg ">
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">SubJect</span>
                      <input
                        placeholder="your subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setsubject(e.target.value)}
                        required
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                      </input> </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Name</span>
                      <input
                        placeholder="your name"
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                      </input> </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Date</span>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                      </input> </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Start Time</span>
                      <input
                        value={starttime}
                        onChange={(e) => setstarttime(e.target.value)}
                        type="time"
                        required
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                      </input> </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">End Time</span>
                      <input

                        value={endtime}
                        onChange={(e) => setendtime(e.target.value)}
                        type="time"
                        required
                        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none">
                      </input> </div>
                    <div className="py-1">
                      <span className="px-1 text-sm text-gray-600">Select Room</span>
                      <div className="flex justify-center">
                        <div className="mb-3 xl:w-96 py-1">
                          <select
                            value={room}
                            onChange={(e) => setroom(e.target.value)}

                            id="select"
                            className="text-md block px-3 py-2 rounded-lg w-ful bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none " required >
                            <option selected>Select Room</option>
                            <option value="1">One</option>
                            <option value="1">Two</option>
                            <option value="2">Three</option>
                            <option value="3">Four</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <label className="block">
                      <span className="px-1 text-sm text-gray-600">Description</span>
                      <textarea
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                        className="form-textarea mt-1 text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" placeholder="Enter some long form content."></textarea>
                    </label>

                    <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                      <Link href="/" className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100 text-center text-flex">
                        <button> Cancel </button>
                      </Link>

                      <button type="submit" className="mb-2 md:mb-0 bg-gray-800 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-black text-center text-flex">Save</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
export default PageForm;
