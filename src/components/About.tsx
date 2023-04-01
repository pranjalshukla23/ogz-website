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
    <div className='w-11/12 md:w-4/5 mx-auto text-orange-400 p-2 my-24 text-orangeLight '>
      <h3>About</h3>
      <div className='text-3xl font-extrabold ...'>
        <span className='bg-clip-text text-transparent bg-radial-text'>
          OGZ Statistics
        </span>
      </div>

      <Swiper
        id='swiper-color'
        slidesPerView={width < 1440 ? 1.5 : 2.2}
        spaceBetween={width < 1440 ? 50 : 20}
        navigation={width < 768 ? false : true}
        modules={[Pagination, Navigation]}
        className='mySwiper my-4'
      >
        <SwiperSlide>
          <div
            className='bg-[#2B1C16] w-52 md:w-[464px] h-60 
           md:h-[241px] flex flex-col justify-center items-start md:items-start gap-5 text-white text-xs md:text-2xl p-8 shadow-2xl rounded-lg '
          >
            <h1 className='text-lg md:text-xl font-bold'>Built on BNB</h1>
            <h3 className='text-base'>OGz contract addresses:</h3>
            <div className=' flex flex-col md:flex-row gap-4'>
              <button className='btn text-center text-sm'>
                BscScan (BSC) <FaShareSquare className='inline' />
              </button>
            </div>

            <p className='text-sm'>Circulating Supply: 118,000,000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-[#2B1C16] w-60 md:w-[464px] h-60 
           md:h-[241px] flex flex-col justify-center items-start md:items-start gap-5 text-white text-xs md:text-2xl p-8 shadow-2xl rounded-lg'
          >
            <h1 className='text-lg md:text-xl font-bold'>Tokenomics</h1>
            <ul>
              <li className='text-sm pb-1'>Total Supply: 10,000,000,000,000</li>
              <li className='text-sm pb-1'>0.3% buy/sell tax on DEX</li>
              <li className='text-sm pb-1'>25% of OGz Locker fees burned</li>
            </ul>

            <button className='btn text-center text-sm'>
              Operations and Funding
              <FaShareSquare className='inline' />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-[#2B1C16] w-60 md:w-[464px] h-60 
           md:h-[241px] flex flex-col justify-center items-start md:items-start gap-5 text-white text-xs md:text-2xl p-8 shadow-2xl rounded-lg'
          >
            <h1 className='text-lg md:text-xl font-bold'>Tokenomics</h1>
            <ul>
              <li className='text-sm pb-1'>Total Supply: 10,000,000,000,000</li>
              <li className='text-sm pb-1'>0.3% buy/sell tax on DEX</li>
              <li className='text-sm pb-1'>25% of OGz Locker fees burned</li>
            </ul>

            <button className='btn text-center text-sm'>
              Operations and Funding
              <FaShareSquare className='inline' />
            </button>
          </div>
        </SwiperSlide>
        {/* <div className='blurDivLeft'></div> */}
        <div className='blurDivRight'></div>
      </Swiper>
    </div>
  );
}
