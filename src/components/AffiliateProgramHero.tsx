import Image from "next/image";
import { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineArrowDown, AiOutlineMenu } from "react-icons/ai";
import { BigNumber } from "ethers";
import { formatEther } from "@ethersproject/units";
import { getAddChainParameters } from "@/chains";
import type { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import type { Web3ReactHooks } from "@web3-react/core";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import type { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { hooks as walletConnectV2Hook } from "../connectors/walletConnectV2";
import { hooks as walletConnectHook } from "../connectors/walletConnect";
import { hooks as metaMaskHook, metaMask } from "../connectors/metaMask";
import Video from "./Video";
import Link from "next/link";

const { useAccounts: useAccountsMetaMask } = metaMaskHook;

const { useAccounts: useAccountsWalletConnectV2 } = walletConnectV2Hook;

const { useAccounts: useAccountsWalletConnect } = walletConnectHook;

interface IAffiliateProgramHero {
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

const AffiliateProgramHero: FC<IAffiliateProgramHero> = ({
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
  const accounts1 = useAccountsMetaMask();
  const accounts2 = useAccountsWalletConnect();
  const accounts3: any = useAccountsWalletConnectV2();

  const [bnbValue, setBnbValue] = useState<number>(0);
  const [ogzValue, setOgzValue] = useState<number>(0);
  const [desiredChainId, setDesiredChainId] = useState<number>(-1);

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

    setOgzValue(bnbValue * rate);
  };

  useEffect(() => {
    console.log("running");
    fetchExchangeRate();

    console.log("ogz", ogzValue);
  }, [bnbValue, ogzValue]);
  return (
    <>
      <div className='flex flex-col justify-start items-center w-4/5 md:flex-row-reverse md:justify-between  gap-4 md:gap-2 pb-4 my-24  mx-auto z-50 '>
        <div className='flex flex-col md:flex-row justify-center w-full   relative z-50 '>
          {/* exchange form */}
          <div className='  w-full md:w-[319px] h-[312px] flex flex-col items-center gap-3 md:gap-3 justify-start p-4 md:p-6 rounded-3xl z-10 relative '>
            <Image
              src={"/images/speaker.svg"}
              alt=''
              fill
              className='scale-auto md:scale-[1.90]'
            />
          </div>
        </div>
        {/* text container */}
        <div className='w-full h-1/2 md:h-full flex justify-center md:justify-start z-50'>
          <div
            className=' w-full md:w-3/4 flex flex-col 
         items-start justify-start md:justify-center gap-4 z-50 '
          >
            <h1 className='text-2xl  md:text-4xl text-orange-400 font-black bg-radial-text text-transparent bg-clip-text'>
              Bring OGZ to your audience.
            </h1>
            <p className='text-start w-full md:w-3/4'>
              Get access to endless opportunities for earning income at
              ultra-competitive rates in the industry
            </p>
            <button className='btn mx-auto md:mx-0 mt-4  cursor-pointer w-full md:w-72 text-sm'>
              <Link href='/affiliatePage'> Join Our Affiliate program </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
/* prettier-ignore */
export default AffiliateProgramHero
