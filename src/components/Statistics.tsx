// import Swiper core and required modules
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
  const [space, setSpace] = useState(3);

  return (
    <div className='w-4/5  my-24 mx-auto'>
      <h3 className='text-[#E7862E] font-normal'>Updates</h3>
      <div className='text-3xl font-extrabold ...'>
        <span className='bg-clip-text text-transparent bg-radial-text'>
          OGZ News
        </span>
      </div>

      <Swiper
        id='swiper-color'
        slidesPerView={width < 1440 ? 1.5 : 2.7}
        spaceBetween={width < 1440 ? 40 : 0}
        navigation={width < 768 ? false : true}
        modules={[Pagination, Navigation]}
        className='mySwiper my-8'
      >
        <SwiperSlide>
          <div
            className='w-48 md:w-[420px] h-[387px] 
           md:h-[187px] flex flex-col md:flex-row gap-2 shadow-2xl bg-[#2B1C16] rounded-lg'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full md:w-6/12'>
              <Image
                src='/images/update1.svg'
                alt='update1'
                fill
                className='object-cover rounded-tl-lg'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-center md:justify-center items-start md:items-start gap-0 text-slate-200 px-4 w-full md:w-1/2 h-1/2 md:h-full  text-sm'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100  base-normal'>
                Ogz helps schools in Chad
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-48 md:w-[420px] h-[387px] 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl bg-[#2B1C16] rounded-lg'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full md:w-6/12'>
              <Image
                src='/images/update2.svg'
                alt='update1'
                fill
                className='object-cover rounded-tl-lg'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-center md:justify-center items-start md:items-start gap-0 text-slate-200 px-4 w-full md:w-1/2 h-1/2 md:h-full  text-sm '>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100  base-normal mb-2'>
                Ogz helps schools in Chad
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-48 md:w-[420px] h-[387px] 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl bg-[#2B1C16] rounded-lg'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full md:w-6/12'>
              <Image
                src='/images/update3.svg'
                alt='update3'
                fill
                className='object-cover rounded-tl-lg'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-center md:justify-center items-start md:items-start gap-0 text-slate-200 px-4 w-full md:w-1/2 h-1/2 md:h-full  text-sm'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100  base-normal mb-2'>
                Ogz helps schools in Chad
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-48 md:w-[420px] h-[387px] 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl bg-[#2B1C16] rounded-lg'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full md:w-6/12'>
              <Image
                src='/images/update1.svg'
                alt='update1'
                fill
                className='object-cover rounded-tl-lg'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-center md:justify-center items-start md:items-start gap-0 text-slate-200 px-4 w-full md:w-1/2 h-1/2 md:h-full  text-sm'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100  base-normal mb-2'>
                Ogz helps schools in Chad
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-48 md:w-[420px] h-[387px] 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl bg-[#2B1C16] rounded-lg'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full md:w-6/12'>
              <Image
                src='/images/update1.svg'
                alt='update1'
                fill
                className='object-cover rounded-tl-lg'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-center md:justify-center items-start md:items-start gap-0 text-slate-200 px-4 w-full md:w-1/2 h-1/2 md:h-full  text-sm'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100  base-normal mb-2'>
                Ogz helps schools in Chad
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='w-48 md:w-[420px] h-[387px] 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl bg-[#2B1C16] rounded-lg'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full md:w-6/12'>
              <Image
                src='/images/update1.svg'
                alt='update1'
                fill
                className='object-cover rounded-tl-lg'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-center md:justify-center items-start md:items-start gap-0 text-slate-200 px-4 w-full md:w-1/2 h-1/2 md:h-full  text-sm'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100  base-normal mb-2'>
                Ogz helps schools in Chad
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <div className='blurDivLeft'></div> */}
        <div className='blurDivRight'></div>
      </Swiper>
    </div>
  );
}
