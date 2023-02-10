import { api } from "../utils/api";
import type { NextPage } from "next";
import Image from "next/image";

const ProductCard: NextPage = () => {
  const builds = api.builds.getBuilds.useQuery();

  return (
    <>
    <div className="bg-[url('/.jpg')]">
        <div className="flex flex-wrap justify-center">
          {builds.data?.map((build) => (
            <div
              key={build.id}
              className="w-64 h-150 p-6 mx-4 my-4 bg-white rounded-lg shadow-md">
              <Image src={'/1.jpg'} alt='Building Image' width={300} height={300} />
              <br/>
              <h2 className="text-xl font-medium text-center">{build.subject}</h2>
              <p className="text-sm font-light text-center">ID: {build.id}</p>
              <p className="text-sm font-light text-center">Room: {build.room}</p>
              <p className="text-sm font-light text-center">Start Time: {build.starttime.toLocaleTimeString(undefined, {hour: '2-digit', minute: '2-digit', hour12: true})}</p>
              <p className="text-sm font-light mt-2 p-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg">Description: {build.description}</p>
              <br/>
            </div>
          ))}
        </div>
        </div>
    </>
  );
};

export default ProductCard;
