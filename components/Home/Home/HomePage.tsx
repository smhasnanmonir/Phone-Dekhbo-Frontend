import HomePageTop3New from "../HomePageTop3New/HomePageTop3New";
import LatestDevices from "../LatestDevices/LatestDevices";

import PhoneFinder from "../PhoneFinder/PhoneFinder";

export default function HomePage() {
  return (
    <div className="">
      <div className="grid grid-cols-[1fr_3fr] max-h-[350px]">
        <div className="">
          <PhoneFinder></PhoneFinder>
        </div>
        <div>
          <HomePageTop3New></HomePageTop3New>
        </div>
      </div>
      <div>
        <LatestDevices></LatestDevices>
      </div>
    </div>
  );
}
