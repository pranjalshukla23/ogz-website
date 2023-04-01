import { FaShareSquare } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { AiFillPieChart } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { Slider } from "@mui/material";

export default function EarningProgram() {
  return (
    <div className='bg-inherit flex flex-col justify-start items-start w-4/5 h-auto md:h-[608px] md:flex-row md:justify-center md:items-center mb-32 gap-4  shadow-3xl rounded-2xl mx-auto border-2 border-shade2'>
      {/* text container */}
      <div className='w-full md:w-2/3 h-full flex justify-center items-center md:items-center p-4 md:px-0 md:p-6 rounded-3xl gap-2 '>
        <div
          className='w-full md:w-4/5 h-3/4 flex flex-col 
         items-start md:items-start justify-start md:justify-center gap-6 '
        >
          <h1 className='text-xl md:text-3xl bg-radial-text text-transparent bg-clip-text font-bold tracking-normal md:tracking-normal'>
            OGZ earning program
          </h1>
          <p className='text-start md:text-start text-base font-normal w-full'>
            For social media gurus, community managers, bloggers who run
            crypto-related resources, and anyone who got some good connections.
            This is your opportunity to join our gang and earn some money.
          </p>
          <div className='flex flex-col  w-full gap-4'>
            {/* item 1 */}
            <div className='flex flex-col md:flex-row md:items-center gap-3'>
              {/* icon */}
              <div className='w-16 p-4 rounded-full bg-gradient-radial3 flex justify-center items-center'>
                <IoMdWallet className='text-2xl text-black ' />
              </div>
              <p>
                Earn 1% of each purchase made by your referred users and receive
                payments on demand.
              </p>
            </div>

            {/* item 2 */}
            <div className='flex flex-col md:flex-row md:items-center gap-3'>
              {/* icon */}
              <div className='w-16 p-4 rounded-full bg-gradient-radial3 flex justify-center items-center'>
                <AiFillPieChart className='text-2xl text-black' />
              </div>
              <p>
                Get the insights you need with access to transparent performance
                data
              </p>
            </div>

            {/* item 3 */}
            <div className='flex flex-col md:flex-row md:items-center gap-3'>
              {/* icon */}
              <div className='w-16 p-4 rounded-full bg-gradient-radial3 flex justify-center items-center'>
                <BsHeadset className='text-2xl text-black' />
              </div>
              <p>
                Find answers to your questions with the help of our dedicated
                affiliate managers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* programs */}
      <div className='w-full md:w-2/3 h-full flex justify-center items-center md:items-center md:px-0 p-4 md:p-6  gap-2 rounded-3xl '>
        <div
          className='w-full md:w-4/5 h-3/4 flex flex-col 
         items-start md:items-start justify-start md:justify-center gap-6 py-3 px-8 bg-[#2B1C16] rounded-xl border-l-[16px] border-l-orangeLight'
        >
          <h1 className='text-xl md:text-2xl bg-radial-text text-transparent bg-clip-text font-bold tracking-normal md:tracking-normal'>
            See how much you’d earn
          </h1>
          <div className='details  w-full flex flex-col gap-2'>
            <h3>Your turnover</h3>
            <h1 className='font-bold text-base  md:text-3xl'>90,000 USDT</h1>
            {/* <Slider
              defaultValue={50}
              aria-label='Default'
              valueLabelDisplay='auto'
              sx={{
                color: "orange",
              }}
            /> */}
          </div>

          <div className='details  w-full flex flex-col gap-2'>
            <h3>Your earn</h3>
            <h1 className='font-bold text-base  md:text-3xl'>~9,000 USDT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
