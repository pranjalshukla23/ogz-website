//uniswap widgets library
import { Web3Provider } from "@ethersproject/providers";
import {
  SupportedLocale,
  SUPPORTED_LOCALES,
  SwapWidget,
  Theme,
} from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { providers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

const jsonRpcUrlMap =
  "https://goerli.infura.io/v3/17d501c2696c49e0ab34da8f4f1cfffd";
const TOKEN_LIST = "https://tokens.uniswap.org/";

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

export default function Exchange() {
  const [provider, setProvider] = useState<Web3Provider>();
  const [account, setAccount] = useState({
    address: "",
    provider: provider,
  });

  // useEffect(() => {
  //   let p = new ethers.providers.Web3Provider((window as any).ethereum) as any;
  //   console.log(p);
  //   setProvider(p);
  // }, []);

  async function connectWallet() {
    console.log("running");
  }
  return (
    <div className='flex flex-col-reverse md:flex-row justify-start md:justify-between items-center mb-12 w-4/5  gap-6 md:gap-6 '>
      <button onClick={connectWallet}>Connect Wallet</button>
      {/* exchange form */}
      <SwapWidget
        provider={provider}
        jsonRpcEndpoint={jsonRpcUrlMap}
        tokenList={TOKEN_LIST}
        theme={theme}
        width={200}
      />

      {/* right side  */}
      <div className='flex flex-col justify-start items-start gap-4 p-4 w-full md:w-1/2 '>
        <h1 className='text-2xl md:text-3xl text-orange-500 font-bold leading-wide tracking-wide text-orangeLight'>
          Buy some OGZ coin right now
        </h1>
        <p className='w-full md:w-3/4 text-start '>
          Don &apos; t lose the opportunity to buy some OGZ coins while you can.
          Our strong gang will overcome any challenge and we will dominate this
          industry no matter what. OGZ is backed by the community and for this
          reason, nothing can stop us.
        </p>
      </div>
    </div>
  );
}
