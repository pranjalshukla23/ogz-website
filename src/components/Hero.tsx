import Image from "next/image";

export default function Hero() {
  return (
    <div className='hero flex flex-col justify-start items-center w-4/5 md:flex-row-reverse md:justify-between my-8 gap-12 md:gap-2 pb-4 mb-24'>
      {/* image container */}
      <div className='flex justify-center w-full md:w-1/2 h-52 md:h-96 relative'>
        {/* image will cover the entire container */}
        <Image
          src='/images/heroImg.svg'
          alt='hero'
          fill
          className='scale-150 -translate-y-6 md:-translate-y-12 lg:-translate-y-6'
        />
      </div>
      {/* text container */}
      <div className='w-full h-1/2 md:h-full flex justify-center md:justify-start p-4 md:p-8'>
        <div
          className=' w-full flex flex-col 
         items-start justify-start md:justify-center gap-4'
        >
          <h1 className='text-2xl  md:text-4xl text-orange-400 font-extrabold text-orangeLight'>
            OGZ coin, a coin for the community
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
