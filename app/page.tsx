import NewsSection from "@/components/Home/NewsSection/NewsSection";
import PhoneFinder from "@/components/Home/PhoneFinder/PhoneFinder";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-[1fr_3fr]">
        <div>
          <PhoneFinder></PhoneFinder>
        </div>
        <div>
          <NewsSection></NewsSection>
        </div>
      </div>
    </div>
  );
}
