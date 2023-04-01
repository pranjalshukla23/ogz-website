import Image from "next/image";

export default function Membership() {
  return (
    <div className='w-4/5  text-white flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 mb-24 p-8  mx-auto border-2 border-shade2 rounded-3xl'>
      {/* image container */}
      <div className=' relative flex justify-center '>
        <Image
          src='/images/heroImg.svg'
          alt='member'
          width={150}
          height={200}
          className='scale-150 -translate-y-12'
        />
      </div>
      {/* text container */}
      <div className='flex flex-col md:flex-row justify-center items-start md:items-center md:justify-evenly w-full gap-4'>
        <div className='info '>
          <h1 className='text-xl md:text-4xl bg-radial-text text-transparent bg-clip-text font-bold tracking-normal md:tracking-normal pb-2'>
            Become an OG member
          </h1>
          <p className='text-start md:w-full text-normal'>
            Discover your preferred way to buy OGZ
          </p>
        </div>
        <button className='btn w-52 p-4 text-sm z-50'>Buy OGZ</button>
      </div>
    </div>
  );
}
