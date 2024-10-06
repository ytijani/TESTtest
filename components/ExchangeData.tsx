'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";

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

const data = [
  {
      "currency_label": "EUR 1",
      "purchase": {
          "Course": "10,484",
          "Change": "-0,06",
          "High of year": "10,671",
          "Low of year": "10,359"
      },
      "sale": {
          "Course": "11,127",
          "Change": "-0,05",
          "High of year": "11,325",
          "Low of year": "10,994"
      }
  },
  {
      "currency_label": "EUR 1",
      "purchase": {
          "Course": "10,484",
          "Change": "-0,16",
          "High of year": "10,671",
          "Low of year": "10,359"
      },
      "sale": {
          "Course": "11,127",
          "Change": "-0,16",
          "High of year": "11,325",
          "Low of year": "10,994"
      }
  },
  {
      "currency_label": "USD 1",
      "purchase": {
          "Course": "9,503",
          "Change": "-0,03",
          "High of year": "9,904",
          "Low of year": "9,375"
      },
      "sale": {
          "Course": "10,086",
          "Change": "-0,03",
          "High of year": "10,511",
          "Low of year": "9,950"
      }
  },
  {
      "currency_label": "USD 1",
      "purchase": {
          "Course": "9,503",
          "Change": "-0,14",
          "High of year": "9,904",
          "Low of year": "9,375"
      },
      "sale": {
          "Course": "10,086",
          "Change": "-0,13",
          "High of year": "10,511",
          "Low of year": "9,950"
      }
  },
  {
      "currency_label": "CAD 1",
      "purchase": {
          "Course": "7,008",
          "Change": "-0,34",
          "High of year": "7,276",
          "Low of year": "6,887"
      },
      "sale": {
          "Course": "7,438",
          "Change": "-0,34",
          "High of year": "7,723",
          "Low of year": "7,310"
      }
  },
  {
      "currency_label": "CAD 1",
      "purchase": {
          "Course": "7,008",
          "Change": "-0,44",
          "High of year": "7,276",
          "Low of year": "6,887"
      },
      "sale": {
          "Course": "7,438",
          "Change": "-0,44",
          "High of year": "7,723",
          "Low of year": "7,310"
      }
  },
  {
      "currency_label": "GBP 1",
      "purchase": {
          "Course": "12,493",
          "Change": "-0,13",
          "High of year": "12,655",
          "Low of year": "12,145"
      },
      "sale": {
          "Course": "13,259",
          "Change": "-0,13",
          "High of year": "13,431",
          "Low of year": "12,889"
      }
  },
  {
      "currency_label": "GBP 1",
      "purchase": {
          "Course": "12,493",
          "Change": "-0,23",
          "High of year": "12,655",
          "Low of year": "12,145"
      },
      "sale": {
          "Course": "13,259",
          "Change": "-0,23",
          "High of year": "13,431",
          "Low of year": "12,889"
      }
  },
  {
      "currency_label": "GIP 1",
      "purchase": {
          "Course": "12,493",
          "Change": "-0,13",
          "High of year": "12,672",
          "Low of year": "12,145"
      },
      "sale": {
          "Course": "13,259",
          "Change": "-0,13",
          "High of year": "13,449",
          "Low of year": "12,889"
      }
  },
  {
      "currency_label": "GIP 1",
      "purchase": {
          "Course": "12,493",
          "Change": "-0,23",
          "High of year": "12,672",
          "Low of year": "12,145"
      },
      "sale": {
          "Course": "13,259",
          "Change": "-0,23",
          "High of year": "13,449",
          "Low of year": "12,889"
      }
  },
  {
      "currency_label": "CHF 1",
      "purchase": {
          "Course": "11,157",
          "Change": "0,05",
          "High of year": "11,418",
          "Low of year": "10,545"
      },
      "sale": {
          "Course": "11,841",
          "Change": "0,05",
          "High of year": "12,119",
          "Low of year": "11,192"
      }
  },
  {
      "currency_label": "CHF 1",
      "purchase": {
          "Course": "11,157",
          "Change": "-0,05",
          "High of year": "11,418",
          "Low of year": "10,545"
      },
      "sale": {
          "Course": "11,841",
          "Change": "-0,05",
          "High of year": "12,119",
          "Low of year": "11,192"
      }
  },
  {
      "currency_label": "SEK 100",
      "purchase": {
          "Course": "88,937",
          "Change": "0,00",
          "High of year": "95,469",
          "Low of year": "88,898"
      },
      "sale": {
          "Course": "94,391",
          "Change": "0,00",
          "High of year": "101,324",
          "Low of year": "94,349"
      }
  },
  {
      "currency_label": "NOK 100",
      "purchase": {
          "Course": "94,448",
          "Change": "0,00",
          "High of year": "94,448",
          "Low of year": "94,448"
      },
      "sale": {
          "Course": "100,240",
          "Change": "0,00",
          "High of year": "100,240",
          "Low of year": "100,240"
      }
  },
  {
      "currency_label": "SAR 1",
      "purchase": {
          "Course": "2,531",
          "Change": "-0,08",
          "High of year": "2,640",
          "Low of year": "2,498"
      },
      "sale": {
          "Course": "2,686",
          "Change": "-0,07",
          "High of year": "2,802",
          "Low of year": "2,652"
      }
  },
  {
      "currency_label": "SAR 1",
      "purchase": {
          "Course": "2,531",
          "Change": "-0,16",
          "High of year": "2,640",
          "Low of year": "2,498"
      },
      "sale": {
          "Course": "2,686",
          "Change": "-0,19",
          "High of year": "2,802",
          "Low of year": "2,652"
      }
  },
  {
      "currency_label": "KWD 1",
      "purchase": {
          "Course": "31,056",
          "Change": "-0,10",
          "High of year": "32,135",
          "Low of year": "30,701"
      },
      "sale": {
          "Course": "32,961",
          "Change": "-0,10",
          "High of year": "34,106",
          "Low of year": "32,584"
      }
  },
  {
      "currency_label": "KWD 1",
      "purchase": {
          "Course": "31,056",
          "Change": "-0,20",
          "High of year": "32,135",
          "Low of year": "30,701"
      },
      "sale": {
          "Course": "32,961",
          "Change": "-0,20",
          "High of year": "34,106",
          "Low of year": "32,584"
      }
  },
  {
      "currency_label": "AED 1",
      "purchase": {
          "Course": "2,587",
          "Change": "-0,04",
          "High of year": "2,697",
          "Low of year": "2,552"
      },
      "sale": {
          "Course": "2,746",
          "Change": "-0,04",
          "High of year": "2,862",
          "Low of year": "2,709"
      }
  },
  {
      "currency_label": "AED 1",
      "purchase": {
          "Course": "2,587",
          "Change": "-0,15",
          "High of year": "2,697",
          "Low of year": "2,552"
      },
      "sale": {
          "Course": "2,746",
          "Change": "-0,15",
          "High of year": "2,862",
          "Low of year": "2,709"
      }
  },
  {
      "currency_label": "QAR 1",
      "purchase": {
          "Course": "2,606",
          "Change": "-0,04",
          "High of year": "2,716",
          "Low of year": "2,571"
      },
      "sale": {
          "Course": "2,766",
          "Change": "-0,04",
          "High of year": "2,882",
          "Low of year": "2,729"
      }
  },
  {
      "currency_label": "QAR 1",
      "purchase": {
          "Course": "2,606",
          "Change": "-0,15",
          "High of year": "2,716",
          "Low of year": "2,571"
      },
      "sale": {
          "Course": "2,766",
          "Change": "-0,14",
          "High of year": "2,882",
          "Low of year": "2,729"
      }
  },
  {
      "currency_label": "BHD 1",
      "purchase": {
          "Course": "25,207",
          "Change": "-0,03",
          "High of year": "26,271",
          "Low of year": "24,873"
      },
      "sale": {
          "Course": "26,753",
          "Change": "-0,03",
          "High of year": "27,882",
          "Low of year": "26,399"
      }
  },
  {
      "currency_label": "BHD 1",
      "purchase": {
          "Course": "25,207",
          "Change": "-0,14",
          "High of year": "26,271",
          "Low of year": "24,873"
      },
      "sale": {
          "Course": "26,753",
          "Change": "-0,13",
          "High of year": "27,882",
          "Low of year": "26,399"
      }
  },
  {
      "currency_label": "JPY 100",
      "purchase": {
          "Course": "6,497",
          "Change": "0,02",
          "High of year": "6,806",
          "Low of year": "5,926"
      },
      "sale": {
          "Course": "6,895",
          "Change": "0,02",
          "High of year": "7,223",
          "Low of year": "6,289"
      }
  },
  {
      "currency_label": "JPY 100",
      "purchase": {
          "Course": "6,497",
          "Change": "-0,09",
          "High of year": "6,806",
          "Low of year": "5,926"
      },
      "sale": {
          "Course": "6,895",
          "Change": "-0,09",
          "High of year": "7,223",
          "Low of year": "6,289"
      }
  },
  {
      "currency_label": "OMR 100",
      "purchase": {
          "Course": "24,677",
          "Change": "-0,06",
          "High of year": "25,724",
          "Low of year": "24,350"
      },
      "sale": {
          "Course": "26,191",
          "Change": "-0,06",
          "High of year": "27,301",
          "Low of year": "25,843"
      }
  },
  {
      "currency_label": "OMR 100",
      "purchase": {
          "Course": "24,677",
          "Change": "-0,16",
          "High of year": "25,724",
          "Low of year": "24,350"
      },
      "sale": {
          "Course": "26,191",
          "Change": "-0,16",
          "High of year": "27,301",
          "Low of year": "25,843"
      }
  }
]
// const API_URL = "http://127.0.0.1:8000/api/v1/data";

const ExchangeData = () => {
  const [exchangeRates, setExchangeRates] = useState<CurrencyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    setExchangeRates(data);
    setLoading(false)
  
  },[])
  
  // useEffect(() => {
    // async function fetchExchangeRates() {
    //   try {
        // setLoading(true);
        // const res = await axios.get(API_URL);
        // console.log("Fetched exchange rates:", res.data);

        // if (Array.isArray(res.data)) {
  //       } else {
  //         console.error("Data is not in expected format:", res.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching exchange rates:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchExchangeRates();
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStartIndex((prevIndex) => (prevIndex + 1) % Math.max(exchangeRates.length - 5, 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [exchangeRates, currentStartIndex]);

  
  const currentRatesToDisplay = exchangeRates.slice(currentStartIndex, currentStartIndex + 8);
  console.log(currentRatesToDisplay)

  return (
    <div className="w-full h-[60%] md:w-[60%] flex flex-col order-1 md:order-2  animate-fadeIn md:h-full">
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
