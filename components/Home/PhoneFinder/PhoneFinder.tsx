import phoneBrands from "@/const/PhoneBrand";

const PhoneFinder = () => {
  return (
    <div>
      <h1 className="py-[5px]">Phone Brands</h1>
      <div className="h-[1px] w-[90%] bg-black"></div>
      <div className="grid grid-cols-3">
        {phoneBrands.map((brand, index) => (
          <div key={index}>{brand}</div>
        ))}
      </div>
    </div>
  );
};

export default PhoneFinder;
