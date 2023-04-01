import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineMenu } from "react-icons/ai";
import { BigNumber, ethers } from "ethers";
import { formatEther } from "@ethersproject/units";
import { getAddChainParameters } from "@/chains";
import type { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { Web3ReactHooks, useWeb3React } from "@web3-react/core";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import type { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { hooks as walletConnectV2Hook } from "../connectors/walletConnectV2";
import { hooks as walletConnectHook } from "../connectors/walletConnect";
import { hooks as metaMaskHook, metaMask } from "../connectors/metaMask";
import { Web3Provider } from "@ethersproject/providers";
import Video from "./Video";
import ROUTER from "../contractAbis/router.json";
declare global {
  interface Window {
    //@ts-ignore
    ethereum: any;
  }
}

const { useAccounts: useAccountsMetaMask } = metaMaskHook;

const { useAccounts: useAccountsWalletConnectV2 } = walletConnectV2Hook;

const { useAccounts: useAccountsWalletConnect } = walletConnectHook;

interface IHero {
  metaMask: MetaMask;
  walletConnect: WalletConnect;
  isModalOpen: Boolean;
  setModalOpen: (val: Boolean) => void;
  connector?:
  | MetaMask
  | WalletConnect
  | WalletConnectV2
  | CoinbaseWallet
  | Network
  | GnosisSafe;
  ENSNames: ReturnType<Web3ReactHooks["useENSNames"]>;
  provider: ReturnType<Web3ReactHooks["useProvider"]>;
  accounts: any[];
  activeChainId: number;
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
  error: Error | undefined;
  setError: (error: Error) => void;
}

const Hero: FC<IHero> = ({
  metaMask,
  walletConnect,
  connector,
  accounts,
  ENSNames,
  provider,
  isModalOpen,
  setModalOpen,
  activeChainId,
  isActivating,
  isActive,
  error,
  setError,
}) => {
  console.log("connector", connector);
  const accounts1 = useAccountsMetaMask();
  const accounts2 = useAccountsWalletConnect();
  const accounts3: any = useAccountsWalletConnectV2();
  console.log("Connector: ", connector);
  const [bnbValue, setBnbValue] = useState<number>(0.1);
  const [ogzValue, setOgzValue] = useState<number>(0);
  const [desiredChainId, setDesiredChainId] = useState<number>(-1);
  const [lowBalance, setLowBalance] = useState<Boolean>(false);
  useEffect(() => {
    if (activeChainId && (!desiredChainId || desiredChainId === -1)) {
      setDesiredChainId(activeChainId);

    }
  }, [desiredChainId, activeChainId]);

  const fetchExchangeRate = async () => {
    const response = await fetch(
      "https://rest.coinapi.io/v1/exchangerate/BNB/USD",
      {
        headers: {
          "X-CoinAPI-Key": "4B78B507-7F52-4449-A7B4-D7F08F661D0C",
        },
      }
    );

    const { rate } = await response.json();

    // setOgzValue(bnbValue * rate);
  };

  const getOGXprice = async () => {
    const tokens = [
      "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      "0x6F8A6890d4E59B83eC9fE46623d988C7f732a1Cc",
    ];
    //@ts-ignore
    const provider = new ethers.getDefaultProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    );
    const router = new ethers.Contract(ROUTER.address, ROUTER.abi, provider);
    const amountIn = ethers.utils.parseEther(bnbValue.toString());
    const amountOut = await router.getAmountsOut(amountIn, tokens);
    setOgzValue(parseFloat(ethers.utils.formatUnits(amountOut[1])));
    console.log(ogzValue);
  };
  useEffect(() => {
    console.log("running");

    // fetchExchangeRate();

    if (Number(bnbValue) > 0) {
      getOGXprice();
      getAvailableBalance(Number(bnbValue));
    }

    console.log("ogz", ogzValue);
  }, [bnbValue, ogzValue]);

  const BNBtoOGZswap = async () => {
    console.log("HERE");

    const tokens = [
      "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      "0x6F8A6890d4E59B83eC9fE46623d988C7f732a1Cc",
    ];

    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    //@ts-ignore
    const { chainId } = await provider.getNetwork();
    async function swapBNBtoOGZ() {
      try {
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        //@ts-ignore
        const signer = provider.getSigner();
        const router = new ethers.Contract(ROUTER.address, ROUTER.abi, signer);
        console.log(router);
        //@ts-ignore
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const addresss = accounts[0];
        const time = Math.floor(Date.now() / 1000) + 200000;
        const deadline = ethers.BigNumber.from(time);
        const amountIn = ethers.utils.parseEther(bnbValue.toString());
        console.log(ethers.utils.formatUnits(amountIn));
        const amountOut = await router.getAmountsOut(amountIn, tokens);
        await (
          await router.swapExactETHForTokens(
            amountOut[1],
            tokens,
            addresss,
            deadline,
            {
              value: amountIn,
            }
          )
        ).wait();
      } catch (error) {
        console.log(error);
      }
    }
    if (chainId !== 97) {
      //@ts-ignore
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${Number(97).toString(16)}` }],
      });
      swapBNBtoOGZ();
    } else {
      swapBNBtoOGZ();
    }
  };

  async function getAvailableBalance(value: any) {
    if (accounts) {
      //@ts-ignore
      const provider = new ethers.getDefaultProvider(
        "https://data-seed-prebsc-1-s1.binance.org:8545/"
      );
      const blance = await provider.getBalance(accounts[0]);
      const balancbnb = ethers.utils.formatEther(blance);
      if (Number(balancbnb) < Number(value)) {
        setLowBalance(true);
      }
      else {
        setLowBalance(false);
      }

    }

    //@ts-ignore

  }


  return (
    <>
      <div className='flex flex-col justify-start items-center w-4/5 md:flex-row-reverse md:justify-between  gap-4 md:gap-2 pb-4 mb-24  mx-auto z-50'>
        <div className='flex flex-col md:flex-row justify-center w-full md:w-1/2  relative z-50'>
          <div className=' flex justify-center items-center'>
            <div className='h-full  md:h-1/2 border-2 border-shade2 text-center p-8 rounded-3xl translate-x-0 md:translate-x-6 translate-y-6 rotate-0 text bg-radial-text3 text-transparent bg-clip-text font-bold z-50'>
              Buy OGZ instantly
            </div>
          </div>
          {/* exchange form */}
          <div className='bg-radial-card  w-full md:w-[376px] h-[466px] flex flex-col items-center gap-3 md:gap-3 justify-start p-4 md:p-6 rounded-3xl z-10'>
            <div className='flex flex-col  justify-between items-start gap-2 w-full '>
              {/* heading */}
              <div className='subheading'>
                <h1 className='text-xl md:text-2xl font-bold leading-wide tracking-wide  mb-0 md:mb-2 bg-radial-text2 text-transparent bg-clip-text'>
                  Exchange
                </h1>
                <p className='w-full text-start text-base text-black'>
                  Trade <b>OGz</b> token in an instant
                </p>
              </div>
              <div className='connect'>
                {/* <ConnectWallet accentColor='#382422' btnTitle='Connect' /> */}
                {/* <button
              className='btn text-base bg-[#382422] text-white font-normal w-40'
              onClick={() => setModalOpen(true)}
            > */}

                {((!accounts1 || accounts1.length === 0) &&
                  (!accounts2 || accounts2.length === 0)) ||
                  (!accounts3 && accounts3?.length === 0) ? (
                  <button
                    className='px-4 py-2 font-bold  bg-[#110401] cursor-pointer rounded-md text-orange w-52 text-sm'
                    onClick={() => setModalOpen(true)}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <button
                    className='px-4 py-2 font-bold bg-inherit text-black cursor-pointer rounded-md btn bg-orangeLight w-52 text-center'
                    onClick={() => {
                      if (accounts1) {
                        metaMask?.resetState();
                      }
                      if (!accounts2) walletConnect?.resetState();
                    }}
                  >
                    {accounts1 && (
                      <>
                        {accounts1[0]?.slice(0, 5) +
                          "..." +
                          accounts1[0]?.slice(37, 42)}
                      </>
                    )}

                    {accounts2 && (
                      <>
                        {accounts2[0]?.slice(0, 5) +
                          "..." +
                          accounts2[0]?.slice(37, 42)}
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* input 1 */}
            <div className='flex flex-col justify-start  items-start w-full md:w-full p-2 mt-1 md:mt-3 rounded-md relative text-[#110401] border-2 border-shade'>
              <div className='pl-3 w-full'>From</div>
              <div className='currency flex justify-between items-center gap-4  w-full p-3'>
                <input
                  type='number'
                  className='text-black border-none outline-none w-1/2 bg-inherit '
                  placeholder='0.0'
                  value={bnbValue}
                  onChange={(e) => { setBnbValue(parseFloat(e.target.value)) }}
                />
                <div className='crypto flex justify-between items-center gap-2'>
                  <Image
                    src='/images/binance.svg'
                    alt='binance'
                    width={20}
                    height={50}
                  />
                  <span>BNB</span>
                </div>
              </div>
              <div className='arrowDiv w-full flex justify-center absolute -bottom-6 z-50 '>
                <div className='rounded-full  w-12 h-12 text-center flex justify-center items-center bg-[#E56613] text-white   border-[#EA8340] border-2 '>
                  <AiOutlineArrowDown className='text-xl' />
                </div>
              </div>
            </div>

            {/* input 2 */}
            <div className='  flex flex-col justify-start p-2 items-start w-full md:w-full md:p-2 rounded-md text-[#110401] border-2 border-shade'>
              <div className='pl-3 w-full'>To</div>
              <div className='currency flex justify-between items-center gap-4  w-full p-3'>
                <input
                  type='number'
                  value={ogzValue}
                  onChange={(e) => setOgzValue(parseFloat(e.target.value))}
                  className='text-black border-none outline-none w-1/2 bg-inherit '
                />
                <div className='crypto flex justify-between items-center gap-2'>
                  <div className='logo relative bg-orange rounded-full'>
                    <Image
                      src={"/images/logo.svg"}
                      alt='logo'
                      width={20}
                      height={50}
                    />
                  </div>
                  <span>OGZ</span>
                </div>
              </div>
            </div>
            <div className=' w-full flex justify-center pt-1 md:pt-3'>
              {lowBalance && <>

                <button
                  className='px-4 py-2 font-bold  bg-radial-button cursor-pointer rounded-md text-orange w-full text-sm'
                  onClick={BNBtoOGZswap}
                  disabled
                >
                  Insufficient Balance
                </button>


              </>}
              {!lowBalance && <button
                className='px-4 py-2 font-bold  bg-radial-button cursor-pointer rounded-md text-orange w-full text-sm'
                onClick={BNBtoOGZswap}
              >
                Exchange
              </button>
              }

            </div>


            <p className=' w-full text-start text-xs  text-gray-900'>
              Powered by PancakeSwap
            </p>
          </div>
        </div>
        {/* text container */}
        <div className='w-full h-1/2 md:h-full flex justify-center md:justify-start z-50'>
          <div
            className=' w-full flex flex-col 
         items-start justify-start md:justify-center gap-4 z-50'
          >
            <h1 className='text-2xl  md:text-5xl text-orange-400 font-black bg-radial-text text-transparent bg-clip-text'>
              OGZ coin, a coin for the community
            </h1>
            <p className='text-start w-full md:w-4/5'>
              OGZ is the utility token of the OGZ ecosystem. This coin is sure
              to attract investors who are looking for a fun and profitable
              investment opportunity. So saddle up, partner, and join the OGZ
              community today and become a real gang member!
            </p>
            <button className='btn mx-auto md:mx-0 mt-4  cursor-pointer w-52 md:w-72 text-sm'>
              Read White Paper
            </button>
          </div>
        </div>
      </div>
      <Video />
    </>
  );
};
/* prettier-ignore */
export default Hero
