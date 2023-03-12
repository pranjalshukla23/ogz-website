import Resources from "@/components/Footer";
export default function Resource() {
  return (
    <div className='w-full md:w-1/2 hero text-white flex flex-col justify-between items-start p-4 md:p-8 gap-2'>
      <div className='flex flex-col gap-4  w-full p-8'>
        <h1 className='text-2xl lg:text-4x font-bold'>Resources</h1>
        <div className=' w-full'>
          {/* left side links */}
          <div className='flex flex-col md:flex-row gap-8 md:justify-between text-xl'>
            <ul className=' text-gray-400'>
              <li>Bridge</li>
              <li>White paper</li>
              <li>NFT Portal</li>
              <li>Partners</li>
              <li>Community</li>
            </ul>
            <ul className=' text-gray-400'>
              <li>Brand Assets</li>
              <li>Roadmap</li>
              <li>Legal</li>
              <li>About</li>
              <li>Affiliate program</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4  w-full'>
        <h1 className='text-lg font-bold '>Feedback and Inquiries</h1>
        <button className='btn w-full md:w-1/2 '>Contact us</button>
      </div>
    </div>
  );
}
