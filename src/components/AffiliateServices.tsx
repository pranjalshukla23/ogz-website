import Link from "next/link";
import { FaShareSquare } from "react-icons/fa";

export default function AffiliateServices() {
  return (
    <div className='grid  bg-inherit grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 justify-start items-center w-4/5 p-2  mx-auto my-24'>
      {/* item 1 */}
      <div className='gridItem2 flex flex-col  items-start  z-20 bg-[#2B1C16]  gap-2 '>
        <div className='bg-radial-card2 rounded-md  -translate-y-6 w-[70px] h-[69px] flex  justify-center items-center font-bold text-3xl'>
          1
        </div>

        <h1 className='text-2xl md:text-3xl text-[#E7862E] font-bold'>Join</h1>
        <p className='text-sm w-full md:w-3/4'>
          Join OGZ affiliate program. It&apso;s an easy thing to do, just sign
          up here and get your unique referral link.
        </p>
        <button className='btn bg-radial-button2 text-[#0C0100]  w-full md:w-3/4 md:mt-6'>
          <Link href='/affiliatePage'>Join</Link>
        </button>
      </div>

      {/* item 2 */}
      <div className='gridItem2 flex flex-col  items-start  z-20 bg-[#2B1C16] gap-2 '>
        <div className='bg-radial-card2 rounded-md  -translate-y-6 w-[70px] h-[69px] flex  justify-center items-center font-bold text-3xl'>
          2
        </div>

        <h1 className='text-2xl md:text-3xl text-[#E7862E] font-bold'>
          Spread
        </h1>
        <p className='text-sm w-full md:w-3/4'>
          Spread the word about OGZ by inviting your audience to join our gang
          via an affiliate link. The bigger the gang becomes with your help,
          you&apos;ll earn.
        </p>
      </div>

      {/* item 3 */}
      <div className='gridItem2 flex flex-col  items-start  z-20 bg-[#2B1C16]  gap-2 '>
        <div className='bg-radial-card2 rounded-md  -translate-y-6 w-[70px] h-[69px] flex  justify-center items-center font-bold text-3xl'>
          3
        </div>

        <h1 className='text-2xl md:text-3xl text-[#E7862E] font-bold'>Earn</h1>
        <p className='text-sm w-full md:w-3/4'>
          See your profits growing and request one-click payouts at any time.
          Get a profit from each purchase done by people who joined our gang via
          your affiliate link.
        </p>
      </div>
    </div>
  );
}
