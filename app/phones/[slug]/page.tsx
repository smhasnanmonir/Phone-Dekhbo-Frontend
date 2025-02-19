/* eslint-disable @next/next/no-img-element */
import PhoneBrief from "@/components/PhoneDetails/PhoneBrief/PhoneBrief";
import ProsCons from "@/components/PhoneDetails/ProsCons/ProsCons";
import { SinglePhoneData } from "@/interface/singlePhoneResponse";

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
  console.log("specs =>", device?.data?.specs);
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
          <ProsCons device={device}></ProsCons>
        </div>
      </div>
    </div>
  );
};

export default Page;
