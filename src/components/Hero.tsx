import Image from "next/image";

export default function Hero() {
  return (
    <div className='hero flex flex-col justify-start items-center w-4/5 md:flex-row-reverse md:justify-between mx-auto mb-24 gap-12 md:gap-2 pb-4 md:pb-2'>
      {/* image container */}
      <div className='flex justify-center w-full md:w-1/2 h-52 md:h-96  relative'>
        {/* image will cover the entire container */}
        <Image
          src='/images/heroImg.svg'
          alt='hero'
          fill
          className='scale-150'
        />
      </div>
      {/* text container */}
      <div className=' w-full h-1/2 md:h-full flex justify-center'>
        <div
          className=' w-3/4 md:w-2/3 flex flex-col 
         items-start justify-start md:justify-center gap-4'
        >
          <h1 className='text-2xl lg:text-3xl text-orange-400 font-extrabold'>
            OGZ coin, a coin for <br />
            the community
          </h1>
          <p className='text-start'>
            OGZ is the utility token of the OGZ ecosystem. This coin is sure to
            attract investors who are looking for a fun and profitable
            investment opportunity. So saddle up, partner, and join the OGZ
            community today and become a real gang member!
          </p>
          <button className='btn mx-auto md:mx-0 mt-4'>Read White Paper</button>
        </div>
      </div>
    </div>
  );
}
