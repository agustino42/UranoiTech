"use client"
import "../styles/globals.css";

import Providers from "./Providers";
import Header from "../components/Header";
import Contenido from "../components/Contenido";
import Logo from "../components/Logo";
import Hero from "../components/Hero";
import About from "../components/About";

import Banner from "../components/Banner";

import Cards from "../components/Cards";
import Text from "../components/Text";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Inversores from "../components/Inversores";






export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>  

   
    <Providers>
       <body className="bg-gray-100 dark:bg-zinc-900 transition-all duration-700 ">
       <Header />
       
       <Logo />
       <Contenido />

      
      <Hero />
      
     <About />
     
     <Cards />
     <Text />
     <Form />
     <Banner />
     <Inversores />
     <Footer />
      <div className="max-w-6xl mx-auto">{children}</div>
      </body>
    
   
    </Providers>
    </html>
  );
}
