import {
  BatterySpec,
  BodySpec,
  CameraSpec,
  ChipsetSpec,
  ConnectionSpec,
  DisplaySpec,
  MemorySpec,
  PortsSpec,
  Ratings,
  SinglePhoneData,
  SoundSpec,
} from "@/interface/singlePhoneResponse";
import {
  BadgeDollarSign,
  Camera,
  Cpu,
  DatabaseBackup,
  EarthLock,
  Monitor,
  ShieldCheck,
  TabletSmartphone,
  BellDot,
  Wifi,
  Plug,
  BatteryCharging,
  Star,
} from "lucide-react";
import PhoneSpecReuseAble from "./PhoneSpecReuseAble/PhoneSpecReuseAble";

const PhoneSpecification = ({ device }: { device: SinglePhoneData }) => {
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
      <PhoneSpecReuseAble
        title={"Body"}
        nestedData={device?.data?.specs[0]?.body as BodySpec}
        icon={TabletSmartphone}
      />
      {/* Body Div Ends */}

      {/* Display Div Start */}
      <PhoneSpecReuseAble
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
      <PhoneSpecReuseAble
        title={"Chipset"}
        nestedData={device?.data?.specs[0]?.chipset as ChipsetSpec}
        icon={Cpu}
      />
      {/* Chipset Div Ends */}

      {/* Memory Div Start */}
      <PhoneSpecReuseAble
        title={"Memory"}
        nestedData={device?.data?.specs[0]?.memory as MemorySpec}
        icon={DatabaseBackup}
      />
      {/* Memory Div Ends */}

      {/* Camera Div Start */}
      <PhoneSpecReuseAble
        title={"Camera"}
        nestedData={device?.data?.specs[0]?.camera as CameraSpec}
        icon={Camera}
      />
      {/* Camera Div Ends */}

      {/* So Div Start */}
      <PhoneSpecReuseAble
        title={"Camera"}
        nestedData={device?.data?.specs[0]?.camera as CameraSpec}
        icon={Camera}
      />
      {/* Camera Div Ends */}

      {/* Sound Div Start */}
      <PhoneSpecReuseAble
        title={"Sound"}
        nestedData={device?.data?.specs[0]?.sound as SoundSpec}
        icon={BellDot}
      />
      {/* Sound Div Ends */}

      {/* Connection Div Start */}
      <PhoneSpecReuseAble
        title={"Connection"}
        nestedData={device?.data?.specs[0]?.connection as ConnectionSpec}
        icon={Wifi}
      />
      {/* Connection Div Ends */}

      {/* Ports Div Start */}
      <PhoneSpecReuseAble
        title={"Ports"}
        nestedData={device?.data?.specs[0]?.ports as PortsSpec}
        icon={Plug}
      />
      {/* Ports Div Ends */}

      {/* Battery Div Start */}
      <PhoneSpecReuseAble
        title={"Battery"}
        nestedData={device?.data?.specs[0]?.battery as BatterySpec}
        icon={BatteryCharging}
      />
      {/* Battery Div Ends */}

      {/* Ratings Div Start */}
      <PhoneSpecReuseAble
        title={"Ratings"}
        nestedData={device?.data?.specs[0]?.ratings as Ratings}
        icon={Star}
      />
      {/* Ratings Div Ends */}
    </div>
  );
};

export default PhoneSpecification;
