// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import useDeviceSize from "@/hooks/useDeviceHook";
import { useEffect, useState } from "react";

export default function Statistics() {
  const [width, height] = useDeviceSize();
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [space, setSpace] = useState(0);

  useEffect(() => {
    if (width < 1024) {
      setSlidesPerView(2);
    } else {
      setSlidesPerView(3);
    }
  }, [width, height]);

  return (
    <div className='w-full md:w-4/5 mx-auto text-orange-400 p-2 my-24 '>
      <h3>Updates</h3>
      <h1 className='text-2xl md:text-3xl font-bold'>OGz News</h1>

      <Swiper
        id='swiper-color'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={width < 768 ? 100 : width < 1024 ? 250 : 400}
        slidesPerView={slidesPerView}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div
            className='bg-stone-900 w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update1.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz helps schools in Chad
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-stone-900 w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update2.svg'
                alt='update2'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-stone-900 w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-stone-900 w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-stone-900 w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg-stone-900 w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
