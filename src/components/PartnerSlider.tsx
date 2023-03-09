import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import useDeviceSize from "@/hooks/useDeviceHook";

interface Settings {
  dots: boolean;
  arrows: boolean;
  infinite: boolean;
  speed: number;
  slidesToScroll: number;
  slidesToShow?: number;
}

export default function PartnerSlider() {
  const [width, height] = useDeviceSize();
  const [settings, setSettings] = useState<Settings>({
    dots: true,
    arrows: true,
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
          slidesToShow: 3,
        };
      });
    } else {
      setSettings((prevState) => {
        return {
          ...prevState,
          slidesToShow: 4,
        };
      });
    }
  }, [width, height]);

  return (
    <div className='w-full md:w-4/5 mx-auto'>
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
    </div>
  );
}
