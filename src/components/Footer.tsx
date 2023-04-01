import { FaShareSquare, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Resource from "./Resource";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className='w-4/5 max-h-screen md:h-[465px] mx-auto flex flex-col md:flex-row h-98 gap-8 '>
      {/* left side footer */}
      <Resource />
      {/* right side footer */}
      <SocialMedia />
    </div>
  );
}
