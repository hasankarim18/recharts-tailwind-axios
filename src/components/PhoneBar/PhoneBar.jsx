import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PhoneBar = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
      axios.get(
        "https://openapi.programming-hero.com/api/phones?search=iphone"
      )
      .then(data => {
        const loadedData = data.data.data 
      //  console.log(loadedData)

        const phonesData = loadedData.map(phone => {
            const  parts = phone.slug.split('-')
            const price = parseInt(parts[1], 10)

            const phoneInfo = {
              name: phone.phone_name,
              price: price,
            };

            return phoneInfo;
        })

       // console.log(phonesData)
        setPhones(phonesData)

      })
    }, [])

    const data = phones || [];
    
    return (
        <div className="p-8 border-t-orange-300 ">

            <BarChart
            width={500}
            height={300}
            data={data}
            > 
            
            <Bar dataKey="price" />
            <XAxis dataKey="name" />
            <YAxis dataKey="price" />

            </BarChart>
        </div>
    );
};

export default PhoneBar;