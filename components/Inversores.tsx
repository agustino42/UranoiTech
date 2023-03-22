"use client"
 import {motion} from "framer-motion"
 import styles from "../styles"
 import {slideIn, staggerContainer, textVariant, fadeIn, zoomIn, textContainer} from "../utils/motion"


const Inversores = () => (
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
className="mb-4 text-7xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
  Invierte en <span className="text-orange-500"> Proyectos en la Web 3.0 </span>  y Gana hasta un 15% API.
</motion.h1>

<hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

<motion.h2 variants={textVariant(1.3)} 
className="mb-8 text-6x1 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
>

INVERTIR VS GANAR DINERO:<span className="font-extrabold text-4x1 text-orange-700 text-5x1"> ¿QUÉ ES LO QUE DEBES HACER PARA GENERAR RIQUEZA?</span> 

</motion.h2>
<hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

<motion.h1 variants={textVariant(1.1)}
className="mb-4 text-7xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
 
 Considera el tiempo de la inversión

</motion.h1>
<motion.h2 variants={textVariant(1.3)} 
className="mb-8 text-6x1 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
>
Los inversores pasivos tienden a maximizar sus <span className="font-extrabold text-orange-700 text-3x1">rendimientos minimizando su desempeño en el mercado</span>,ofreciendo una experiencia única e innovadora a  <span className="font-extrabold text-cyan-700 inline">a nuestros clientes y ayudándoles a crecer y prosperar en un mundo cada vez más digital.</span> 

</motion.h2>

<motion.h1 variants={textVariant(1.1)}
className="mb-4 text-7xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
  SÚMATE Y JUNTOS APOYEMOS EL <span className="text-orange-500"> DESARROLLO DEL EMPRENDIMIENTO </span> Y LA INNOVACIÓN SOCIAL
</motion.h1>

<hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

<motion.h2 variants={textVariant(1.3)} 
className="mb-8 text-6x1 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
>

El objetivo del proyecto es apoyar el desarrollo y fortalecimiento de emprendimientos sociales liderados por personas <span className="font-extrabold text-4x1 text-orange-700 text-5x1"></span> 

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
src="./assets/gerencia2.gif"
 alt=""
 className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-12 h-auto max-w-full"
 />


</motion.div>


  </motion.div>
  </section>
);


export default Inversores;