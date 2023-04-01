import React, { FC, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { hooks, metaMask } from "../connectors/metaMask";
import { walletConnectV2 } from "../connectors/walletConnectV2";
import { walletConnect } from "../connectors/walletConnect";
import { GnosisSafe } from "@web3-react/gnosis-safe";
import { MetaMask } from "@web3-react/metamask";
import { Network } from "@web3-react/network";
import { WalletConnect } from "@web3-react/walletconnect";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
import { getName } from "../utils";
import { Accounts } from "./Accounts";
import { Chain } from "./Chain";
import { ConnectWithSelect } from "./ConnectWithSelect";
import { Status } from "./Status";
import { getAddChainParameters } from "@/chains";
import type { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import type { Web3ReactHooks } from "@web3-react/core";

interface IModal {
  connector?:
    | MetaMask
    | WalletConnect
    | WalletConnectV2
    | CoinbaseWallet
    | Network
    | GnosisSafe;
  activeChainId: ReturnType<Web3ReactHooks["useChainId"]>;
  chainIds?: ReturnType<Web3ReactHooks["useChainId"]>[];
  isActivating: ReturnType<Web3ReactHooks["useIsActivating"]>;
  isActive: ReturnType<Web3ReactHooks["useIsActive"]>;
  error: Error | undefined;
  setError: (error: Error) => void;
  ENSNames?: ReturnType<Web3ReactHooks["useENSNames"]>;
  provider?: ReturnType<Web3ReactHooks["useProvider"]>;
  accounts?: string[];
  isModalOpen: Boolean;
  setModalOpen: (val: Boolean) => void;
}

const Modal: FC<IModal> = ({
  connector,
  activeChainId,
  chainIds,
  isActivating,
  isActive,
  error,
  setError,
  ENSNames,
  accounts,
  provider,
  isModalOpen,
  setModalOpen,
}) => {
  const [desiredChainId, setDesiredChainId] = useState<number>(-1);

  /**
   * When user connects eagerly (`desiredChainId` is undefined) or to the default chain (`desiredChainId` is -1),
   * update the `desiredChainId` value so that <select /> has the right selection.
   */
  useEffect(() => {
    if (activeChainId && (!desiredChainId || desiredChainId === -1)) {
      setDesiredChainId(activeChainId);
    }
  }, [desiredChainId, activeChainId]);

  const switchChain = useCallback(
    async (
      desiredChainId: number,
      connector:
        | MetaMask
        | WalletConnect
        | WalletConnectV2
        | CoinbaseWallet
        | Network
        | GnosisSafe
    ) => {
      setDesiredChainId(desiredChainId);

      try {
        if (
          // If they want to connect to the default chain and we're already connected, return
          desiredChainId === -1 &&
          activeChainId !== undefined
        ) {
          return;
        }

        console.log("running this");
        if (desiredChainId === -1 || connector instanceof GnosisSafe) {
          await connector.activate();
        } else if (
          connector instanceof WalletConnectV2 ||
          connector instanceof WalletConnect ||
          connector instanceof Network
        ) {
          await connector.activate(desiredChainId);
        } else {
          await connector.activate(getAddChainParameters(desiredChainId));
        }

        setModalOpen(false);
      } catch (error: any) {
        console.log(error);
        setError(error);
      }
    },
    [connector, activeChainId, setError]
  );
  return (
    <>
      {isModalOpen && (
        <div className="z-50">
          {/* <!-- Main modal --> */}
          <div
            id="crypto-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50  w-full overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full  flex justify-center items-center p-8 "
          >
            <div className="relative w-full md:w-[608px] h-full  md:h-auto z-[100] bg-radial-color rounded-md">
              {/* <!-- Modal content --> */}
              <div className="relative  rounded-lg shadow z-50  ">
                <button
                  type="button"
                  className="absolute top-0 right-0  text-orangeLight rounded-lg text-sm p-4 ml-auto inline-flex items-center bg-shade8 dark:hover:text-white z-[100] "
                  data-modal-hide="crypto-modal"
                  onClick={() => setModalOpen(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                {/* <!-- Modal header --> */}
                <div className="px-6 py-4  rounded-t ">
                  <h3 className="text-lg font-normal text-white">
                    Connect your wallet
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-6">
                  <p className="text-sm font-normal text-white">
                    By connecting your wallet, you can instantly buy OGZ coin or
                    join our affiliate program and get paid.
                  </p>
                  <ul className="my-4 space-y-3">
                    <li>
                      <button
                        className="w-full bg-radial-button8 rounded-md"
                        onClick={(event) => {
                          console.log("value changed");
                          switchChain(Number(97), walletConnect);
                        }}
                      >
                        <a
                          href="#"
                          className="flex items-center p-3 text-base font-bold  rounded-lg  group hover:shadow  text-black"
                        >
                          <div className=" p-2 bg-shade9 rounded-md">
                            <Image
                              src="/images/trust.svg"
                              width="20"
                              height="20"
                              alt="trust"
                            />
                          </div>

                          <span className="flex ml-3 font-normal whitespace-nowrap  justify-start">
                            Trust Wallet
                          </span>
                        </a>
                      </button>
                    </li>

                    <li>
                      <button
                        className="w-full  flex justify-start bg-radial-button8 rounded-md"
                        onClick={(event) => {
                          console.log("value changed");
                          switchChain(Number(97), metaMask);
                        }}
                      >
                        <a
                          href="#"
                          className="flex justify-between items-center p-3  font-bold rounded-lg  group hover:shadow  text-black text-base"
                        >
                          <div className=" p-2 bg-shade9 rounded-md">
                            <svg
                              aria-hidden="true"
                              className="h-5"
                              viewBox="0 0 40 38"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z"
                                fill="#E17726"
                              />
                              <path
                                d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z"
                                fill="#E27625"
                              />
                              <path
                                d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z"
                                fill="#E27625"
                              />
                              <path
                                d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z"
                                fill="#E27625"
                              />
                              <path
                                d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z"
                                fill="#E27625"
                              />
                              <path
                                d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z"
                                fill="#E27625"
                              />
                              <path
                                d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z"
                                fill="#E27625"
                              />
                              <path
                                d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z"
                                fill="#E27625"
                              />
                              <path
                                d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z"
                                fill="#D5BFB2"
                              />
                              <path
                                d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z"
                                fill="#D5BFB2"
                              />
                              <path
                                d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z"
                                fill="#233447"
                              />
                              <path
                                d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z"
                                fill="#233447"
                              />
                              <path
                                d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z"
                                fill="#CC6228"
                              />
                              <path
                                d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z"
                                fill="#CC6228"
                              />
                              <path
                                d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z"
                                fill="#CC6228"
                              />
                              <path
                                d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z"
                                fill="#CC6228"
                              />
                              <path
                                d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z"
                                fill="#E27525"
                              />
                              <path
                                d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z"
                                fill="#E27525"
                              />
                              <path
                                d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z"
                                fill="#E27525"
                              />
                              <path
                                d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z"
                                fill="#E27525"
                              />
                              <path
                                d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z"
                                fill="#F5841F"
                              />
                              <path
                                d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z"
                                fill="#F5841F"
                              />
                              <path
                                d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z"
                                fill="#C0AC9D"
                              />
                              <path
                                d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z"
                                fill="#161616"
                              />
                              <path
                                d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z"
                                fill="#763E1A"
                              />
                              <path
                                d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z"
                                fill="#763E1A"
                              />
                              <path
                                d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z"
                                fill="#F5841F"
                              />
                              <path
                                d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z"
                                fill="#F5841F"
                              />
                              <path
                                d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z"
                                fill="#F5841F"
                              />
                            </svg>
                          </div>

                          <span className="flex ml-3 font-normal whitespace-nowrap justify-start">
                            MetaMask
                          </span>
                        </a>
                      </button>
                    </li>

                    <li>
                      <button
                        className="w-full bg-radial-button8 rounded-md"
                        onClick={(event) => {
                          console.log("value changed");
                          switchChain(Number(97), walletConnect);
                        }}
                      >
                        <a
                          href="#"
                          className="flex items-center p-3 text-base font-bold  rounded-lg  group hover:shadow  text-black"
                        >
                          <div className=" p-2 bg-shade9 rounded-md">
                            <svg
                              aria-hidden="true"
                              className="h-5"
                              viewBox="0 0 512 512"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <defs>
                                <radialGradient
                                  cx="0%"
                                  cy="50%"
                                  fx="0%"
                                  fy="50%"
                                  r="100%"
                                  id="radialGradient-1"
                                >
                                  <stop stop-color="#5D9DF6" offset="0%"></stop>
                                  <stop
                                    stop-color="#006FFF"
                                    offset="100%"
                                  ></stop>
                                </radialGradient>
                              </defs>
                              <g
                                id="Page-1"
                                stroke="none"
                                stroke-width="1"
                                fill="none"
                                fill-rule="evenodd"
                              >
                                <g id="logo">
                                  <rect
                                    id="base"
                                    fill="url(#radialGradient-1)"
                                    x="0"
                                    y="0"
                                    width="512"
                                    height="512"
                                    rx="256"
                                  ></rect>
                                  <path
                                    d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z"
                                    id="WalletConnect"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <span className="flex ml-3 font-normal whitespace-nowrap  justify-start">
                            WalletConnect
                          </span>
                        </a>
                      </button>
                    </li>
                  </ul>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center text-xs font-normal text-white"
                    >
                      By using our app you acknowledge out Terms and Conditions
                      and your Privacy and Cookie Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;