/* eslint-disable @next/next/no-img-element */
import { LatestDeviceInHomeData } from "@/interface/LatestDeviceInHome";
import Link from "next/link";
import { Suspense } from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Latest Mobile Phones information in Bangladesh",
  description:
    "Get the latest mobile phones information in Bangladesh. Find the best mobile phones with the latest features and specifications.",
};

const LatestDevices = async () => {
  const data = await fetch(
    "http://localhost:3004/api/v1/get-latest-phone-home",
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );
  const posts: LatestDeviceInHomeData = await data.json();

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
                  <p className="hover:underline hover:text-blue-600 transition-all duration-200 ease-in-out">
                    {post.model}
                  </p>
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
