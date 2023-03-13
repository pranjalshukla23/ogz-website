// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaShareSquare } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import useDeviceSize from "@/hooks/useDeviceHook";
import { useEffect, useState } from "react";
import Statistics from "./Statistics";

export default function About() {
  const [width, height] = useDeviceSize();
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [space, setSpace] = useState(3);

  useEffect(() => {
    if (width <= 768) {
      setSlidesPerView(1);
    }
    if (width > 768 && width <= 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(2);
    }
  }, [width, height]);

  return (
    <div className='w-4/5 mx-auto text-orange-400 p-2 my-24 text-orangeLight'>
      <h3>About</h3>
      <h1 className='text-2xl md:text-2xl font-bold mb-6'>OGz Statistics</h1>

      <Swiper
        id='swiper-color'
        slidesPerView={2}
        spaceBetween={width < 1024 ? 350 : 100}
        navigation={width < 768 ? false : true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div
            className='bg-bgBrown4 w-60 md:w-[450px] h-80 
           md:h-[250px] flex flex-col justify-center items-center md:items-start gap-4  text-white text-xs md:text-md p-4 shadow-2xl rounded-lg'
          >
            <h1 className='text-lg md:text-xl font-bold'>
              Built on ETH and BSC
            </h1>
            <h3>OGz contract addresses:</h3>
            <div className=' flex flex-col md:flex-row gap-4'>
              <button className='btn text-center'>
                Etherscan (ETH) <FaShareSquare className='inline' />
              </button>
              <button className='btn text-center'>
                BscScan (BSC) <FaShareSquare className='inline' />
              </button>
            </div>

            <p>Circulating Supply: 118,000,000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-bgBrown4 w-60 md:w-[450px] h-80 
           md:h-[250px] flex flex-col justify-center items-center md:items-start gap-4  text-white text-xs md:text-md p-4 shadow-2xl rounded-lg'
          >
            <h1 className='text-lg md:text-xl font-bold'>Tokenomics</h1>
            <h3>Total Supply: 10,000,000,000,000</h3>
            <p>0.3% buy/sell tax on DEX</p>
            <p>25% of OGz Locker fees burned</p>
            <button className='btn text-center'>
              Operations and Funding
              <FaShareSquare className='inline' />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-bgBrown4 w-60 md:w-[450px] h-80 
           md:h-[250px] flex flex-col justify-center items-center md:items-start gap-4  text-white text-xs md:text-md p-4 shadow-2xl rounded-lg'
          >
            <h1 className='text-lg md:text-xl font-bold'>Tokenomics</h1>
            <h3>Total Supply: 10,000,000,000,000</h3>
            <p>0.3% buy/sell tax on DEX</p>
            <p>25% of OGz Locker fees burned</p>
            <button className='btn text-center break-keep'>
              Operations and Funding
              <FaShareSquare className='inline' />
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
