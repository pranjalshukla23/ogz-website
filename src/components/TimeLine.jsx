import { FaShareSquare, FaTelegramPlane } from "react-icons/fa";
// import { MdArrowDropDown } from "react-icons/Md";
import Image from "next/image";
export default function TimeLine() {
  return (
    <div className="bg-[#2B1C16] w-4/5 p-4 mb-24  mx-auto rounded-3xl">
      <div className="flex flex-col md:flex-row justify-around items-start md:items-center">
        <div className="heading ">
          <h3 className="text-orangeLight text-base">Timeline</h3>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-radial-text">
            From meme to dream
          </h1>
        </div>
        <div className="controls w-full md:w-1/2  flex flex-col md:flex-row gap-2 md:gap-4">
          <button className=" w-full bg-creamy my-4 rounded-xl  pl-6 text-start text-base flex items-center justify-between">
            Sort <Image src="/images/down-arrow.svg" alt="down" width={40} height={40} className="float-right"/>
          </button>
          <button className=" w-full bg-creamy my-4 rounded-xl  pl-6 text-start text-base flex items-center justify-between">
            Filter<Image src="/images/down-arrow.svg" alt="down" width={40} height={40} className="float-right"/>
           
          </button>
        </div>
      </div>

      {/* mobile timeline  */}
      <ol className="block md:hidden relative border-l-4 border-creamy mt-8">
        {/*item 1  */}
        <li className="mb-10 ml-6 ">
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-2 border-2  bg-[#2B1C16]  border-creamy"></div>
          <div className="flex items-start justify-start gap-4 mb-2">
            <Image
              src="/images/timeline1.svg"
              alt="timeline1"
              width={50}
              height={50}
            />

            <div className="timeline-container">
              <time className="mb-1 text-base font-normal leading-none text-white">
                February 2022
              </time>{" "}
              <br />
              <time className=" text-base font-normal leading-none text-orangeLight">
                OGZ Team
              </time>
              </div>
              </div>
              <h3 className="text-2xl font-semibold text-orangeLight my-2">
                OGZ is born
              </h3>
              <p className="mb-4 text-base font-normal text-white">
                And here, the OGZ gang was born for the best, to make the world
                a better place to live.
              </p>
              <a
                href="#"
                className=" w-3/4  inline-flex justify-center items-center px-4 py-2 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-radial-button3 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Source <FaShareSquare className="inline ml-4" />
              </a>
            
          
        </li>

        {/*item 2  */}
        <li className="mb-10 ml-6 ">
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-2 border-2  bg-[#2B1C16]  border-creamy"></div>
          <div className="flex items-start justify-start gap-4 mb-2">
            <Image
              src="/images/timeline2.svg"
              alt="timeline2"
              width={50}
              height={50}
            />

            <div className="timeline-container">
              <time className="mb-1 text-base font-normal leading-none text-white">
                February 2022
              </time>{" "}
              <br />
              <time className=" text-base font-normal leading-none text-orangeLight">
              Community
              </time>
              </div>
              </div>
              <h3 className="text-2xl font-semibold text-orangeLight my-2">
              The Relaunch
              </h3>
              <p className="mb-4 text-base font-normal text-white">
              We launched our token on ETH blockchain to ensure the best experience ever.
              </p>
              <a
                href="#"
                className=" w-3/4  inline-flex justify-center items-center px-4 py-2 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-radial-button3 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Source <FaShareSquare className="inline ml-4" />
              </a>
            
          
        </li>

        {/* item 3 */}
        <li className="mb-10 ml-6 ">
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-2 border-2  bg-[#2B1C16]  border-creamy"></div>
          <div className="flex items-start justify-start gap-4 mb-2">
            <Image
              src="/images/timeline3.svg"
              alt="timeline3"
              width={50}
              height={50}
            />

            <div className="timeline-container">
              <time className="mb-1 text-base font-normal leading-none text-white">
                February 2022
              </time>{" "}
              <br />
              <time className=" text-base font-normal leading-none text-orangeLight">
              Developments
              </time>
              </div>
              </div>
              <h3 className="text-2xl font-semibold text-orangeLight my-2">
              BSC Launch
              </h3>
              <p className="mb-4 text-base font-normal text-white">
              We launched our token on BNB blockchain to provide a better experience.
              </p>
              <a
                href="#"
                className="w-3/4  inline-flex justify-center items-center px-4 py-2 text-base font-bold text-gray-900 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-radial-button3 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Source <FaShareSquare className="inline ml-4" />
              </a>
            
          
        </li>
        <li className="mb-10 w-full -translate-x-2">
          <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-2 "></div>
          <div className="flex items-center justify-center gap-4 ">
            <button className="items-center px-4 py-2 text-base font-medium rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-creamy text-white  dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-full text-center">
              View All
            </button>
          </div>
        </li>
      </ol>

      {/* desktop timeline */}
      <div className="min-h-screen hidden md:flex flex-col justify-center  mx-auto  
       mt-12">
        <div className="w-full px-2">
          <div className="relative text-gray-700 antialiased text-base font-semibold ">
            <div className="hidden sm:block w-1 bg-creamy absolute h-full left-1/2 transform -translate-x-1/2 "></div>

            {/* item 1 */}
            <div className="mt-6 sm:mt-0 sm:mb-12  relative ">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center px-8">
                  <div className=" sm:w-1/2 sm:pr-8 w-1/2">
                    <div className="p-4 rounded shadow">
                      <div className="flex items-start justify-between gap-4">
                        <Image
                          src="/images/timeline1.svg"
                          alt="timeline1"
                          width={100}
                          height={80}
                        />

                        <div className="timeline-container">
                          <div className="flex justify-start  items-center gap-4 mb-1">
                          <time className="mb-1 text-base font-normal leading-none text-white">
                            February 2022
                          </time>{" "}
                          
                          <time className="mb-1 text-base font-normal leading-none text-orangeLight">
                            OGZ Team
                          </time>
                          </div>
                          
                          <h3 className="text-2xl font-semibold text-orangeLight">
                            OGZ is born
                          </h3>
                          <p className="mt-2 my-4 text-base font-normal text-white">
                            And here, the OGZ gang was born for the best, to
                            make the world a better place to live.
                          </p>
                          <a
                            href="#"
                            className="inline-flex justify-center items-center px-4 py-2 text-base font-bold text-gray-900  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-radial-button3 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-44 text-center"
                          >
                            Source <FaShareSquare className="inline ml-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#2B1C16]  border-creamy border-4 w-8 h-8 absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center"></div>
              </div>
            </div>

            {/* item 2 */}
            <div className=" sm:mt-0 sm:mb-12 relative">
              <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-end w-full mx-auto items-start ">
                  <div className="w-full sm:w-1/2 sm:pl-8 px-8">
                    <div className="p-4  rounded shadow">
                      <div className="flex items-start justify-between gap-4">
                        <Image
                          src="/images/timeline2.svg"
                          alt="timeline1"
                          width={100}
                          height={80}
                        />

                        <div className="timeline-container">
                        <div className="flex justify-start  items-center gap-4 mb-1">
                          <time className="mb-1 text-base font-normal leading-none text-white">
                            February 2022
                          </time>{" "}
                          
                          <time className="mb-1 text-base font-normal leading-none text-orangeLight">
                            Community
                          </time>
                          </div>
                          <h3 className="text-2xl font-semibold text-orangeLight">
                          The Relaunch
                          </h3>
                          <p className="mt-2 mb-4 text-base font-normal text-white">
                          We launched our token on ETH blockchain to ensure the best experience ever.
                          </p>
                          <a
                            href="#"
                            className="inline-flex justify-center items-center px-4 py-2 text-base font-bold text-gray-900  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-radial-button3 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-44 text-center"
                          >
                            Source <FaShareSquare className="inline ml-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#2B1C16]  border-creamy border-4 w-8 h-8 absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center"></div>
              </div>
            </div>

            {/* item 3 */}
            <div className="mt-6 sm:mt-0 sm:mb-12 relative">
              <div className="flex flex-col sm:flex-row items-center">
              <div className="flex justify-start w-full mx-auto items-center px-8">
                  <div className=" sm:w-1/2 sm:pr-8 w-1/2">
                    <div className="p-4  rounded shadow">
                      
                      <div className="flex items-start justify-between gap-4">
                        <Image
                          src="/images/timeline3.svg"
                          alt="timeline1"
                          width={100}
                          height={80}
                        />

                        <div className="timeline-container z-50">
                        <div className="flex justify-start  items-center gap-4 mb-1">
                          <time className="mb-1 text-base font-normal leading-none text-white">
                            June 25, 2021
                          </time>{" "}
                          
                          <time className="mb-1 text-base font-normal leading-none text-orangeLight">
                            Developments
                          </time>
                          </div>
                          <h3 className="text-2xl font-semibold text-orangeLight">
                            BSC Launch
                          </h3>
                          <p className=" mt-2 mb-4 text-base font-normal text-white">
                            And here, the OGZ gang was born for the best, to
                            make the world a better place to live.
                          </p>
                          <a
                            href="#"
                            className="inline-flex justify-center items-center px-4 py-2 text-base font-bold text-gray-900  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-radial-button3 dark:text-black dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-44 text-center z-50"
                          >
                            Source <FaShareSquare className="inline ml-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-[#2B1C16]  border-creamy border-4 w-8 h-8 absolute left-1/2 top-0 transform -translate-x-1/2 flex items-center justify-center"></div>
              </div>
            </div>

{/* item 3 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4  rounded shadow">
                      
                    </div>
                  </div>
                </div>
                <div className="rounded-md w-64 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white  bottom-0 z-50">
                  <button className="items-center px-4 py-2 text-base font-medium  rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 bg-creamy text-white  dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-full text-center z-auto">
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
