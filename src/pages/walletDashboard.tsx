import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import PartnerSlider from "@/components/PartnerSlider";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Community from "@/components/Community";
import About from "@/components/About";
import Security from "@/components/Security";
import Membership from "@/components/Membership";
import Resources from "@/components/Footer";
import Footer from "@/components/Footer";
import TimeLine from "@/components/TimeLine";
import Layout from "@/components/Layout";
import Modal from "@/components/Modal";
import { useState, useEffect } from "react";
import MetaMaskCard from "@/components/connectorCards/MetaMaskCard";
import { hooks, metaMask } from "../connectors/metaMask";
import Program from "@/components/program";
import AffiliateHero from "@/components/AffiliateHero";
import { FaChartPie } from "react-icons/fa";
import { MdAccountBalanceWallet } from "react-icons/md";
import { BsLightbulbFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { walletConnect } from "@/connectors/walletConnect";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function WalletDashboard() {
  const [isModalOpen, setModalOpen] = useState<Boolean>(false);
  const chainId: any = useChainId();
  const accounts: any = useAccounts();
  const isActivating = useIsActivating();

  const isActive = useIsActive();

  const provider = useProvider();
  const ENSNames = useENSNames(provider);

  const [error, setError] = useState<Error | undefined>();

  // attempt to connect eagerly on mount
  useEffect(() => {
    void metaMask.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to metamask");
    });
  }, []);

  return (
    <>
      <Layout>
        <>
          <div className="bg-[url('/images/background-ogz-1.svg')] bg-no-repeat bg-cover">
            <Header
              setModalOpen={setModalOpen}
              isModalOpen={isModalOpen}
              metaMask={metaMask}
              walletConnect={walletConnect}
            />
            <Modal
              activeChainId={chainId}
              isActivating={isActivating}
              isActive={isActive}
              error={error}
              setError={setError}
              isModalOpen={isModalOpen}
              setModalOpen={setModalOpen}
            />
            <div className={`${isModalOpen ? "opacity-20" : "opacity-100"}`}>
              <div className='flex flex-col md:flex-row w-4/5 mx-auto z-50 border-2 border-shade2 rounded-2xl h-auto md:h-screen my-24'>
                {/* left side */}

                {/* mobile */}
                <div className=' flex  md:hidden w-full bg-shade8 justify-between items-center p-2'>
                  <div className='w-32 flex justify-start items-center gap-4 '>
                    <div className='w-[34px] h-[34px] relative  text-center flex justify-center items-center bg-radial-button6 rounded-md'>
                      <FaChartPie className='text-2xl text-orangeLight' />
                    </div>
                    <span className='text-base'>Statistics</span>
                  </div>
                  <div className='w-[34px] h-[34px] relative  text-center flex justify-center items-center bg-radial-button7 rounded-md'>
                    <BsChevronDown className='text-2xl text-orangeLight' />
                  </div>
                </div>

                {/* desktop */}
                <div className='hidden md:block   w-1/4 h-full bg-shade8'>
                  <ol className='  flex flex-col justify-center items-center'>
                    <li className=' w-full text-center flex justify-start items-center gap-4 p-4'>
                      <div className='w-32 flex justify-start items-center gap-4'>
                        <div className='w-[34px] h-[34px] relative  text-center flex justify-center items-center bg-radial-button6 rounded-md'>
                          <FaChartPie className='text-2xl text-orangeLight' />
                        </div>
                        <span className='text-base'>Statistics</span>
                      </div>
                    </li>

                    <li className=' w-full text-center flex justify-start items-center gap-4 p-4 bg-shade8'>
                      <div className='w-32 flex justify-start items-center gap-4'>
                        <div className='w-[34px] h-[34px] relative  text-center flex justify-center items-center bg-radial-button5 rounded-md'>
                          <MdAccountBalanceWallet className='text-2xl text-white' />
                        </div>
                        <span className='text-base text-orangeLight'>
                          Wallet
                        </span>
                      </div>
                    </li>
                    <li className='w-full text-center flex justify-start items-center gap-4 p-4 '>
                      <div className='w-32 flex justify-start items-center gap-4'>
                        <div className='w-[34px] h-[34px] relative  text-center flex justify-center items-center bg-radial-button6 rounded-md '>
                          <BsLightbulbFill className='text-2xl text-orangeLight' />
                        </div>
                        <span className='text-base text-white'>Insights</span>
                      </div>
                    </li>
                    <li className=' w-full text-center flex justify-start items-center gap-4 p-4 '>
                      <div className='w-32 flex justify-start items-center gap-4'>
                        <div className='w-[34px] h-[34px] relative  text-center flex justify-center items-center bg-radial-button6 rounded-md'>
                          <AiOutlineSetting className='text-2xl text-orangeLight' />
                        </div>
                        <span className='text-base text-white'>Settings</span>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* right side */}
                <div className=' w-full flex flex-col gap-4'>
                  {/* heading */}
                  <div className='heading flex flex-col md:flex-row  justify-between items-start md:items-center  gap-2 p-4'>
                    <h1 className='bg-clip-text text-transparent bg-radial-text text-xl md:text-3xl font-bold'>
                      Welcome back
                    </h1>

                    <div className='inputs flex flex-col md:flex-row justify-center items-center gap-2 '>
                      <div className='flex justify-between items-center bg-shade7  text-white p-2 text-sm'>
                        <span>OGZ.io/thisisanexample</span>

                        <div className=' p-2 rounded-md bg-gradient-radial2'>
                          <Image
                            src='/images/copy.svg'
                            width={15}
                            height={10}
                            alt='image'
                          />
                        </div>
                      </div>

                      <div className='flex justify-between items-center bg-shade7  text-white p-2 text-sm'>
                        <span>OGZ.io/thisisanexample</span>

                        <div className='p-2 rounded-md bg-gradient-radial2'>
                          <Image
                            src='/images/copy.svg'
                            width={15}
                            height={10}
                            alt='image'
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* subheading */}
                  <div className='heading flex flex-col justify-between items-start   gap-2 p-4 mx-0 md:mx-4'>
                    <h1 className='bg-clip-text text-transparent bg-radial-text text-xl md:text-xl font-bold'>
                      Your wallet
                    </h1>
                    <div className='inputs flex flex-row w-full gap-2 '>
                      <div className='flex justify-between items-center bg-shade7  text-white p-2 text-sm w-full'>
                        <span>OGZ.io/thisisanexample</span>

                        <div className='icons flex justify-center items-center gap-2'>
                          <div className='flex justify-center items-center rounded-md bg-gradient-radial2'>
                            <Image
                              src='/images/copy.svg'
                              width={15}
                              height={10}
                              alt='image'
                            />
                          </div>
                          <div className='w-[34px] h-[34px] relative  text-center flex justify-center items-center bg-radial-button6 rounded-md'>
                            <AiFillEdit />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className='text-sm'>
                      All the rewards will be sent to this wallet address. You
                      can edit it by connecting a new wallet and the rewards
                      after editing the address will be sent to the new wallet.
                    </p>
                  </div>

                  {/* table */}
                  <div className='heading flex flex-col justify-between items-start gap-2 p-4 mx-0 md:mx-4'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2 w-full'>
                      <h1 className='bg-clip-text text-transparent bg-radial-text text-xl md:text-xl font-bold'>
                        Rewards sent to your wallet
                      </h1>
                      <span className='text-xs text-orangeLight'>
                        248 Transactions in total
                      </span>
                    </div>
                    <div className=' w-full bg-shade7 flex flex-col text-sm text-orangeLight overflow-hidden'>
                      {/* column names */}
                      <div className='flex justify-between items-center  p-0 md:p-4 '>
                        <div className=' w-1/2'>
                          <h3>Time</h3>
                        </div>
                        <div className=' w-1/2'>
                          <h3>Value</h3>
                        </div>
                        <div className=' w-1/2'>
                          <h3>Transaction hash</h3>
                        </div>
                      </div>
                      {/* rows */}
                      <div className='rows '>
                        <div className='flex justify-between items-center p-0 md:p-4 border-b-2 border-b-shade5'>
                          <div className=' w-1/2'>
                            <h3>34 min ago</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>12000 OGZ</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>6146ccf6a66d994f7c363db875...</h3>
                          </div>
                        </div>
                        <div className='flex justify-between items-center p-0 md:p-4 border-b-2 border-b-shade5'>
                          <div className=' w-1/2'>
                            <h3>34 min ago</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>12000 OGZ</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>6146ccf6a66d994f7c363db875...</h3>
                          </div>
                        </div>
                        <div className='flex justify-between items-center p-0 md:p-4 border-b-2 border-b-shade5'>
                          <div className=' w-1/2'>
                            <h3>34 min ago</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>12000 OGZ</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>6146ccf6a66d994f7c363db875...</h3>
                          </div>
                        </div>
                        <div className='flex justify-between items-center p-0 md:p-4 border-b-2 border-b-shade5'>
                          <div className=' w-1/2'>
                            <h3>34 min ago</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>12000 OGZ</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>6146ccf6a66d994f7c363db875...</h3>
                          </div>
                        </div>
                        <div className='flex justify-between items-center p-0 md:p-4 border-b-2 border-b-shade5'>
                          <div className=' w-1/2'>
                            <h3>34 min ago</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>12000 OGZ</h3>
                          </div>
                          <div className=' w-1/2'>
                            <h3>6146ccf6a66d994f7c363db875...</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </>
      </Layout>
    </>
  );
}
