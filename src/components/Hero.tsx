import Image from "next/image";

export default function Hero() {
  return (
    <div className='hero w-3/4 lg:w-screen h-screen flex flex-col-reverse lg:flex-row justify-center items-center mx-auto'>
      {/* left side */}
      <div className='w-full lg:w-1/2  flex flex-col justify-center items-center lg:items-start gap-y-8'>
        <h1 className='text-xl lg:text-6xl text-orange-500 font-bold leading-snug tracking-wide'>
          OGZ coin, a coin for the <br />
          community
        </h1>
        <p className='w-1/2 lg:w-full text-center lg:text-start'>
          OGZ is the utility token of the OGZ ecosystem. This coin is sure to
          attract investors who are looking for a fun and profitable investment
          opportunity. So saddle up, partner, and join the OGZ community today
          and become a real gang member!
        </p>
        <button className='btn'>Read White Paper</button>
      </div>
      {/* right side */}
      <div className='w-3/4 h-full lg:w-1/2  relative'>
        <Image src='/images/heroImg.png' alt='hero' fill={true} />
      </div>
    </div>
  );
}
