import Image from "next/image";

export default function Hero() {
  return (
    <div className='hero flex flex-col justify-start items-center w-4/5 md:h-96 md:flex-row-reverse md:justify-between mx-auto mb-24'>
      {/* image container */}
      <div className='flex justify-center w-full md:w-1/2 h-52 max-h-screen md:h-full'>
        <div className=" w-1/2 md:w-full bg-[url('/images/heroImg.png')] bg-contain bg-no-repeat bg-center scale-150"></div>
      </div>
      {/* text container */}
      <div className=' w-full h-1/2 md:h-full flex justify-center'>
        <div
          className=' w-3/4 md:w-2/3 flex flex-col 
         items-start justify-start md:justify-center gap-4'
        >
          <h1 className='text-2xl md:text-4xl text-orange-400 font-bold'>
            OGZ coin, a coin for <br />
            the community
          </h1>
          <p className='text-start md:w-full'>
            OGZ is the utility token of the OGZ ecosystem. This coin is sure to
            attract investors who are looking for a fun and profitable
            investment opportunity. So saddle up, partner, and join the OGZ
            community today and become a real gang member!
          </p>
          <button className='btn mx-auto md:mx-0'>Read White Paper</button>
        </div>
      </div>
    </div>
  );
}
