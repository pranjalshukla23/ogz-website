import Resources from "@/components/Footer";
export default function Resource() {
  return (
    <div className="w-full md:w-1/2 bg-creamy text-white flex flex-col justify-start items-start p-4 md:p-8 gap-4">
      <h1 className="text-2xl lg:text-4x font-bold">Resources</h1>
      <div className=" w-full">
        {/* left side links */}
        <div className="flex flex-col md:flex-row gap-8 md:justify-between text-xl">
          <ul className=" text-gray-400">
            <li>Bridge</li>
            <li>White paper</li>
            <li>NFT Portal</li>
            <li>Partners</li>
            <li>Community</li>
          </ul>
          <ul className=" text-gray-400">
            <li>Brand Assets</li>
            <li>Roadmap</li>
            <li>Legal</li>
            <li>About</li>
            <li>Affiliate program</li>
          </ul>
        </div>
      </div>
      <h1 className="text-lg font-bold">Feedback and Inquiries</h1>
      <button className="btn w-52">Contact us</button>
    </div>
  );
}
