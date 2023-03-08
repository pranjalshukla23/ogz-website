import Image from "next/image";

export default function Hero() {
  return (
    <div className='hero h-screen flex flex-col-reverse lg:flex-row items-center p-12 m-8'>
      {/* left side */}
      <div className='flex flex-col items-start justify-center w-1/2 h-full p-8 gap-8'>
        <h1 className='text-2xl lg:text-4xl text-orange-500 font-bold leading-snug tracking-wide'>
          OGZ coin, a coin for <br /> the community
        </h1>
        <p className='w-full lg:w-3/4 text-start'>
          OGZ is the utility token of the OGZ ecosystem. This coin is sure to
          attract investors who are looking for a fun and profitable investment
          opportunity. So saddle up, partner, and join the OGZ community today{" "}
          and become a real gang member!
        </p>
        <button className='btn'>Read White Paper</button>
      </div>
      {/* right side */}
      <div className=" h-full w-1/2 bg-[url('/images/heroImg.png')] bg-contain bg-no-repeat bg-top bg-origin-content">
        {/* <Image src='/images/heroImg.png' alt='hero' fill={true} /> */}
      </div>
    </div>
  );
}
