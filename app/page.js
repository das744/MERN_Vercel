import Image from "next/image";
import styles from "./page.module.css";
import '@/styles/globals.css';
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero';
import Exciting from "@/components/Exciting/Exciting";
import Service from "@/components/Service/Service";
import About from "@/components/About/About";
import Feature from "@/components/Feature/Feature"
import Testimonial from '@/components/Testimonial/Testimonial'
import AboutUs from '@/components/AboutUs/aboutUs'
import Contact from '@/components/Contact/Contact'
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Exciting/>
      <Service/>
      <About/>
    <Feature/>
    <AboutUs/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}
