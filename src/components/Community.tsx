import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import useDeviceSize from "@/hooks/useDeviceHook";
import { useEffect, useState } from "react";

export default function Community() {
  const [width, height] = useDeviceSize();
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [space, setSpace] = useState(3);

  return (
    <div className='card w-4/5  text-orange-400 my-24 flex flex-col justify-start items-start  gap-4 text-orangeLight shadow-2xl rounded-md'>
      <h1 className='text-2xl md:text-3xl font-bold w-3/4 md:w-full p-6'>
        Join the OGZ community
      </h1>

      {/* mobile  */}
      <div className='flex md:hidden flex-col justify-between gap-4  w-full'>
        {/* item1 */}
        <div className='card2 flex flex-row translate-x-6 h-40 gap-4 shadow-2xl rounded-md'>
          {/* left side */}
          <div className='flex justify-center items-start translate-y-4 -translate-x-6'>
            {/* image container */}
            <Image
              src='/images/twitter.svg'
              alt='twitter'
              width={100}
              height={200}
              className='bg-creamy p-4 rounded'
            />
          </div>
          {/* right side */}
          <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-4'>
            <h1 className='text-md md:text-3xl'>Follow us on Twitter</h1>
            <p className='text-white bg-creamy p-4 w-full md:w-1/2 md:text-center'>
              41000 Followers
            </p>
          </div>
        </div>

        {/* item2 */}
        <div className='card2 shadow-2xl flex flex-row translate-x-6 h-40 gap-4 rounded-md'>
          {/* left side */}
          <div className='flex justify-center items-start translate-y-4 -translate-x-6'>
            {/* image container */}
            <Image
              src='/images/insta.svg'
              alt='twitter'
              width={100}
              height={200}
              className='bg-creamy p-4 md:p-10 rounded'
            />
          </div>
          {/* right side */}
          <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-4'>
            <h1 className='text-md md:text-3xl'>Follow us on Instagram</h1>
            <p className='text-white bg-creamy p-4 w-full md:w-1/2 md:text-center'>
              91000 Followers
            </p>
          </div>
        </div>

        {/* item3 */}
        <div className='card2 shadow-2xl  flex flex-row translate-x-6 h-40 gap-4 rounded-md'>
          {/* left side */}
          <div className='flex justify-center items-start translate-y-4 -translate-x-6'>
            {/* image container */}
            <Image
              src='/images/youtube.svg'
              alt='twitter'
              width={100}
              height={200}
              className='bg-creamy p-4 md:p-10 rounded'
            />
          </div>
          {/* right side */}
          <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-4'>
            <h1 className='text-md md:text-3xl'>Follow us on Youtube</h1>
            <p className='text-white bg-creamy p-4 w-full md:w-1/2 md:text-center'>
              12000 Followers
            </p>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className='hidden md:block  w-full '>
        <Swiper
          id='swiper-color'
          slidesPerView={width < 1440 ? 1.5 : 2.2}
          spaceBetween={width < 1440 ? 40 : 0}
          navigation={width < 768 ? false : true}
          modules={[Pagination, Navigation]}
          className='mySwiper my-4'
        >
          <SwiperSlide>
            {/* item1 */}
            <div className='card2 shadow-2xl  flex flex-row w-[500px] h-36 gap-8 ml-8 transform pl-6 rounded-md'>
              {/* left side */}
              <div
                className='flex justify-center items-start translate-y-4 -translate-x-12 
               w-32 h-[100px] relative'
              >
                {/* image container */}
                <Image
                  src='/images/twitter.svg'
                  alt='twitter'
                  fill
                  className='bg-creamy p-8 rounded-lg'
                />
              </div>
              {/* right side */}
              <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-0'>
                <h1 className='text-md md:text-2xl'>Follow us on Twitter</h1>
                <p className='text-white bg-creamy p-2 w-full md:w-1/2 md:text-center'>
                  41000 Followers
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* item2 */}
            <div className='card2 shadow-2xl  flex flex-row w-[500px] h-36 gap-8 ml-8 rounded-md'>
              {/* left side */}
              <div
                className='flex justify-center items-start translate-y-4 -translate-x-12 
               w-32 h-[100px] relative'
              >
                {/* image container */}
                <Image
                  src='/images/insta.svg'
                  alt='twitter'
                  fill
                  className='bg-creamy p-8 rounded-lg'
                />
              </div>
              {/* right side */}
              <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-0'>
                <h1 className='text-md md:text-2xl'>Follow us on Instagram</h1>
                <p className='text-white bg-creamy p-2 w-full md:w-1/2 md:text-center'>
                  91000 Followers
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* item3 */}
            <div className='card2 shadow-2xl  flex flex-row w-[500px] h-36 gap-8 ml-8 rounded-md'>
              {/* left side */}
              <div
                className='flex justify-center items-start translate-y-4 -translate-x-12 
               w-32 h-[100px] relative'
              >
                {/* image container */}
                <Image
                  src='/images/youtube.svg'
                  alt='twitter'
                  fill
                  className='bg-creamy p-8 rounded-lg'
                />
              </div>
              {/* right side */}
              <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-0'>
                <h1 className='text-md md:text-2xl'>Follow us on Youtube</h1>
                <p className='text-white bg-creamy p-2 w-full md:w-1/2 md:text-center'>
                  41000 Followers
                </p>
              </div>
            </div>
          </SwiperSlide>
          <div className='blurDivRight2'></div>
        </Swiper>
      </div>
    </div>
  );
}
