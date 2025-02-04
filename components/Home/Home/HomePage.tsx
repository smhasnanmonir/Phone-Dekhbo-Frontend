import NewsSection from "../NewsSection/NewsSection";
import PhoneFinder from "../PhoneFinder/PhoneFinder";

export default function HomePage() {
  return (
    <div className="grid grid-cols-[1fr_3fr] max-h-[350px]">
      <div className="">
        <PhoneFinder></PhoneFinder>
      </div>
      <div>
        <NewsSection></NewsSection>
      </div>
    </div>
  );
}
