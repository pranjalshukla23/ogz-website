import { FaShareSquare, FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Resource from "./Resource";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className='w-full md:w-4/5 mx-auto flex flex-col md:flex-row h-98 gap-4 px-4 mb-24'>
      {/* left side footer */}
      <Resource />
      {/* right side footer */}
      <SocialMedia />
    </div>
  );
}
