import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero w-3/4 lg:w-11/12 h-screen flex flex-col-reverse lg:flex-row justify-center items-center mx-auto">
      {/* left side */}
      <div className="w-full lg:w-3/4 flex flex-col justify-center items-start lg:items-start gap-y-4 p-6 pl-12">
        <h1 className="text-2xl lg:text-4xl text-orange-500 font-bold leading-snug tracking-wide">
          OGZ coin, a coin for <br /> the community
        </h1>
        <p className="w-full lg:w-3/4 text-start">
          OGZ is the utility token of the OGZ ecosystem. This coin is sure to
          attract investors who are looking for a fun and profitable investment
          opportunity. So saddle up, partner, and join the OGZ community today{" "}
          and become a real gang member!
        </p>
        <button className="btn">Read White Paper</button>
      </div>
      {/* right side */}
      <div className="w-3/4 h-4/5 lg:w-1/3 relative">
        <Image src="/images/heroImg.png" alt="hero" fill={true} />
      </div>
    </div>
  );
}
