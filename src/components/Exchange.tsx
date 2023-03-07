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
    <div className=" w-full lg:w-11/12 flex flex-col-reverse lg:flex-row justify-start items-center mx-auto p-6">
      {/* exchange form */}
      <div className="flex justify-center items-center w-full lg:w-1/2 h-full p-4">
        <div className="Uniswap">
          <SwapWidget theme={theme} />
        </div>
      </div>
      {/* right side  */}
      <div className="w-full lg:w-1/2  flex flex-col justify-center items-start lg:items-start gap-y-8 p-4">
        <h1 className="text-2xl lg:text-4xl text-orange-500 font-bold leading-wide tracking-wide">
          Buy some OGZ coin right now
        </h1>
        <p className="w-full lg:w-3/4 text-start">
          Don't lose the opportunity to buy some OGZ coins while you can. Our
          strong gang will overcome any challenge and we will dominate this
          industry no matter what. OGZ is backed by the community and for this
          reason, nothing can stop us.
        </p>
      </div>
    </div>
  );
}
