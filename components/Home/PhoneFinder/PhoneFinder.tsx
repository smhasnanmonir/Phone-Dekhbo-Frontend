import phoneBrands from "@/const/PhoneBrand";
import Link from "next/link";

import { ShieldQuestionIcon, Smartphone } from "lucide-react";

const PhoneFinder = () => {
  return (
    <div className="grid h-full items-center">
      <h1 className="py-[5px] font-semibold">Phone Brands</h1>
      <div className="h-[1px] w-[90%] bg-black"></div>
      <div className="grid grid-cols-3">
        {phoneBrands.slice(0, 33).map((brand) => (
          <Link
            className="block hover:bg-[#89C2D9] max-w-fit"
            key={brand}
            href={`/smartphone/${brand}`}
          >
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </Link>
        ))}
      </div>
      <div className="flex h-full gap-2 items-center justify-center mt-auto bg-slate-100 px-[10px]">
        <Link
          className=" px-[7px] py-[5px] bg-[#01497C] hover:bg-[#0095ff] transition-all duration-150 ease-linear"
          href="/"
        >
          <div className="flex">
            <Smartphone className="text-white" />
            <h1 className="text-white">All Brands</h1>
          </div>
        </Link>

        <Link
          className=" px-[7px] py-[5px] bg-[#01497C] hover:bg-[#0095ff] transition-all duration-150 ease-linear"
          href="/"
        >
          <div className="flex">
            <ShieldQuestionIcon className="text-white" />
            <h1 className="text-white">Rumored Phone</h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PhoneFinder;
