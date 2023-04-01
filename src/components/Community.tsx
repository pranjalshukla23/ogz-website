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
    <div className='card w-4/5  text-orange-400 my-24 flex flex-col justify-center items-start  gap-4  shadow-2xl border-2 border-shade2 rounded-3xl mx-auto '>
      <div className='text-2xl md:text-3xl font-extrabold p-6'>
        <span className='bg-clip-text text-transparent bg-radial-text'>
          Join the OGZ community
        </span>
      </div>

      {/* mobile  */}
      <div className='flex md:hidden flex-col justify-between items-end gap-4  w-full'>
        {/* item1 */}
        <div className='bg-shade4 flex flex-row  w-3/4 h-28  shadow-2xl rounded-md '>
          {/* left side */}
          <div className='flex justify-center items-start translate-y-4 -translate-x-6'>
            {/* image container */}
            <Image
              src='/images/twitter.svg'
              alt='twitter'
              width={54}
              height={54}
              className='bg-radial-card2 p-2 rounded'
            />
          </div>
          {/* right side */}
          <div className=' flex flex-col justify-evenly items-start md:items-start w-full h-full text-orange-400 font-bold gap-1'>
            <h1 className='text-md md:text-3xl text-orangeLight'>
              Follow us on Twitter
            </h1>
            <p className='text-white bg-shade5 p-2 w-full md:w-1/2 text-center rounded-md'>
              41000 Followers
            </p>
          </div>
        </div>

        {/* item2 */}
        <div className='bg-shade4 flex flex-row  w-3/4 h-28  shadow-2xl rounded-md '>
          {/* left side */}
          <div className='flex justify-center items-start translate-y-4 -translate-x-6'>
            {/* image container */}
            <Image
              src='/images/insta.svg'
              alt='twitter'
              width={54}
              height={54}
              className='bg-radial-card2 p-2 rounded'
            />
          </div>
          {/* right side */}
          <div className=' flex flex-col justify-evenly items-start md:items-start w-full h-full text-orange-400 font-bold gap-1'>
            <h1 className='text-md md:text-3xl text-orangeLight'>
              Follow us on Instagram
            </h1>
            <p className='text-white bg-shade5 p-2 w-full md:w-1/2 text-center rounded-md'>
              41000 Followers
            </p>
          </div>
        </div>

        {/* item3 */}
        <div className='bg-shade4 flex flex-row  w-3/4 h-28  shadow-2xl rounded-md '>
          {/* left side */}
          <div className='flex justify-center items-start translate-y-4 -translate-x-6'>
            {/* image container */}
            <Image
              src='/images/telegram.svg'
              alt='twitter'
              width={54}
              height={54}
              className='bg-radial-card2 p-2 rounded'
            />
          </div>
          {/* right side */}
          <div className=' flex flex-col justify-evenly items-start md:items-start w-full h-full text-orange-400 font-bold gap-1'>
            <h1 className='text-md md:text-3xl text-orangeLight'>
              Follow us on Telegram
            </h1>
            <p className='text-white bg-shade5 p-2 w-full md:w-1/2 text-center rounded-md'>
              41000 Followers
            </p>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className='hidden md:block  w-full '>
        <Swiper
          id='swiper-color'
          slidesPerView={width < 1440 ? 1.5 : 2.2}
          spaceBetween={width < 1440 ? 50 : 20}
          navigation={width < 768 ? false : true}
          modules={[Pagination, Navigation]}
          className='mySwiper my-4'
        >
          <SwiperSlide>
            {/* item1 */}
            <div className='bg-shade4 shadow-2xl  flex flex-row w-[500px] h-36 gap-8 ml-8 transform pl-6 rounded-md'>
              {/* left side */}
              <div
                className='flex justify-center items-start translate-y-4 -translate-x-12 
               w-28 h-[100px] relative'
              >
                {/* image container */}
                <Image
                  src='/images/twitter.svg'
                  alt='twitter'
                  fill
                  className='bg-radial-card2 p-4 rounded object-fit'
                />
              </div>
              {/* right side */}
              <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-0'>
                <h1 className='text-md md:text-lg'>Follow us on Twitter</h1>
                <p className='text-white bg-shade5 p-2 w-full md:w-2/4 md:text-center rounded-md'>
                  41000 Followers
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* item2 */}
            <div className='bg-shade4 shadow-2xl  flex flex-row w-[500px] h-36 gap-8 ml-8 rounded-md'>
              {/* left side */}
              <div
                className='flex justify-center items-start translate-y-4 -translate-x-12 
               w-28 h-[100px] relative'
              >
                {/* image container */}
                <Image
                  src='/images/insta.svg'
                  alt='twitter'
                  fill
                  className='bg-radial-card2 p-4 rounded object-fit'
                />
              </div>
              {/* right side */}
              <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-0'>
                <h1 className='text-md md:text-lg'>Follow us on Instagram</h1>
                <p className='text-white bg-shade5 p-2 w-full md:w-2/4 md:text-center rounded-md'>
                  41000 Followers
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            {/* item3 */}
            <div className='bg-shade4 shadow-2xl  flex flex-row w-[500px] h-36 gap-8 ml-8 rounded-md'>
              {/* left side */}
              <div
                className='flex justify-center items-start translate-y-4 -translate-x-12 
               w-28 h-[100px] relative'
              >
                {/* image container */}
                <Image
                  src='/images/youtube.svg'
                  alt='twitter'
                  fill
                  className='bg-radial-card2 p-4 rounded object-fit'
                />
              </div>
              {/* right side */}
              <div className=' flex flex-col justify-evenly items-center md:items-start w-full h-full text-orange-400 font-bold gap-0'>
                <h1 className='text-md md:text-lg'>Follow us on Youtube</h1>
                <p className='text-white bg-shade5 p-2 w-full md:w-2/4 md:text-center rounded-md'>
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
