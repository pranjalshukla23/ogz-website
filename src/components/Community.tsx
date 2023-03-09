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
  const [space, setSpace] = useState(0);

  return (
    <div className='w-full md:w-4/5 mx-auto text-orange-400 p-2 my-24 flex flex-col justify-start items-start  gap-12'>
      <h1 className='text-2xl md:text-3xl font-bold w-3/4 md:w-full'>
        Join the OGZ community
      </h1>

      <div className='block md:hidden'>
        {/* item1 */}
        <div className=' flex flex-row w-full h-40 gap-4'>
          {/* left side */}
          <div className=' h-full w-1/3 flex justify-center items-start'>
            {/* image container */}
            <Image
              src='/images/twitter.svg'
              alt='twitter'
              width={140}
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
        <div className='flex flex-row w-full h-40'>
          {/* left side */}
          <div className=' h-full w-1/3 flex justify-center items-start'>
            {/* image container */}
            <Image
              src='/images/insta.svg'
              alt='twitter'
              width={140}
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
        <div className=' flex flex-row w-full h-40'>
          {/* left side */}
          <div className=' h-full w-1/3 flex justify-center items-start'>
            {/* image container */}
            <Image
              src='/images/youtube.svg'
              alt='twitter'
              width={140}
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

      <div className='hidden md:block  w-full'>
        <Swiper
          id='swiper-color'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={width < 1024 ? 450 : 100}
          slidesPerView={slidesPerView}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {/* item1 */}
            <div className='flex flex-row w-[500px] h-36 gap-8 '>
              {/* left side */}
              <div className=' h-full w-1/3 flex justify-center items-start'>
                {/* image container */}
                <Image
                  src='/images/twitter.svg'
                  alt='twitter'
                  width={140}
                  height={200}
                  className='bg-creamy p-4 rounded'
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
            <div className='flex flex-row w-[500px] h-36 gap-8 '>
              {/* left side */}
              <div className=' h-full w-1/3 flex justify-center items-start'>
                {/* image container */}
                <Image
                  src='/images/insta.svg'
                  alt='twitter'
                  width={140}
                  height={200}
                  className='bg-creamy p-4 rounded'
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
            {/* item1 */}
            <div className='flex flex-row w-[500px] h-36 gap-8 '>
              {/* left side */}
              <div className=' h-full w-1/3 flex justify-center items-start'>
                {/* image container */}
                <Image
                  src='/images/youtube.svg'
                  alt='twitter'
                  width={140}
                  height={200}
                  className='bg-creamy p-4 rounded'
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
        </Swiper>
      </div>
    </div>
  );
}
