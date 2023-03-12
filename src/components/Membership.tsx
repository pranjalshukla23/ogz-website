import Image from "next/image";

export default function Membership() {
  return (
    <div className='w-4/5  hero text-white mx-auto flex flex-col justify-center items-center md:flex-row md:justify-around gap-4 mb-24'>
      {/* image container */}
      <div className=' relative flex justify-center'>
        <Image
          src='/images/memberIcon.svg'
          alt='member'
          width={200}
          height={400}
        />
      </div>
      {/* text container */}
      <div className='flex flex-col md:flex-row justify-center items-start md:justify-center md:items-stretch w-full gap-4 md:gap-12 p-4'>
        <div className='info '>
          <h1 className='text-2xl lg:text-4xl text-orange-400 font-bold'>
            Become an OG member
          </h1>
          <p className='text-start md:w-full'>
            Discover your preferred way to buy OGZ
          </p>
        </div>
        <button className='btn w-52'>Buy OGZ</button>
      </div>
    </div>
  );
}
