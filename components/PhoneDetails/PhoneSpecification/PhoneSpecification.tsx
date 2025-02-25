import {
  BodySpec,
  ChipsetSpec,
  DisplaySpec,
  MemorySpec,
  SinglePhoneData,
} from "@/interface/singlePhoneResponse";
import {
  BadgeDollarSign,
  Cpu,
  DatabaseBackup,
  EarthLock,
  Monitor,
  ShieldCheck,
  TabletSmartphone,
} from "lucide-react";
import PhoneSpecReuseAble from "./PhoneSpecReuseAble/PhoneSpecReuseAble";
import PhoneSpecReuseAbleNested from "./PhoneSpecReuseAbleNested/PhoneSpecReuseAbleNested";

const PhoneSpecification = ({ device }: { device: SinglePhoneData }) => {
  console.log(device.data.specs[0]);
  return (
    <div>
      <h1 className="text-2xl font-semibold py-[8px] underline decoration-[2px] underline-offset underline-offset-[8px] decoration-blue-400">
        Specification
      </h1>
      {/* Price Div Starts */}
      <PhoneSpecReuseAble
        title={"Price"}
        secondDivTitle={"Market Price"}
        secondaryTitle={device?.data?.price}
        icon={BadgeDollarSign}
        secondDivParaOptional={"Taka"}
      ></PhoneSpecReuseAble>
      {/* Price Div Ends */}

      {/* Network Div Starts */}
      <PhoneSpecReuseAble
        title={"Network"}
        secondDivTitle={"Technologies"}
        secondaryTitle={device?.data?.specs[0]?.network}
        icon={EarthLock}
        secondDivParaOptional={""}
      ></PhoneSpecReuseAble>
      {/* Network Div Ends */}

      {/* Body Div Start */}
      <PhoneSpecReuseAbleNested
        title={"Body"}
        nestedData={device?.data?.specs[0]?.body as BodySpec}
        icon={TabletSmartphone}
      />
      {/* Body Div Ends */}

      {/* Display Div Start */}
      <PhoneSpecReuseAbleNested
        title={"Display"}
        nestedData={device?.data?.specs[0]?.display as DisplaySpec}
        icon={Monitor}
      />
      {/* Display Div Ends */}

      {/* Operating system Div Start */}
      <PhoneSpecReuseAble
        title={"Operating System"}
        secondDivTitle={"Released with:"}
        secondaryTitle={device?.data?.specs[0]?.os}
        icon={ShieldCheck}
        secondDivParaOptional={""}
      />
      {/* Operating system Div Ends */}

      {/* Chipset Div Start */}
      <PhoneSpecReuseAbleNested
        title={"Chipset"}
        nestedData={device?.data?.specs[0]?.chipset as ChipsetSpec}
        icon={Cpu}
      />
      {/* Chipset Div Ends */}

      {/* Memory Div Start */}
      <PhoneSpecReuseAbleNested
        title={"Memory"}
        nestedData={device?.data?.specs[0]?.memory as MemorySpec}
        icon={DatabaseBackup}
      />
      {/* Memory Div Ends */}
    </div>
  );
};

export default PhoneSpecification;
