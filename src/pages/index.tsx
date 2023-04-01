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
import { ChainId } from "@thirdweb-dev/sdk";
import { walletConnect } from "../connectors/walletConnect";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function Home() {
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
    // void metaMask.connectEagerly().catch(() => {
    //   console.debug("Failed to connect eagerly to metamask");
    // });
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
              <Hero
                metaMask={metaMask}
                walletConnect={walletConnect}
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
                accounts={accounts}
                provider={provider}
                ENSNames={ENSNames}
                activeChainId={chainId}
                isActivating={isActivating}
                isActive={isActive}
                error={error}
                setError={setError}
              />
            </div>
            <Program />
            <Services />

            <Statistics />
            <Membership />
            <Community />
            <About />
            <Security />
            <TimeLine />
            <Footer />
          </div>
        </>
      </Layout>
    </>
  );
}
