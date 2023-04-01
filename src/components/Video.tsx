import Image from "next/image";
import { FaShareSquare } from "react-icons/fa";

export default function Video() {
  return (
    <div className='bg-inherit flex flex-col-reverse justify-start items-center w-4/5 md:flex-row-reverse md:justify-between mb-24 p-0  shadow-3xl rounded-2xl max-h-screen md:h-[361px] border-2 border-shade2 mx-auto '>
      {/* text container */}
      <div className='w-full  flex justify-center '>
        <div
          className=' w-full md:w-2/3 flex flex-col 
         items-start justify-start md:justify-center gap-2  p-4'
        >
          <h1 className='text-xl md:text-2xl bg-radial-text4 text-transparent bg-clip-text font-bold'>
            Enjoy an active and amazing community
          </h1>
          <p className='text-start md:w-full text-sm font-normal'>
            We wanna show love and give credit where credit is due to those who
            continue to ride with us as we make moves and take over the crypto
            game. So listen up, my fellow OGZs! It&apos;s time to step up and
            get involved with the realest DeFi & Meme project out there.
          </p>
        </div>
      </div>
      {/* image container */}
      <div className='flex justify-center w-full  h-52 md:h-96  relative '>
        {/* image will cover the entire container */}
        <Image
          src='/images/video.svg'
          alt='hero'
          fill
          className='scale-auto md:scale-100 -translate-y-1 md:-translate-y-8 rounded-xl'
        />
      </div>
    </div>
  );
}
