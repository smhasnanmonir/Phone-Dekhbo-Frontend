/* eslint-disable @next/next/no-img-element */
const HomePageTop3New = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-3">
        <div className="col-span-2 overflow-hidden">
          <img
            src="https://i.ibb.co.com/LDH11Cj6/gsmarena-008.jpg"
            alt="Main image"
            className="object-cover object-top w-full h-[350px] hover:scale-[1.05] transition-all duration-300 ease-linear cursor-pointer"
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="overflow-hidden">
            <img
              src="https://i.ibb.co.com/LDH11Cj6/gsmarena-008.jpg overflow-hidden"
              alt="Top right image"
              className="object-cover object-top w-full h-[175px] hover:scale-[1.05] transition-all duration-300 ease-linear cursor-pointer"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src="https://i.ibb.co.com/LDH11Cj6/gsmarena-008.jpg"
              alt="Bottom right image"
              className="object-cover object-top w-full overflow-hidden h-[175px] hover:scale-[1.05] transition-all duration-300 ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTop3New;
