import Image from "next/image";
import { FaShareSquare } from "react-icons/fa";

export default function Services() {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 justify-center items-center w-4/5  md:pl-20 mb-24'>
      {/* item 1 */}
      <div className=' flex flex-col justify-start items-start gap-4 mb-24 md:mb-0'>
        <h1 className='text-2xl md:text-3xl text-orangeLight font-bold'>
          Our Core Values
        </h1>
        <p>
          Here you can see some of our core values, we are always trying to
          stick to our &ldquo;why&ldquo; and we won&quo;t lose our path based on
          some short-term interests. &ldquo;Community&ldquo;,
          &ldquo;Charity&ldquo; and &ldquo;Utility&ldquo; are three main
          components of the OGZ project.
        </p>
      </div>

      {/* item 2 */}
      <div className='gridItem flex flex-col justify-start items-start gap-2 -translate-y-0 md:-translate-y-20 card2 '>
        <div className='bg-creamy rounded-md p-4 -translate-y-6 w-16 h-16 md:w-24 md:h-24 flex justify-center '>
          <Image
            src='/images/personIcon.svg'
            alt='person'
            width={30}
            height={40}
          />
        </div>

        <h1 className='text-2xl md:text-3xl text-orangeLight font-bold'>
          Community
        </h1>
        <p className='text-sm'>
          Community is everything. OGZ project is nothing without its active,
          kind, and supportive community. We will try our best to get the
          community feedback for our everyday actions and important decisions
          along the way.
        </p>
        <button className='btn bg-orangeLight text-black  w-52 md:w-64 md:mt-6'>
          Join Community <FaShareSquare className='inline' />
        </button>
      </div>

      {/* item 3 */}
      <div className='gridItem flex flex-col justify-start items-start gap-2 -translate-y-0 md:translate-y-20 card2'>
        <div className='bg-creamy rounded-md p-4 -translate-y-6 w-16 h-16 md:w-24 md:h-24 flex justify-center '>
          <Image
            src='/images/utilityIcon.svg'
            alt='utility'
            width={30}
            height={40}
          />
        </div>

        <h1 className='text-2xl md:text-3xl text-orangeLight font-bold'>
          Utility
        </h1>
        <p className='text-sm'>
          Nothing can withstand the test of time without having some utility.
          OGZ is intended to be used and we will keep adding utilities and
          usecases to OGZ ecosystem. With our partners and strong community, OGZ
          is going to be used everywhere.
        </p>
        <button className='btn bg-orangeLight text-black  w-52 md:w-64 md:mt-6'>
          Utilities
        </button>
      </div>
      {/* item 4 */}
      <div className='gridItem flex flex-col justify-start items-start gap-2 -translate-y-0 md:translate-y-20 card2'>
        <div className='bg-creamy rounded-md p-4 -translate-y-6 w-16 h-16 md:w-24 md:h-24 flex justify-center '>
          <Image
            src='/images/loveIcon.svg'
            alt='utility'
            width={30}
            height={40}
          />
        </div>

        <h1 className='text-2xl md:text-3xl text-orangeLight font-bold'>
          Charity
        </h1>
        <p className='text-sm'>
          One of our core values is helping people. Saving nature, helping to
          eradicate poverty, providing high-level education in places where
          there is no education and other noble acts are always something that
          we keep in our mind.
        </p>
        <button className='btn bg-orangeLight text-black w-52 md:w-64 md:mt-6'>
          Read our stories
        </button>
      </div>
    </div>
  );
}
