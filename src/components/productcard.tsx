import React from "react";
import Image from "next/image";

function ProductCard({
  img,
  price,
  title,
  discription,
  discount,
  country,
  id,
}: {
  img: string;
  id: number;
  price: String;
  title: String;
  discription: string;
  discount: String | number | null;
  country: String;
}) {
  const SliceSting = (string: string, n: number) => {
    if (string.length > n - 1) {
      const str = string.substring(0, n - 1) + "...";
      return str;
    
    }else{
      return string;
    }
  };

  return (
    <div
      key={id}
      className="w-full sm:w-[260px] p-3 md:p-1 select-none  cursor-pointer pb-2 mb-3  bg-sky-50 shadow-sm shadow-orange-400 h-full"
    >
      {/* card image  */}
      <div className="w-full h-[200px] md:h-[150px] relative">
        <Image src={img} alt="no image" fill={true} className="rounded-md" />
      </div>

      {/* card center  */}
      <div className="flex justify-between items-center p-1 pb-0.5 ">
        <div className="p-0.5 pb-0 cursor-pointer text-md ">{title}</div>
        <div className="p-0.5 pb-0 cursor-pointer text-md ">{country}</div>
      </div>

      {/* card discription  */}

      <div className="p-0.5 text-sm">{SliceSting(discription, 80)}</div>

      {/* card footer  */}

      <div className="flex justify-between items-center p-1">
        {discount ? (
          <div className="text-red-600 select-none">{price}</div>
        ) : (
          <div className="text-red-600 select-none">
            <del> {price}</del>
            {discount}
          </div>
        )}
        <div className="text-white bg-green-500 cursor-pointer p-1 rounded-md px-2 hover:bg-green-400 select-none">
          Add Card
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
