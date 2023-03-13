import {
  SupportedLocale,
  SUPPORTED_LOCALES,
  SwapWidget,
  Theme,
} from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";

export default function Exchange() {
  const theme: Theme = {
    primary: "#FFF",
    secondary: "#A9A9A9",
    interactive: "#000",
    container: "rgba(255, 255, 255, 0.04)",
    module: "rgba(217, 217, 217, 0.04)",
    accent: "#E7862E",
    outline: "#CC1",
    dialog: "#000",
    fontFamily: "Josefin Sans",
    borderRadius: 0.5,
  };

  return (
    <div className='flex flex-col-reverse md:flex-row justify-start items-center mx-auto mb-12 w-11/12  gap-6 md:gap-2'>
      {/* exchange form */}
      <div className='flex justify-start items-center w-full md:w-1/2 h-full'>
        <SwapWidget theme={theme} />
      </div>
      {/* right side  */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-start md:items-start gap-y-4 '>
        <h1 className='text-2xl md:text-2xl text-orange-500 font-bold leading-wide tracking-wide'>
          Buy some OGZ coin right now
        </h1>
        <p className='w-full md:w-3/4 text-start'>
          Don &apos; t lose the opportunity to buy some OGZ coins while you can.
          Our strong gang will overcome any challenge and we will dominate this
          industry no matter what. OGZ is backed by the community and for this
          reason, nothing can stop us.
        </p>
      </div>
    </div>
  );
}
