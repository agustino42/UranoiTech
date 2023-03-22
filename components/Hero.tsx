"use client"
 import {motion} from "framer-motion"
 import styles from "../styles"
 import {slideIn, staggerContainer, textVariant, textContainer} from "../utils/motion"


const Hero = () => (
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
className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
  Colaboracion entre Empresas y las Comunidad  
</motion.h1>
<motion.div
variants={textVariant(1.2)}
className="flex flex-row justify-center items-center">

<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> </h1>
<div className={styles.heroDText}></div>
</motion.div>
</div>

<motion.div
variants={textVariant(1.2)}
className="overflow-hidden w-full md:-mt-[20px] -mt-[12px]"
>
<div className="absolute w-full h-[100px] hero-gradient  z-[0] -top-[30px]" />
<img
src="./assets/urano1.png"
 alt="urano"
 className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
 />

 <a href="">
<div className="w-full flex justify-end sm:mt-[170px] -mt-[50px] pr-[40px] relative z-10">
<img  
src=""
alt=""
className=""
/>
</div>
 </a>
</motion.div>


</motion.div> 
  </section>
);


export default Hero;