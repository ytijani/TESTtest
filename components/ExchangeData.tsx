'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { data } from "@/app/data/data";

interface CurrencyData {
  currency_label: string;
  purchase: {
    Course: string;
    Change: string; 
    "High of year": string;
    "Low of year": string;
  };
  sale: {
    Course: string;
    Change: string; 
    "High of year": string;
    "Low of year": string;
  };
}



const ExchangeData = () => {
  const [exchangeRates, setExchangeRates] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    setExchangeRates(data);
    setLoading(false)
  
  },[])
  


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex((prevIndex) => (prevIndex + 1) % Math.max(exchangeRates.length - 5, 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [exchangeRates, currentStartIndex]);

  
  const currentRatesToDisplay = exchangeRates.slice(currentStartIndex, currentStartIndex + 8);
  console.log(currentRatesToDisplay)

  return (
    <div className=" w-full md:w-[70%] flex flex-col order-1 md:order-2 h-full">
      {/* Header */}
      <h2 className="text-gray-700 h-[6vh] md:h-[9vh] font-semibold text-[16px] md:text-[20px] bg-white 
        rounded-t-[8px] px-[42px] py-0 flex items-center transition-colors duration-300">
        Taux de change
      </h2>

      {/* Table Header */}
      <div className="grid grid-cols-3 px-4 md:px-[36px] py-0 h-[5vh] md:h-[7vh] bg-[#f4f4f4] text-[10px] md:text-[12px] font-medium
       text-black items-center gap-[8rem] md:gap-[17vw]">
        <div>Devise</div>
        <div>Prix Achat</div>
        <div>Prix Vente</div>
      </div>

      {/* Content */}
      <div className="bg-white flex-grow relative overflow-hidden">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : currentRatesToDisplay.length > 0 ? (
          <div className="">
            {currentRatesToDisplay.map((rate, index) => (
              <React.Fragment key={index}>
                <div
                  className={`grid grid-cols-3 gap-[7rem] md:gap-[14vw] px-4 md:px-[42px] border-b last:border-none h-[5vh] md:h-[8vh] items-center transition-all duration-30`}
                >
                  <div className="flex items-center gap-4  md:gap-[1.5vw]">
                    <Image
                      src={`/flags/${rate.currency_label.split(" ")[0]}.svg`}
                      alt={rate.currency_label}
                      width={30}
                      height={30}
                      className="rounded-full transition-transform duration-300 "
                    />
                    <div className="flex flex-col text-center">
                      <span className="font-medium text-[8px] md:text-[13px] transition-colors duration-300">
                        {rate.currency_label.split(" ")[0]}
                      </span>
                      <span className="font-light text-[7px] md:text-[8px] text-gray-700">
                        {rate.currency_label}
                      </span>
                    </div>
                  </div>

                  {/* Display Purchase Price and Change */}
                  <div className="flex items-center text-[12px] md:text-[17px] font-medium">
                    {rate.purchase.Course}
                    <span className={`ml-2 text-[7px] md:text-[9px] ${parseFloat(rate.purchase.Change.replace(',', '.')) < 0 ? 'text-red-500' : 'text-green-500'}`}>
                      ({parseFloat(rate.purchase.Change.replace(',', '.')) >= 0 ? '+' : ''}{rate.purchase.Change})
                    </span>
                  </div>

                  {/* Display Sale Price and Change */}
                  <div className="flex items-center text-[12px] md:text-[17px] font-medium">
                    {rate.sale.Course}
                    <span className={`ml-2  text-[7px] md:text-[9px] ${parseFloat(rate.sale.Change.replace(',', '.')) < 0 ? 'text-red-500' : 'text-green-500'}`}>
                      ({parseFloat(rate.sale.Change.replace(',', '.')) >= 0 ? '+' : ''}{rate.sale.Change})
                    </span>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            No exchange rates available.
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeData;
