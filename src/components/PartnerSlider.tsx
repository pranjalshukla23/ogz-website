import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState, useEffect, ReactElement } from "react";
import useDeviceSize from "@/hooks/useDeviceHook";
import ArrowButton from "./ArrowButton";

interface Settings {
  arrows: boolean;
  infinite: boolean;
  speed: number;
  slidesToScroll: number;
  slidesToShow?: number;
  // prevArrow: ReactElement;
  // nextArrow: ReactElement;
}

export default function PartnerSlider() {
  const [width, height] = useDeviceSize();
  const [settings, setSettings] = useState<Settings>({
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    // prevArrow: (
    //   <ArrowButton imgSrc={"/images/left-arrow.svg"} imgAlt='previous-button' />
    // ),
    // nextArrow: (
    //   <ArrowButton imgSrc={"/images/right-arrow.svg"} imgAlt='next-button' />
    // ),
  });

  useEffect(() => {
    if (width < 768) {
      setSettings((prevState) => {
        return {
          ...prevState,
          slidesToShow: 3,
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
    <div className='w-full md:w-4/5 mx-auto mb-24'>
      <Slider {...settings} className='max-h-20'>
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
      <div className='border-2 border-red-500 flex justify-center p-8'>
        <button className='btn mx-auto bg-bgBrown text-gray-400'>
          View All
        </button>
      </div>
    </div>
  );
}
