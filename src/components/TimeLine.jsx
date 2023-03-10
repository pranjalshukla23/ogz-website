import { FaShareSquare, FaTelegramPlane } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/Md";
import Image from "next/image";
export default function TimeLine() {
  return (
    <div className="w-full mx-auto p-4 mb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="heading ">
          <h3 className="text-orange-500">Timeline</h3>
          <h1 className="text-4xl font-bold text-orange-500">
            From meme to dream
          </h1>
        </div>
        <div className="controls w-full md:w-1/2  flex flex-col md:flex-row gap-2 md:gap-4">
          <button className=" block w-full bg-amber-900 my-4 rounded p-2">
            Sort <MdArrowDropDown className="inline text-3xl float-right" />
          </button>
          <button className=" block w-full bg-amber-900 my-4 rounded p-2">
            Filter{" "}
            <MdArrowDropDown className="inline text-3xl float-right" />
          </button>
        </div>
      </div>

      {/* mobile timeline  */}
      <ol className="block md:hidden relative border-l-4 border-blue-200 dark:border-amber-900">
        {/*item 1  */}
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white dark:border-amber-900 dark:bg-black"></div>
          <div className="flex items-start justify-between gap-4">
            <Image
              src="/images/timeline1.svg"
              alt="timeline1"
              width={50}
              height={50}
            />

            <div className="timeline-container">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                February 2022
              </time>{" "}
              <br />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-orange-500">
                OGZ Team
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                OGZ is born
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                And here, the OGZ gang was born for the best, to make the world
                a better place to live.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-orange-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Source <FaShareSquare className="inline ml-4" />
              </a>
            </div>
          </div>
        </li>

        {/*item 2  */}
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white dark:border-amber-900 dark:bg-black"></div>
          <div className="flex items-start justify-between gap-4">
            <Image
              src="/images/timeline2.svg"
              alt="timeline1"
              width={50}
              height={50}
            />

            <div className="timeline-container">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                February 2022
              </time>{" "}
              <br />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-orange-500">
                OGZ Team
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                OGZ is born
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                And here, the OGZ gang was born for the best, to make the world
                a better place to live.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-orange-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Source <FaShareSquare className="inline ml-4" />
              </a>
            </div>
          </div>
        </li>

        {/* item 3 */}
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white dark:border-amber-900 dark:bg-black"></div>
          <div className="flex items-start justify-between gap-4">
            <Image
              src="/images/timeline3.svg"
              alt="timeline1"
              width={50}
              height={50}
            />

            <div className="timeline-container">
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                June 25, 2021
              </time>{" "}
              <br />
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-orange-500">
                Developments
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                BSC Launch
              </h3>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                And here, the OGZ gang was born for the best, to make the world
                a better place to live.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-orange-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Source <FaShareSquare className="inline ml-4" />
              </a>
            </div>
          </div>
        </li>
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white dark:border-amber-900 dark:bg-black"></div>
          <div className="flex items-center justify-center gap-4 border-2 border-red-500">
            <button className="items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-amber-900 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-full text-center">
              View All
            </button>
          </div>
        </li>
      </ol>

      {/* desktop timeline */}
      <div className="min-h-screen hidden md:flex flex-col justify-center sm:py-12  w-4/5 mx-auto">
        <div className="py-3 w-full px-2">
          <div className="relative text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden sm:block w-1 bg-amber-800 absolute h-full left-1/2 transform -translate-x-1/2"></div>

            {/* item 1 */}
            <div className="mt-6 sm:mt-0 sm:mb-12 ">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4 rounded shadow">
                      <div className="flex items-start justify-between gap-4">
                        <Image
                          src="/images/timeline1.svg"
                          alt="timeline1"
                          width={50}
                          height={50}
                        />

                        <div className="timeline-container">
                          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                            February 2022
                          </time>{" "}
                          <br />
                          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-orange-500">
                            OGZ Team
                          </time>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                            OGZ is born
                          </h3>
                          <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                            And here, the OGZ gang was born for the best, to
                            make the world a better place to live.
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-orange-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                          >
                            Source <FaShareSquare className="inline ml-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-amber-900 border-amber-700 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
              </div>
            </div>

            {/* item 2 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-end w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pl-8">
                    <div className="p-4  rounded shadow">
                      <div className="flex items-start justify-between gap-4">
                        <Image
                          src="/images/timeline2.svg"
                          alt="timeline1"
                          width={50}
                          height={50}
                        />

                        <div className="timeline-container">
                          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                            February 2022
                          </time>{" "}
                          <br />
                          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-orange-500">
                            OGZ Team
                          </time>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                            OGZ is born
                          </h3>
                          <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                            And here, the OGZ gang was born for the best, to
                            make the world a better place to live.
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-orange-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                          >
                            Source <FaShareSquare className="inline ml-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-amber-900 border-amber-700 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
              </div>
            </div>

            {/* item 3 */}
            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4  rounded shadow">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white dark:border-amber-900 dark:bg-black"></div>
                      <div className="flex items-start justify-between gap-4">
                        <Image
                          src="/images/timeline3.svg"
                          alt="timeline1"
                          width={50}
                          height={50}
                        />

                        <div className="timeline-container">
                          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                            June 25, 2021
                          </time>{" "}
                          <br />
                          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-orange-500">
                            Developments
                          </time>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-orange-500">
                            BSC Launch
                          </h3>
                          <p className="mb-4 text-base font-normal text-gray-500 dark:text-white">
                            And here, the OGZ gang was born for the best, to
                            make the world a better place to live.
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-orange-500 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                          >
                            Source <FaShareSquare className="inline ml-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-full bg-amber-900 border-amber-700 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"></div>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:mb-12">
              <div className="flex flex-col sm:flex-row items-center">
                <div className="flex justify-start w-full mx-auto items-center">
                  <div className="w-full sm:w-1/2 sm:pr-8">
                    <div className="p-4  rounded shadow">
                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-2 border border-white dark:border-amber-900 dark:bg-black"></div>
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-amber-900 w-52 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center text-white">
                  <button className="items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-amber-900 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 w-full text-center">
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
