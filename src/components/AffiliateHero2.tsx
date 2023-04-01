import Image from "next/image";
import Link from "next/link";
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
import { FaShareSquare } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const { useAccounts: useAccountsMetaMask } = metaMaskHook;

const { useAccounts: useAccountsWalletConnectV2 } = walletConnectV2Hook;

const { useAccounts: useAccountsWalletConnect } = walletConnectHook;

interface AffiliateHero2 {
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

const AffiliateHero2: FC<AffiliateHero2> = ({
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
      <div className='flex flex-col justify-center items-center w-4/5 h-auto   gap-1 md:gap-1 mt-12 my-32 mx-auto z-50 border-2 border-shade2 rounded-2xl p-2'>
        <div className='relative w-4/5 h-[312px] '>
          <Image src='/images/group.svg' alt='group' fill />
        </div>
        {/* text container */}
        <div
          className=' flex flex-col 
         items-start justify-start md:justify-center md:items-center gap-8 z-50  w-full h-1/2 md:h-full translate-y-0 md:translate-y-8 '
        >
          <h1 className='text-2xl  md:text-4xl text-orange-400 font-black bg-radial-text text-transparent bg-clip-text text-center w-full md:w-3/5'>
            Congratulations, you joined OGZ affiliate program. Share and earn.
          </h1>
          <p className='text-center w-full md:w-3/5'>
            To join our program, you should pick a unique nickname. This
            nickname will be used in your referral link and referral code and
            then you can share it with your community.
          </p>
          <div className='flex flex-col md:flex-row w-3/5 justify-center items-center gap-2'>
            <div className=' w-full md:w-1/2 flex justify-between items-center bg-shade7 rounded-xl p-2'>
              <input
                type='text'
                placeholder='OGZ.io/thisisanexample'
                className=' bg-inherit border-none outline-0 text-gray-400 p-4'
              />
              <FiCopy className='inline  rounded-lg text-center text-sm p-1 w-10 h-8 bg-gradient-radial2' />
            </div>

            <div className=' w-full md:w-1/2 flex justify-between items-center bg-shade7 rounded-xl p-2'>
              <input
                type='text'
                placeholder='OGZ.io/thisisanexample'
                className=' bg-inherit border-none outline-0 text-gray-400 p-4'
              />
              <FiCopy className='inline  rounded-lg text-center text-sm p-1 w-10 h-8 bg-gradient-radial2' />
            </div>
          </div>

          <div className='flex flex-col md:flex-row  w-full md:w-3/5 justify-between items-center gap-2'>
            <button className='btn mx-auto md:mx-0 mt-4 p-4 cursor-pointer  text-sm w-full md:w-1/6 bg-radial-button4 text-orangeLight rounded-md'>
              <Link href='/affiliatePage2'>Back</Link>
            </button>

            <button className='btn mx-auto md:mx-0 mt-4 p-4 cursor-pointer w-full md:w-4/5 text-sm'>
              <Link href='/affiliatePage2'>Check Affiliate Dashboard</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
/* prettier-ignore */
export default AffiliateHero2
