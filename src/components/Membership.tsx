import Image from "next/image";

export default function Membership() {
  return (
    <div className='w-4/5 card text-white flex flex-col justify-center items-center md:flex-row md:justify-between gap-4 mb-24 p-8 rounded-md'>
      {/* image container */}
      <div className=' relative flex justify-center '>
        <Image
          src='/images/memberIcon.svg'
          alt='member'
          width={150}
          height={200}
        />
      </div>
      {/* text container */}
      <div className='flex flex-col md:flex-row justify-center items-start md:items-center md:justify-evenly w-full gap-4'>
        <div className='info '>
          <h1 className='text-2xl lg:text-3xl text-orangeLight font-extrabold mb-4'>
            Become an OG member
          </h1>
          <p className='text-start md:w-full'>
            Discover your preferred way to buy OGZ
          </p>
        </div>
        <button className='btn w-52 p-4'>Buy OGZ</button>
      </div>
    </div>
  );
}
