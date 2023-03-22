"use client"
 import {motion} from "framer-motion"
 import styles from "../styles"
 import {slideIn, staggerContainer, textVariant, fadeIn, zoomIn, textContainer} from "../utils/motion"


const About = () => (
  <section className="">
  <motion.div
  variants={textContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25}}
  className={"${styles.innerWidth} mx-auto flex flex-col"}
  >
<div className="flex justify-center items-center flex-col relative z-10">
<motion.h1 variants={textVariant(1.1)}
className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
  Mision
</motion.h1>
<motion.h2 variants={textVariant(1.3)} 
className="mb-8 text-6x1 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
>
Proporcionar a las empresas herramientas y servicios de <span className="font-extrabold text-4x1 text-orange-700 text-3x1">marketing fáciles de usar y asequibles</span> , para ayudarles a alcanzar sus  <span className="font-extrabold text-cyan-700 inline">Objetivos de Negocio y Aumentar su Presencia en Línea.</span> 

</motion.h2>

<motion.h1 variants={textVariant(1.1)}
className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
 Visión

</motion.h1>
<motion.h2 variants={textVariant(1.3)} 
className="mb-8 text-6x1 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
>
Ser reconocidos como líderes en el mercado de<span className="font-extrabold text-orange-700 text-3x1">Servicios de Marketing para Empresas que quieran Impulsar sus Negocios a nivel de Mercados Internacionales</span>,ofreciendo una experiencia única e innovadora a  <span className="font-extrabold text-cyan-700 inline">a nuestros clientes y ayudándoles a crecer y prosperar en un mundo cada vez más digital.</span> 

</motion.h2>

<motion.div
variants={textVariant(1.2)}
className="flex flex-row justify-center items-center">

<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> </h1>
<div className={styles.heroDText}></div>
</motion.div>
</div>


 <motion.div
variants={zoomIn(1.6)}
className="relative w-full md:-mt-[20px] -mt-[12px]"
>
<div className="absolute w-full h-[300px] hero-gradient rounded-top-[140px] z-[0] -top-[30px]" />
<img
src="./assets/gerencia1.gif"
 alt=""
 className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full"
 />


</motion.div>


  </motion.div>
  </section>
);


export default About;