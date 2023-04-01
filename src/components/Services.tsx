import Image from "next/image";
import { FaShareSquare } from "react-icons/fa";

export default function Services() {
  return (
    <div className='grid grid-container grid-cols-1 gap-4 md:gap-2 md:grid-cols-2 justify-start items-center w-4/5 p-2  mx-auto border-2 border-shade2 rounded-3xl'>
      {/* item 1 */}
      <div className='flex flex-col justify-between items-start gap-2  card2 z-20 bg-[#2B1C16]  pl-0 md:pl-8 md:pb-6'>
        <h1 className='text-3xl md:text-4xl bg-radial-text text-transparent bg-clip-text font-bold tracking-normal md:tracking-normal'>
          Why DeFi?
        </h1>
        <p className=' w-full md:w-4/5 text-base pb-4'>
          DeFi projects are built to reward users only from the token supply,
          which creates an artificial pump by offering their community many
          different programs such as; staking, liquidity providing and rewards
          that are all solely based on creating selling pressure because their
          entire rewards are only generated from the total supply.
        </p>
      </div>

      {/* item 2 */}
      <div className='gridItem flex flex-col justify-between items-start -translate-y-0 md:-translate-y-16 card2 z-20 bg-[#2B1C16] '>
        <div className='bg-radial-card2 rounded-md p-2 -translate-y-6 w-16 h-16 md:w-24 md:h-24 flex justify-center '>
          <Image
            src='/images/personIcon.svg'
            alt='person'
            width={30}
            height={40}
          />
        </div>

        <h1 className='text-2xl text-[#E7862E] font-bold'>
          Anti-Cheating System
        </h1>
        <p className='text-sm'>
          Because we are MemeFi we understand DeFi and thats why we created the
          first anti-cheating system for referrals to stop any individuals from
          re-creating a new wallet and leverage the referral system by adding
          themselves to gain a competitive advantage over others.
        </p>
        <button className='btn bg-radial-button2 text-[#0C0100]  w-full md:w-3/4 md:mt-6'>
          Read more
        </button>
      </div>

      {/* item 3 */}
      <div className='gridItem flex flex-col justify-between items-start gap-2  card2 z-20 bg-[#2B1C16] '>
        <div className='bg-radial-card2 rounded-md p-4 -translate-y-6 w-16 h-16 md:w-24 md:h-24 flex justify-center'>
          <Image
            src='/images/utilityIcon.svg'
            alt='utility'
            width={30}
            height={40}
          />
        </div>

        <h1 className='text-2xl text-[#E7862E] font-bold'>Dynamic Staking</h1>
        <p className='text-sm'>
          We understand the harm staking can cause as it normally comes from the
          total supply therefore we have introduced the first Dynamic Staking
          where 1% of the tax will be filled inside the staking contract and we
          will announce different staking pools based on the demands.
        </p>
        <button className='btn bg-radial-button2 text-[#0C0100]  w-full md:w-3/4 md:mt-6'>
          Operations and funding
        </button>
      </div>
      {/* item 4 */}
      <div className='gridItem flex flex-col justify-between items-start gap-2 card2 z-20 bg-[#2B1C16]'>
        <div className='bg-radial-card2 rounded-md p-4 -translate-y-6 w-16 h-16 md:w-24 md:h-24 flex justify-center '>
          <Image
            src='/images/loveIcon.svg'
            alt='utility'
            width={30}
            height={40}
          />
        </div>

        <h1 className='text-2xl text-[#E7862E] font-bold'>Charity</h1>
        <p className='text-sm'>
          One of our core values is helping people. Saving nature, helping to
          eradicate poverty, providing high-level education in places where
          there is no education and other noble acts are always something that
          we keep in our mind.
        </p>
        <button className='btn bg-radial-button2 text-[#0C0100]  w-full md:w-3/4 md:mt-6'>
          Read our stories
        </button>
      </div>
    </div>
  );
}
