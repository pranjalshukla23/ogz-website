import Image from "next/image";
import Link from "next/link";
import { FaShareSquare } from "react-icons/fa";

export default function Program() {
  return (
    <div className='bg-inherit flex flex-col justify-start items-start w-4/5 md:flex-row md:justify-between mb-32 gap-4  shadow-3xl rounded-2xl  md:h-[361px] mx-auto '>
      {/* text container */}
      <div className='w-full md:w-2/3 h-full flex justify-center items-center md:items-center p-2 md:px-0 md:p-6 rounded-3xl gap-2 '>
        <div
          className='w-full h-3/4 flex flex-col 
         items-start md:items-start justify-start md:justify-start gap-2 '
        >
          <h1 className='text-xl md:text-4xl bg-radial-text text-transparent bg-clip-text font-bold tracking-normal md:tracking-normal'>
            Our affiliate program
          </h1>
          <p className='text-start md:text-start text-sm font-normal w-full md:w-2/3'>
            The OGz referral system allows OGz to be part of an ecosystem where
            a 1% tax provides a sustainable way to get rewarded by referring new
            users.
          </p>
          <button className='btn mx-auto md:mx-0 mt-4 cursor-pointer w-full md:w-2/4 text-xs md:text-sm'>
            <Link href='/affiliateProgramHomePage'>Join our affiliate program</Link>
          </button>
        </div>
      </div>
      {/* programs */}
      <div className='w-full md:w-2/3 h-full flex justify-center items-center md:items-center  border-2 border-shade2 p-2 md:p-6 rounded-3xl gap-2'>
        <div
          className='w-full h-3/4 flex flex-col 
         items-start md:items-start justify-start md:justify-start gap-2'
        >
          <h1 className='text-lg md:text-xl bg-radial-text text-transparent bg-clip-text font-bold tracking-tighter'>
            Affiliate leaderboard
          </h1>
          {/* grid 1 */}
          <div className='flex flex-row gap-2 w-full h-[88px] md:h-[40px] bg-shade3 p-1 text-orange '>
            {/* number */}
            <div className='number w-1/4 md:w-7 h-full  text-center flex justify-center items-center p-2 font-bold text-2xl md:text-base rounded-md bg-shade3'>
              1
            </div>
            {/* info */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center  text-sm w-full gap-1'>
              <span className='w-20 '>Adam56</span>
              <span className='text-xs'>
                <b>Referred people:</b> 44322
              </span>
              <button className='cursor-pointer text-xs md:text-sm p-2 text-center flex justify-center items-center bg-shade3 w-full md:w-36 rounded-md'>
                1234141$ earned
              </button>
            </div>
          </div>

          {/* grid 2 */}
          <div className='flex flex-row gap-2 w-full h-[88px] md:h-[40px] bg-shade3 p-1 text-orange '>
            {/* number */}
            <div className='number w-1/4 md:w-7 h-full  text-center flex justify-center items-center p-2 font-bold text-2xl md:text-base rounded-md bg-shade3'>
              2
            </div>
            {/* info */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center  text-sm w-full  gap-1'>
              <span className='w-20 '>princess</span>
              <span className='text-xs'>
                <b>Referred people:</b> 44322
              </span>
              <button className='cursor-pointer text-xs md:text-sm p-2 text-center flex justify-center items-center bg-shade3 w-full md:w-36 rounded-md'>
                87141$ earned
              </button>
            </div>
          </div>

          {/* grid 3 */}
          <div className='flex flex-row gap-2  w-full h-[88px] md:h-[40px] bg-shade3 p-1 text-orange '>
            {/* number */}
            <div className='number w-1/4 md:w-7 h-full  text-center flex justify-center items-center p-2 font-bold text-2xl md:text-base rounded-md bg-shade3'>
              3
            </div>
            {/* info */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center  text-sm w-full gap-1'>
              <span className='w-20 '>Julian_23</span>
              <span className='text-xs'>
                <b>Referred people:</b> 44322
              </span>
              <button className='cursor-pointer text-xs md:text-sm p-2 text-center flex justify-center items-center bg-shade3 w-full md:w-36 rounded-md'>
                7141$ earned
              </button>
            </div>
          </div>

          {/* grid 4 */}
          <div className='flex flex-row gap-2 w-full h-[88px] md:h-[40px] bg-shade3 p-1 text-orange '>
            {/* number */}
            <div className='number w-1/4 md:w-7 h-full text-center flex justify-center items-center p-2 font-bold text-2xl md:text-base rounded-md bg-shade3'>
              4
            </div>
            {/* info */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center  text-sm w-full gap-1'>
              <span className='w-20 '>Star008</span>
              <span className='text-xs'>
                <b>Referred people:</b> 44322
              </span>
              <button className='cursor-pointer text-xs md:text-sm p-2 text-center flex justify-center items-center bg-shade3 w-full md:w-36 rounded-md'>
                5141$ earned
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
