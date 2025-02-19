/* eslint-disable @next/next/no-img-element */
import { PhoneDataResponse } from "@/interface/phoneResponse";
import Link from "next/link";
import { Suspense } from "react";
const LatestDevices = async () => {
  const data = await fetch("http://localhost:3004/api/v1/get-phones", {
    cache: "no-cache",
  });
  const posts: PhoneDataResponse = await data.json();

  console.log("from homepage=> ", posts);

  return (
    <div className="w-full pb-[10px]">
      <h1 className="font-semibold py-[15px]">Latest Devices</h1>
      <div className="grid grid-cols-5 gap-6 w-full">
        <Suspense fallback={<div>Loading...</div>}>
          {posts?.data?.map((post) => (
            <Link
              href={`/phones/${post?.slug}`}
              key={post?.model}
              className="border border-b-2 border-blue-300 block"
            >
              <div>
                <img src={post.image} alt={post.model} />
                <div className="p-4 space-y-1">
                  <p>{post.model}</p>
                  <p>{post.price} Taka</p>
                </div>
              </div>
            </Link>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default LatestDevices;
