import Image from "next/image";

export default function Services() {
  return (
    <div className='grid grid-cols-1 gap-12 md:gap-8 md:grid-cols-2  justify-center items-center w-11/12 mx-auto bg-stone-900 p-2 md:p-8 '>
      {/* item 1 */}
      <div className=' flex flex-col justify-start items-start gap-4'>
        <h1 className='text-xl text-orange-400 font-bold'>Our Core Values</h1>
        <p>
          Here you can see some of our core values, we are always trying to
          stick to our &ldquo;why&ldquo; and we won&quo;t lose our path based on
          some short-term interests. &ldquo;Community&ldquo;,
          &ldquo;Charity&ldquo; and &ldquo;Utility&ldquo; are three main
          components of the OGZ project.
        </p>
      </div>

      {/* item 2 */}
      <div className='gridItem  flex flex-col justify-start items-start gap-4 p-8'>
        <div className='bg-creamy rounded-md p-4 -translate-y-12'>
          <Image
            src='/images/personIcon.svg'
            alt='person'
            width='50'
            height='50'
          />
        </div>

        <h1 className='text-xl text-orange-400 font-bold'>Community</h1>
        <p>
          Community is everything. OGZ project is nothing without its active,
          kind, and supportive community. We will try our best to get the
          community feedback for our everyday actions and important decisions
          along the way.
        </p>
        <button className='btn bg-orange-400 text-black w-52'>
          Join Community
        </button>
      </div>

      {/* item 3 */}
      <div className='gridItem flex flex-col justify-start items-start gap-4'>
        <div className='bg-creamy rounded-md p-4  -translate-y-6'>
          <Image
            src='/images/utilityIcon.svg'
            alt='utility'
            width='50'
            height='50'
          />
        </div>

        <h1 className='text-xl text-orange-400 font-bold'>Utility</h1>
        <p>
          Nothing can withstand the test of time without having some utility.
          OGZ is intended to be used and we will keep adding utilities and
          usecases to OGZ ecosystem. With our partners and strong community, OGZ
          is going to be used everywhere.
        </p>
        <button className='btn bg-orange-400 text-black w-52'>Utilities</button>
      </div>
      {/* item 4 */}
      <div className='gridItem flex flex-col justify-start items-start gap-4'>
        <div className='bg-creamy rounded-md p-4  -translate-y-6'>
          <Image
            src='/images/loveIcon.svg'
            alt='utility'
            width='50'
            height='50'
          />
        </div>

        <h1 className='text-xl text-orange-400 font-bold '>Charity</h1>
        <p>
          One of our core values is helping people. Saving nature, helping to
          eradicate poverty, providing high-level education in places where
          there is no education and other noble acts are always something that
          we keep in our mind.
        </p>
        <button className='btn bg-orange-400 text-black w-52'>
          Read our stories
        </button>
      </div>
    </div>
  );
}
