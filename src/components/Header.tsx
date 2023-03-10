import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <div className='flex justify-between lg:justify-around items-center p-4 gap-4 mb-24'>
      <div className='logo-container flex justify-start items-center text-5xl font-extrabold text-orange gap-x-4 '>
        <div className='logo relative bg-orange rounded-full p-4 w-16 h-16'>
          <Image
            src={"/images/logo.svg"}
            alt='logo'
            fill={true}
            className='object-contain py-2'
          />
        </div>
        <h1>OGZ</h1>
      </div>

      {/* desktop menu */}
      <div className='menu hidden lg:flex  text-center items-center  '>
        <ul className='flex justify-between items-center gap-x-16 text-xs lg:text-lg'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>White Paper</Link>
          </li>
          <li>
            <Link href='/'>Afiliate Program</Link>
          </li>
          <li>
            <button className='btn bg-orangeLight'>Connect Wallet</button>
          </li>
        </ul>
      </div>

      {/* mobile menu */}
      <div className='mobile-menu relative lg:hidden text-end z-50'>
        <button
          className='border-none text-3xl'
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <AiOutlineMenu className='text-orange-500' />
        </button>
        <div
          className={`menu ${
            isShowMenu ? "block" : "hidden"
          } text-center items-center bg-gray-900 absolute top-6 right-4 bottom-4 h-52 p-2`}
        >
          <ul className='flex flex-col justify-between items-center gap-y-4 text-base'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>White Paper</Link>
            </li>
            <li>
              <Link href='/'>Afiliate Program</Link>
            </li>
            <li>
              <button className='px-4 py-2 text-black font-bold bg-inherit text-white cursor-pointer rounded-md'>
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
