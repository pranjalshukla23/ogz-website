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
    container: "#160B0A",
    module: "rgba(217, 217, 217, 0.04)",
    accent: "#E7862E",
    outline: "#CC1",
    dialog: "#000",
    fontFamily: "Josefin Sans",
    borderRadius: 0.5,
  };

  return (
    <div className='flex flex-col-reverse md:flex-row justify-start md:justify-between items-center mb-12 w-4/5  gap-6 md:gap-6'>
      {/* exchange form */}

      <SwapWidget theme={theme} width={200} />

      {/* right side  */}
      <div className='flex flex-col justify-start items-start gap-4 p-4 w-full md:w-2/3'>
        <h1 className='text-2xl md:text-3xl text-orange-500 font-bold leading-wide tracking-wide text-orangeLight'>
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
