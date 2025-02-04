/* eslint-disable @next/next/no-img-element */

import { Suspense } from "react";
const LatestDevices = async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/smhasnanmonir/Mobile-Dekhan-Frontend/refs/heads/main/assets/test.json",
    {
      cache: "no-cache",
    }
  );
  const posts = await data.json();

  interface Device {
    name: string;
    brand: string;
    model: string;
    img: string;
  }

  return (
    <div className="w-full">
      <h1 className="font-semibold py-[15px]">Latest Devices</h1>
      <div className="grid grid-cols-5 gap-6 w-full">
        <Suspense fallback={<div>Loading...</div>}>
          {posts.map((post: Device) => (
            <div
              key={post?.model}
              className="border border-b-2 border-blue-300"
            >
              <div>
                <img src={post.img} alt={post.name} />
                <div className="p-4">
                  <h1>{post.name}</h1>
                  <p>{post.brand}</p>
                  <p>{post.model}</p>
                </div>
              </div>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default LatestDevices;
