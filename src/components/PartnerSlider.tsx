import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState, useEffect, useRef, ReactElement } from "react";
import useDeviceSize from "@/hooks/useDeviceHook";
import ArrowButton from "./ArrowButton";
import SliderArrow from "./SliderArrow";

interface Settings {
  arrows: boolean;
  infinite: boolean;
  speed: number;
  slidesToScroll: number;
  slidesToShow?: number;
}

export default function PartnerSlider() {
  const [width, height] = useDeviceSize();
  const slider = useRef<any>();
  const [settings, setSettings] = useState<Settings>({
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
  });

  useEffect(() => {
    if (width < 768) {
      setSettings((prevState) => {
        return {
          ...prevState,
          slidesToShow: 2,
        };
      });
    } else {
      setSettings((prevState) => {
        return {
          ...prevState,
          slidesToShow: 5,
        };
      });
    }
  }, [width, height]);

  return (
    <div className='card relative w-4/5  mb-52 p-8'>
      <Slider {...settings} className='px-4' ref={slider}>
        <div>
          <Image src='/images/mtv.svg' alt='mtv' width='100' height='400' />
        </div>
        <div>
          <Image src='/images/yahoo.svg' alt='mtv' width='100' height='400' />
        </div>
        <div>
          <Image src='/images/fox.svg' alt='mtv' width='100' height='400' />
        </div>
        <div>
          <Image
            src='/images/coindesk.svg'
            alt='mtv'
            width='100'
            height='400'
          />
        </div>
        <div>
          <Image src='/images/msnbc.svg' alt='mtv' width='100' height='400' />
        </div>
        <div>
          <Image src='/images/mtv.svg' alt='mtv' width='100' height='400' />
        </div>
      </Slider>
      <button
        className='absolute left-0 top-8 -translate-x-3 bg-bgBrown rounded-full z-50'
        onClick={() => slider?.current?.slickPrev()}
      >
        <Image src='/images/left-arrow.svg' alt='left' width={50} height={50} />
      </button>
      <button
        className='absolute right-0 top-8 translate-x-3 bg-bgBrown rounded-full z-50'
        onClick={() => slider?.current?.slickNext()}
      >
        <Image
          src='/images/right-arrow.svg'
          alt='left'
          width={50}
          height={50}
        />
      </button>
      <div className='absolute flex justify-start md:justify-center items-start w-full mt-4 z-50'>
        <button className='btn bg-bgBrown text-gray-400 w-52 '>View All</button>
      </div>
    </div>
  );
}
