/* eslint-disable @next/next/no-img-element */
import type { Metadata, ResolvingMetadata } from "next";
import PhoneBrief from "@/components/PhoneDetails/PhoneBrief/PhoneBrief";
import PhoneSpecification from "@/components/PhoneDetails/PhoneSpecification/PhoneSpecification";
import ProsCons from "@/components/PhoneDetails/ProsCons/ProsCons";
import Rating from "@/components/PhoneDetails/Rating/Rating";
import { SinglePhoneData } from "@/interface/singlePhoneResponse";

// Metadata generation function
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Fetch phone data

  const resolvedParams = await params;

  const data = await fetch(
    `http://localhost:3004/api/v1/get-phone-slug/${resolvedParams?.slug}`,
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );

  const device: SinglePhoneData = await data.json();

  // Optionally access and extend parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  const deviceName = device?.data?.model;

  return {
    title: device?.data?.model,
    description: `${deviceName} price in bd, ${deviceName} price in Bangladesh. ${deviceName} full specification, ${deviceName} review, ${deviceName} release date, ${deviceName} camera, ${deviceName} battery, ${deviceName} display, ${deviceName} processor, ${deviceName} storage, ${deviceName} color, ${deviceName} weight, ${deviceName} dimensions, ${deviceName} water resistance, ${deviceName} ip rating, ${deviceName} audio, ${deviceName} video, ${deviceName} connectivity, ${deviceName} sensors, ${deviceName} other features. ${deviceName} price in bd is ${device?.data?.price}, ${deviceName} price in bangladesh is ${device?.data?.price}`,
    openGraph: {
      images: [device?.data?.image, ...previousImages],
    },
  };
}

// Page component
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  const data = await fetch(
    `http://localhost:3004/api/v1/get-phone-slug/${resolvedParams.slug}`,
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
    }
  );
  const device: SinglePhoneData = await data.json();

  return (
    <div className="pb-[20px]">
      <div>
        <h1 className="text-xl py-[20px]">{device?.data.model}</h1>
        <div className="grid grid-cols-2 place-content-center gap-3">
          <img
            src={device?.data?.image}
            alt={device?.data?.model}
            className="shadow-md rounded-sm w-full h-full object-cover"
          />
          <PhoneBrief device={device} />
        </div>
        <PhoneSpecification device={device}></PhoneSpecification>
        <ProsCons deviceProsCons={device?.data?.specs?.[0]}></ProsCons>
        <Rating deviceRating={device?.data?.specs?.[0]?.ratings} />
      </div>
    </div>
  );
};

export default Page;
