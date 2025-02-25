import { SinglePhoneData } from "@/interface/singlePhoneResponse";

const ProsCons = ({ device }: { device: SinglePhoneData }) => {
  return (
    <div>
      <h1 className="py-[16px] text-2xl underline decoration-[2px] underline-offset underline-offset-[8px] decoration-blue-400">
        Pros and Cons
      </h1>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-400 p-3 rounded-sm">
          <h1 className=" text-white text-xl font-semibold">Pros</h1>
          <ul className=" text-white ">
            {device?.data?.specs[0]?.pros?.map((pro, index) => (
              <li className="style-none" key={index}>
                {index + 1}
                {": "}
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-400 p-3 rounded-sm">
          <h1 className="font-semibold text-xl text-white">Cons</h1>
          <ul className=" text-white ">
            {device?.data?.specs[0]?.cons?.map((pro, index) => (
              <li className="style-none" key={index}>
                {index + 1}
                {": "}
                {pro}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProsCons;
