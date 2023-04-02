import React, { useEffect, useState } from 'react';
import PriceCard from './PriceCard';

const PriceList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then(data => setProducts(data.products));
    }, [])
  //  console.log(products);

    let showProduct = null;

    if(products.length >0){
        showProduct = products.map(item => <PriceCard product={item} key={item.id} />)
    }
    
    return (
      <div className="">
        <h2 className="text-6xl p-4 bg-rose-300 text-white text-center font-bold">
          Awesome Affordable Price
        </h2>
        <div className="md:container mx-auto">
          <div className=" pt-8 pb-8 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:ps-0 md:pr-0 ps-4 pr-4">
            {showProduct}
          </div>
        </div>
      </div>
    );
};

export default PriceList;