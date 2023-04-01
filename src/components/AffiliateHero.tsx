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

const { useAccounts: useAccountsMetaMask } = metaMaskHook;

const { useAccounts: useAccountsWalletConnectV2 } = walletConnectV2Hook;

const { useAccounts: useAccountsWalletConnect } = walletConnectHook;

interface AffiliateHero {
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

const AffiliateHero: FC<AffiliateHero> = ({
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
      <div className="flex flex-col justify-center items-center w-4/5 max-h-screen md:h-[315px]  md:flex-row-reverse md:justify-between  gap-2 md:gap-2 my-24 mx-auto z-50 border-2 border-shade2 rounded-2xl p-4">
        {/* text container */}

        <div
          className=" flex flex-col 
         items-start justify-start md:justify-center md:items-center gap-4 z-50  w-full h-full translate-y-0 md:translate-y-8"
        >
          <h1 className="text-2xl  md:text-4xl text-orange-400 font-black bg-radial-text text-transparent bg-clip-text ">
            Welcome to OGZ affiliate program
          </h1>
          <p className="text-start md:text-center w-full md:w-1/2">
            To join our program, you should pick a unique nickname. This
            nickname will be used in your referral link and referral code and
            then you can share it with your community.
          </p>
          <input
            className="text-center bg-shade6 mx-auto md:mx-0 mt-4 p-4 cursor-pointer w-full md:w-[390px] text-sm"
            placeholder={`Pick an amazing and unique nickname...`}
            style={{ fontStyle: "italic" }}
          />

          <button className="btn mx-auto md:mx-0 mt-4 p-4 cursor-pointer w-full md:w-[390px] text-sm">
            <Link href="/affiliatePage2">Next</Link>
          </button>
        </div>
      </div>
    </>
  );
};
/* prettier-ignore */
export default AffiliateHero
