"use client"
import {motion} from "framer-motion"
import { staggerContainer, fadeIn, planetVariants, textContainer } from "../utils/motion";
import styles from "../styles"
import "flowbite"

const Text = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="text-center">
    <div className="flex items-center mb-5">
    <p className="bg-blue-100 text-blue-800 text-center text-sm font-semibold inline-flex items-center lg:text-4x1 p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">8.7</p>
    <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">___UranoiTech Unete (UranoiTech.com)</p>
    <span className="w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500"></span>
    <p className="text-sm font-extrabold text-gray-500 dark:text-gray-400">376 Views (Equipo de Trabajo)</p>
    <a href="#" className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"></a>
</div>
<div className="gap-8 sm:grid sm:grid-cols-2">
    <div>
        <dl>
            <dt className="text-6x1 font-extrabold text-gray-500 dark:text-gray-400">Staff</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" ></div>
                </div>
                <span className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">8.8 %</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">Diseño Digital (App-Software)</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" ></div>
                </div>
                <span className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">3.9 %</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">Marketing</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8 %</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">Inversionistas</dt>
            <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                </div>
                <span className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">5.4 %</span>
            </dd>
        </dl>
    </div>
    <div>
        <dl>
            <dt className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">Finanzas</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"></div>
                </div>
                <span className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">8.9 %</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">Desarrollo</dt>
            <dd className="flex items-center mb-3">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" ></div>
                </div>
                <span className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">7.0 %</span>
            </dd>
        </dl>
        <dl>
            <dt className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">Ventas</dt>
            <dd className="flex items-center">
                <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" ></div>
                </div>
                <span className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">1.9 %</span>
            </dd>
        </dl>
    </div>
</div>


    </div>
    
    
    <motion.div
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    viewport={{  amount: 0.35}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >





    <motion.div
    variants={planetVariants("left")}
    className={`flex-1 ${styles.flexCenter}`}
    >
  <img
  src="./assets/bear2.gif"
  alt=""
  className="w-[90%] h-[90%] object-contain"
  />

    </motion.div>


    </motion.div>

  </section>
)

export default Text;