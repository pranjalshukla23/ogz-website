import { FaShareSquare, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

export default function SocialMedia() {
  return (
    <div className='w-full md:w-3/4  border-2 border-shade2 rounded-3xl flex flex-col justify-center md:justify-start items-center gap-8 p-3 md:p-8  z-20'>
      {/* gang */}
      <div className='flex flex-col md:flex-row justify-center md:justify-around items-start md:items-center  gap-6 p-4 bg-shade3 w-full rounded-md'>
        <h1 className='text-xl font-bold'>Join our gang</h1>
        <button className='btn p-2 md:p-2 w-full md:w-64 text-sm'>
          <FaTelegramPlane className='inline' /> Join our Telegram
        </button>
      </div>
      {/* contracts */}
      <div className='w-full flex flex-col justify-center md:justify-between items-start  gap-6 p-4  rounded-md'>
        <h1 className='text-base font-bold'>Contracts</h1>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-4'>
          <div className=' flex justify-between items-center gap-2 bg-shade3 rounded-md p-2'>
            <label htmlFor='eth' className='text-xl font-bold'>
              BSC
            </label>
            <input
              type='text'
              placeholder='0xCF0C...6A2E'
              className='px-2 py-2 bg-inherit border-none outline-0 text-gray-400  w-1/2'
            />
            <FaShareSquare className='inline' />
          </div>
        </div>
      </div>

      {/* social media */}
      <div className='w-full flex flex-col justify-center md:justify-between items-start  gap-6 p-4 rounded-md'>
        <h1 className='text-md font-bold'>Social Media</h1>
        <div className='flex flex-row justify-between items-center gap-4'>
          <Image
            src='/images/insta.svg'
            alt=''
            width={60}
            height={40}
            className='p-4 bg-shade3 rounded-md shadow-lg'
          />
          <Image
            src='/images/twitter.svg'
            alt=''
            width={60}
            height={40}
            className='p-4 bg-shade3 rounded-md shadow-lg'
          />
          <Image
            src='/images/Facebook.svg'
            alt=''
            width={60}
            height={40}
            className='p-4 bg-shade3 rounded-md shadow-lg'
          />
        </div>
      </div>
    </div>
  );
}
