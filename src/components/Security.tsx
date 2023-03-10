import Image from "next/image";
import { FaShareSquare } from "react-icons/fa";

export default function Security() {
  return (
    <div className="hero flex flex-col justify-start items-center w-4/5 md:flex-row-reverse md:justify-between mx-auto mb-24 gap-12 md:gap-2 pb-4 md:pb-2">
      {/* image container */}
      <div className="flex justify-center w-full md:w-1/2 h-52 md:h-96  relative">
        {/* image will cover the entire container */}
        <Image
          src="/images/shieldIcon.svg"
          alt="hero"
          fill
          className="scale-150 md:scale-125"
        />
      </div>
      {/* text container */}
      <div className=" w-full h-1/2 md:h-full flex justify-center">
        <div
          className=" w-3/4 md:w-2/3 flex flex-col 
         items-start justify-start md:justify-center gap-4"
        >
          <h1 className="text-2xl lg:text-4xl text-orange-400 font-bold">
            Security - OGZ Audits
          </h1>
          <p className="text-start md:w-full">
            Security is everything and we will get help from the best security
            professionals in the world to ensure the safety of our ecosystem.
          </p>
          <button className="btn mx-auto md:mx-0">
            OGZ by Certik <FaShareSquare className="inline" />
          </button>
        </div>
      </div>
    </div>
  );
}
