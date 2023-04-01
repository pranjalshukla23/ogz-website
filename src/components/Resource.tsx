import Resources from "@/components/Footer";
export default function Resource() {
  return (
    <div className='w-full md:w-1/2 border-2 border-shade2 text-white flex flex-col justify-around items-center p-4 md:p-12 rounded-3xl z-20'>
      <div className='flex flex-col items-start gap-2 w-full'>
        <div className='w-full'>
          <h1 className='text-base font-bold mb-4'>Resources</h1>
          {/* left side links */}
          <div className='flex flex-col md:flex-row  justify-between text-base'>
            <ul className=' text-gray-400 flex flex-col gap-2'>
              <li>Bridge</li>
              <li>White paper</li>
              <li>NFT Portal</li>
              <li>Partners</li>
              <li>Community</li>
            </ul>
            <ul className=' text-gray-400 flex flex-col gap-2'>
              <li>Brand Assets</li>
              <li>Roadmap</li>
              <li>Legal</li>
              <li>About</li>
              <li>Affiliate program</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-start gap-4 w-full '>
        <h1 className='text-base font-bold '>Feedback and Inquiries</h1>
        <button className='btn w-full md:w-3/4 text-base'>Contact us</button>
      </div>
    </div>
  );
}
