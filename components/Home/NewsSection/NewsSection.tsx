/* eslint-disable @next/next/no-img-element */
const NewsSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <img
            src="https://i.ibb.co.com/LDH11Cj6/gsmarena-008.jpg"
            alt="Main image"
            className="object-cover w-full h-[300px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="">
            <img
              src="https://i.ibb.co.com/LDH11Cj6/gsmarena-008.jpg"
              alt="Top right image"
              className="w-full h-[150px] object-cover"
            />
          </div>
          <div className="">
            <img
              src="https://i.ibb.co.com/LDH11Cj6/gsmarena-008.jpg"
              alt="Bottom right image"
              className="w-full h-[150px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
