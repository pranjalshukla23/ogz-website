import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Exchange from "@/components/Exchange";
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

export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col justify-center items-center'>
        <Hero />
        <Exchange />
        <PartnerSlider />
        <Services />
        <Statistics />
        <Community />
        <About />
        <Security />
        <TimeLine />
        <Membership />
        <Footer />
      </div>
    </Layout>
  );
}
