import Image from "next/image";
import Link from "next/link";
import { FC, useCallback, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
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

const { useAccounts: useAccountsMetaMask } = metaMaskHook;

const { useAccounts: useAccountsWalletConnectV2 } = walletConnectV2Hook;

const { useAccounts: useAccountsWalletConnect } = walletConnectHook;

interface IHeader {
  metaMask: MetaMask;
  walletConnect: WalletConnect;
  isModalOpen: Boolean;

  setModalOpen: (val: Boolean) => void;
}

const Header: FC<IHeader> = ({
  metaMask,
  walletConnect,
  isModalOpen,
  setModalOpen,
}) => {
  let accounts1 = useAccountsMetaMask();
  const accounts2 = useAccountsWalletConnect();
  const accounts3 = useAccountsWalletConnectV2();

  const [isShowMenu, setIsShowMenu] = useState(false);
  const [desiredChainId, setDesiredChainId] = useState<number>(-1);

  console.log("metamask", metaMask);
  console.log("wallet connect", walletConnect);
  console.log("accounts1", accounts1);
  console.log("accounts2", accounts2);

  return (
    <div
      className={`flex justify-between lg:justify-around items-center gap-4 mb-6 ${
        isModalOpen ? "opacity-20" : "opacity-100"
      }`}
    >
      <div className='logo-container flex justify-start items-center text-5xl font-extrabold text-orange gap-x-4 z-50 '>
        <div className='logo relative bg-orange rounded-full p-4 w-16 h-16'>
          <Image
            src={"/images/logo.svg"}
            alt='logo'
            fill={true}
            className='object-contain py-2'
          />
        </div>
        <h1>OGZ</h1>
      </div>

      {/* desktop menu */}
      <div className='menu hidden lg:flex  text-center items-center z-50'>
        <ul className='flex justify-between items-center gap-x-16 text-xs lg:text-sm'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>White Paper</Link>
          </li>
          <li>
            <Link href='/'>Afiliate Program</Link>
          </li>
          <li>
            {((!accounts1 || accounts1.length === 0) &&
              (!accounts2 || accounts2.length === 0)) ||
            //@ts-ignore
            (!accounts3 && accounts3?.length === 0) ? (
              <button
                className='px-4 py-2 font-bold bg-inherit text-black cursor-pointer rounded-md btn bg-orangeLight w-52'
                onClick={() => setModalOpen(true)}
              >
                Connect wallet
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
          </li>
        </ul>
      </div>

      {/* mobile menu */}
      <div className='mobile-menu relative lg:hidden text-end z-50'>
        <button
          className='border-none text-3xl'
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <AiOutlineMenu className='text-orangeLight' />
        </button>
        <div
          className={`menu ${
            isShowMenu ? "block" : "hidden"
          } text-center items-center bg-gray-900 absolute top-6 right-4 bottom-4 h-52 p-2`}
        >
          <ul className='flex flex-col justify-between items-center gap-y-4 text-base'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/'>White Paper</Link>
            </li>
            <li>
              <Link href='/'>Afiliate Program</Link>
            </li>
            <li>
              <button
                className='px-4 py-2 font-bold  text-white cursor-pointer rounded-md btn w-full bg-inherit'
                onClick={() => setModalOpen(true)}
              >
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
