import React from 'react';

const PriceCard = ({ product }) => {
//    console.log(product);
  return (
    <div className=" bg-indigo-200 p-4 rounded-md ">
      <h5 className="text-1xl font-bold">{product?.title}</h5>
      <h4 className="text-2xl font-semibold text-rose-500">Price: ${product?.price}/-</h4>
    </div>
  );
};

export default PriceCard;