"use cliente"
import "flowbite"
import {slideIn, staggerContainer, textVariant, fadeIn, zoomIn, textContainer} from "../utils/motion"
import React from 'react'
import {motion} from "framer-motion"
import styles from "../styles"

function Form () {
  return (
    <div>
    
    
<form>
  <div className="relative z-0 w-full mb-6 group">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-extrabold absolute text-3x1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirrecion de Email</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label className="peer-focus:font-extrabold absolute text-3x1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label  className="peer-focus:font-extrabold absolute text-3x1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-extrabold absolute text-3x1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre y Apellido</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-extrabold absolute text-3x1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Estudios Realizados</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-6 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-extrabold absolute text-3x1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Telefonico (123-456-7890)</label>
    </div>
    <div className="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label  className="peer-focus:font-extrabold absolute text-3x1 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Github (Email)</label>
    </div>
  </div>
  <button type="submit" className="items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-extrabold rounded-lg text-4x1 w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
 
<div className="align-middle text-center">

<div className="flex items-center mb-3">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <p className="ml-2 text-5x1 font-extrabold text-gray-900 dark:text-white">4.1 / 5</p>
</div>
<p className="text-3x1 font-extrabold text-gray-500 dark:text-gray-400">1,745 Likes ratings</p>
<div className="flex items-center mt-4">
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">---- 5 star</span>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-400 rounded"></div>
    </div>
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">70%</span>
</div>
<div className="flex items-center mt-4">
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">----  4 star</span>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-400 rounded" ></div>
    </div>
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">17%</span>
</div>
<div className="flex items-center mt-4">
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">----  3 star</span>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-400 rounded" ></div>
    </div>
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">8%</span>
</div>
<div className="flex items-center mt-4">
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">----  2 star</span>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-400 rounded"></div>
    </div>
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">4%</span>
</div>
<div className="flex items-center mt-4">
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">---- 1 star</span>
    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
        <div className="h-5 bg-yellow-400 rounded" ></div>
    </div>
    <span className="text-4x1 font-extrabold text-blue-600 dark:text-blue-500">1%</span>
</div>   


</div>

<div>
 
<article>
    <div className="flex items-center mb-4 space-x-4">
        <img className="w-10 h-10 rounded-full" src="./assets/bannerImgTwo.png" alt="" />
        <div className="space-y-1 font-extrabold dark:text-white">
            <p>Jese Leos <time className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 className="ml-2 text-4x1 font-extrabold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 text-4x1 font-extrabold text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time >March 3, 2017</time></p></footer>
    <p className="mb-2 font-extrabold text-4x1 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p className="mb-3 font-extrabold text-4x1 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="#" className="block mb-5 text-4x1 font-extrabold text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p className="mt-1 text-3x1 font-extrabold text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-extrabold rounded-lg text-3x1 px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Unirte</a>
            <a href="#" className="pl-4 text-sm font-extrabold text-3x1 text-blue-600 hover:underline dark:text-blue-500">Report Ban</a>
        </div>
    </aside>
</article>
 

  </div> 

<div>

<article className="md:gap-8 md:grid md:grid-cols-3">
    <div>
        <div className="flex items-center mb-6 space-x-4">
            <img className="w-10 h-10 rounded-full" src="./assets/bannerImgFour.jpg" alt="" />
            <div className="space-y-1 font-extrabold  dark:text-white">
                <p>Jese Leos</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg aria-hidden="true" className="w-5 mr-1.5" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0531311" width="17" height="12.1429" rx="2" fill="white"/><mask id="mask0_3885_33060"  maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="13"><rect x="0.0531311" width="17" height="12.1429" rx="2" fill="white"/></mask><g mask="url(#mask0_3885_33060)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0531 0H0.0531311V0.809524H17.0531V0ZM17.0531 1.61905H0.0531311V2.42857H17.0531V1.61905ZM0.0531311 3.2381H17.0531V4.04762H0.0531311V3.2381ZM17.0531 4.85714H0.0531311V5.66667H17.0531V4.85714ZM0.0531311 6.47619H17.0531V7.28572H0.0531311V6.47619ZM17.0531 8.09524H0.0531311V8.90476H17.0531V8.09524ZM0.0531311 9.71429H17.0531V10.5238H0.0531311V9.71429ZM17.0531 11.3333H0.0531311V12.1429H17.0531V11.3333Z" fill="#D02F44"/><rect x="0.0531311" width="7.28571" height="5.66667" fill="#46467F"/><g filter="url(#filter0_d_3885_33060)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.67216 1.21427C1.67216 1.43782 1.49095 1.61903 1.2674 1.61903C1.04386 1.61903 0.86264 1.43782 0.86264 1.21427C0.86264 0.990727 1.04386 0.809509 1.2674 0.809509C1.49095 0.809509 1.67216 0.990727 1.67216 1.21427ZM3.29121 1.21427C3.29121 1.43782 3.10999 1.61903 2.88645 1.61903C2.66291 1.61903 2.48169 1.43782 2.48169 1.21427C2.48169 0.990727 2.66291 0.809509 2.88645 0.809509C3.10999 0.809509 3.29121 0.990727 3.29121 1.21427ZM4.5055 1.61903C4.72904 1.61903 4.91026 1.43782 4.91026 1.21427C4.91026 0.990727 4.72904 0.809509 4.5055 0.809509C4.28195 0.809509 4.10074 0.990727 4.10074 1.21427C4.10074 1.43782 4.28195 1.61903 4.5055 1.61903ZM6.52931 1.21427C6.52931 1.43782 6.34809 1.61903 6.12455 1.61903C5.901 1.61903 5.71978 1.43782 5.71978 1.21427C5.71978 0.990727 5.901 0.809509 6.12455 0.809509C6.34809 0.809509 6.52931 0.990727 6.52931 1.21427ZM2.07693 2.42856C2.30047 2.42856 2.48169 2.24734 2.48169 2.0238C2.48169 1.80025 2.30047 1.61903 2.07693 1.61903C1.85338 1.61903 1.67216 1.80025 1.67216 2.0238C1.67216 2.24734 1.85338 2.42856 2.07693 2.42856ZM4.10074 2.0238C4.10074 2.24734 3.91952 2.42856 3.69597 2.42856C3.47243 2.42856 3.29121 2.24734 3.29121 2.0238C3.29121 1.80025 3.47243 1.61903 3.69597 1.61903C3.91952 1.61903 4.10074 1.80025 4.10074 2.0238ZM5.31502 2.42856C5.53856 2.42856 5.71978 2.24734 5.71978 2.0238C5.71978 1.80025 5.53856 1.61903 5.31502 1.61903C5.09148 1.61903 4.91026 1.80025 4.91026 2.0238C4.91026 2.24734 5.09148 2.42856 5.31502 2.42856ZM6.52931 2.83332C6.52931 3.05686 6.34809 3.23808 6.12455 3.23808C5.901 3.23808 5.71978 3.05686 5.71978 2.83332C5.71978 2.60978 5.901 2.42856 6.12455 2.42856C6.34809 2.42856 6.52931 2.60978 6.52931 2.83332ZM4.5055 3.23808C4.72904 3.23808 4.91026 3.05686 4.91026 2.83332C4.91026 2.60978 4.72904 2.42856 4.5055 2.42856C4.28195 2.42856 4.10074 2.60978 4.10074 2.83332C4.10074 3.05686 4.28195 3.23808 4.5055 3.23808ZM3.29121 2.83332C3.29121 3.05686 3.10999 3.23808 2.88645 3.23808C2.66291 3.23808 2.48169 3.05686 2.48169 2.83332C2.48169 2.60978 2.66291 2.42856 2.88645 2.42856C3.10999 2.42856 3.29121 2.60978 3.29121 2.83332ZM1.2674 3.23808C1.49095 3.23808 1.67216 3.05686 1.67216 2.83332C1.67216 2.60978 1.49095 2.42856 1.2674 2.42856C1.04386 2.42856 0.86264 2.60978 0.86264 2.83332C0.86264 3.05686 1.04386 3.23808 1.2674 3.23808ZM2.48169 3.64284C2.48169 3.86639 2.30047 4.04761 2.07693 4.04761C1.85338 4.04761 1.67216 3.86639 1.67216 3.64284C1.67216 3.4193 1.85338 3.23808 2.07693 3.23808C2.30047 3.23808 2.48169 3.4193 2.48169 3.64284ZM3.69597 4.04761C3.91952 4.04761 4.10074 3.86639 4.10074 3.64284C4.10074 3.4193 3.91952 3.23808 3.69597 3.23808C3.47243 3.23808 3.29121 3.4193 3.29121 3.64284C3.29121 3.86639 3.47243 4.04761 3.69597 4.04761ZM5.71978 3.64284C5.71978 3.86639 5.53856 4.04761 5.31502 4.04761C5.09148 4.04761 4.91026 3.86639 4.91026 3.64284C4.91026 3.4193 5.09148 3.23808 5.31502 3.23808C5.53856 3.23808 5.71978 3.4193 5.71978 3.64284ZM6.12455 4.85713C6.34809 4.85713 6.52931 4.67591 6.52931 4.45237C6.52931 4.22882 6.34809 4.04761 6.12455 4.04761C5.901 4.04761 5.71978 4.22882 5.71978 4.45237C5.71978 4.67591 5.901 4.85713 6.12455 4.85713ZM4.91026 4.45237C4.91026 4.67591 4.72904 4.85713 4.5055 4.85713C4.28195 4.85713 4.10074 4.67591 4.10074 4.45237C4.10074 4.22882 4.28195 4.04761 4.5055 4.04761C4.72904 4.04761 4.91026 4.22882 4.91026 4.45237ZM2.88645 4.85713C3.10999 4.85713 3.29121 4.67591 3.29121 4.45237C3.29121 4.22882 3.10999 4.04761 2.88645 4.04761C2.66291 4.04761 2.48169 4.22882 2.48169 4.45237C2.48169 4.67591 2.66291 4.85713 2.88645 4.85713ZM1.67216 4.45237C1.67216 4.67591 1.49095 4.85713 1.2674 4.85713C1.04386 4.85713 0.86264 4.67591 0.86264 4.45237C0.86264 4.22882 1.04386 4.04761 1.2674 4.04761C1.49095 4.04761 1.67216 4.22882 1.67216 4.45237Z" fill="url(#paint0_linear_3885_33060)"/></g></g><defs><filter id="filter0_d_3885_33060" x="0.86264" y="0.809509" width="5.66666" height="5.04761" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3885_33060"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3885_33060" result="shape"/></filter><linearGradient id="paint0_linear_3885_33060" x1="0.86264" y1="0.809509" x2="0.86264" y2="4.85713" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient></defs></svg>
                    United States
                </div>
            </div>
        </div>
        <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center font-extrabold"><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>Apartament with City View</li>
            <li className="flex items-center font-extrabold "><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>3 nights December 2021</li>
            <li className="flex items-center extrabold"><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>Family</li>
        </ul>
    </div>
    <div className="col-span-2 mt-6 md:mt-0">
        <div className="flex items-start mb-5">
            <div className="pr-4">
                <footer>
                    <p className="mb-2 text-4x1 text-gray-500 dark:text-gray-400">Reviewed: <time >January 20, 2022</time></p>
                </footer>
                <h4 className="text-xl font-extrabold text-gray-900 dark:text-white">Spotless, good appliances, excellent layout, host was genuinely nice and helpful.</h4>
            </div>
            <p className="bg-blue-700 text-white text-sm font-extrabold text-4x1 inline-flex items-center p-1.5 rounded">8.7</p>
        </div>
        <p className="mb-2 font-extrabold text-4x1 text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
        <p className="mb-5 font-extrabold text-4x1 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <aside className="flex items-center mt-3 space-x-5">
            <a href="#" className="inline-flex items-center text-3x1 font-extrabold text-blue-600 hover:underline dark:text-blue-500">
                <svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                Helpful
            </a>
            <a href="#" className="inline-flex items-center text-3x1 font-extrabold text-blue-600 hover:underline dark:text-blue-500 group">
                <svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path></svg>
                Not helpful
            </a>
        </aside>
    </div>
</article>

</div>

<div>
 
<article>
    <div className="flex items-center mb-4 space-x-4">
        <img className="w-10 h-10 rounded-full" src="./assets/bannerImgTwo.png" alt="" />
        <div className="space-y-1 font-extrabold dark:text-white">
            <p>Jese Leos <time className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 className="ml-2 text-4x1 font-extrabold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 text-3x1 font-extrabold text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time >March 3, 2017</time></p></footer>
    <p className="mb-2 font-extrabold text-3x1 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p className="mb-3 font-extrabold text-3x1 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p className="mt-1 text-3x1 font-extrabold text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
        </div>
    </aside>
</article>
 

  </div> 

<div>
<div>

<article className="md:gap-8 md:grid md:grid-cols-3">
    <div>
        <div className="flex items-center mb-6 space-x-4">
            <img className="w-10 h-10 rounded-full" src="./assets/bannerImgFour.jpg" alt="" />
            <div className="space-y-1 font-extrabold  dark:text-white">
                <p>Jese Leos</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg aria-hidden="true" className="w-5 mr-1.5" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.0531311" width="17" height="12.1429" rx="2" fill="white"/><mask id="mask0_3885_33060"  maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="13"><rect x="0.0531311" width="17" height="12.1429" rx="2" fill="white"/></mask><g mask="url(#mask0_3885_33060)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0531 0H0.0531311V0.809524H17.0531V0ZM17.0531 1.61905H0.0531311V2.42857H17.0531V1.61905ZM0.0531311 3.2381H17.0531V4.04762H0.0531311V3.2381ZM17.0531 4.85714H0.0531311V5.66667H17.0531V4.85714ZM0.0531311 6.47619H17.0531V7.28572H0.0531311V6.47619ZM17.0531 8.09524H0.0531311V8.90476H17.0531V8.09524ZM0.0531311 9.71429H17.0531V10.5238H0.0531311V9.71429ZM17.0531 11.3333H0.0531311V12.1429H17.0531V11.3333Z" fill="#D02F44"/><rect x="0.0531311" width="7.28571" height="5.66667" fill="#46467F"/><g filter="url(#filter0_d_3885_33060)"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.67216 1.21427C1.67216 1.43782 1.49095 1.61903 1.2674 1.61903C1.04386 1.61903 0.86264 1.43782 0.86264 1.21427C0.86264 0.990727 1.04386 0.809509 1.2674 0.809509C1.49095 0.809509 1.67216 0.990727 1.67216 1.21427ZM3.29121 1.21427C3.29121 1.43782 3.10999 1.61903 2.88645 1.61903C2.66291 1.61903 2.48169 1.43782 2.48169 1.21427C2.48169 0.990727 2.66291 0.809509 2.88645 0.809509C3.10999 0.809509 3.29121 0.990727 3.29121 1.21427ZM4.5055 1.61903C4.72904 1.61903 4.91026 1.43782 4.91026 1.21427C4.91026 0.990727 4.72904 0.809509 4.5055 0.809509C4.28195 0.809509 4.10074 0.990727 4.10074 1.21427C4.10074 1.43782 4.28195 1.61903 4.5055 1.61903ZM6.52931 1.21427C6.52931 1.43782 6.34809 1.61903 6.12455 1.61903C5.901 1.61903 5.71978 1.43782 5.71978 1.21427C5.71978 0.990727 5.901 0.809509 6.12455 0.809509C6.34809 0.809509 6.52931 0.990727 6.52931 1.21427ZM2.07693 2.42856C2.30047 2.42856 2.48169 2.24734 2.48169 2.0238C2.48169 1.80025 2.30047 1.61903 2.07693 1.61903C1.85338 1.61903 1.67216 1.80025 1.67216 2.0238C1.67216 2.24734 1.85338 2.42856 2.07693 2.42856ZM4.10074 2.0238C4.10074 2.24734 3.91952 2.42856 3.69597 2.42856C3.47243 2.42856 3.29121 2.24734 3.29121 2.0238C3.29121 1.80025 3.47243 1.61903 3.69597 1.61903C3.91952 1.61903 4.10074 1.80025 4.10074 2.0238ZM5.31502 2.42856C5.53856 2.42856 5.71978 2.24734 5.71978 2.0238C5.71978 1.80025 5.53856 1.61903 5.31502 1.61903C5.09148 1.61903 4.91026 1.80025 4.91026 2.0238C4.91026 2.24734 5.09148 2.42856 5.31502 2.42856ZM6.52931 2.83332C6.52931 3.05686 6.34809 3.23808 6.12455 3.23808C5.901 3.23808 5.71978 3.05686 5.71978 2.83332C5.71978 2.60978 5.901 2.42856 6.12455 2.42856C6.34809 2.42856 6.52931 2.60978 6.52931 2.83332ZM4.5055 3.23808C4.72904 3.23808 4.91026 3.05686 4.91026 2.83332C4.91026 2.60978 4.72904 2.42856 4.5055 2.42856C4.28195 2.42856 4.10074 2.60978 4.10074 2.83332C4.10074 3.05686 4.28195 3.23808 4.5055 3.23808ZM3.29121 2.83332C3.29121 3.05686 3.10999 3.23808 2.88645 3.23808C2.66291 3.23808 2.48169 3.05686 2.48169 2.83332C2.48169 2.60978 2.66291 2.42856 2.88645 2.42856C3.10999 2.42856 3.29121 2.60978 3.29121 2.83332ZM1.2674 3.23808C1.49095 3.23808 1.67216 3.05686 1.67216 2.83332C1.67216 2.60978 1.49095 2.42856 1.2674 2.42856C1.04386 2.42856 0.86264 2.60978 0.86264 2.83332C0.86264 3.05686 1.04386 3.23808 1.2674 3.23808ZM2.48169 3.64284C2.48169 3.86639 2.30047 4.04761 2.07693 4.04761C1.85338 4.04761 1.67216 3.86639 1.67216 3.64284C1.67216 3.4193 1.85338 3.23808 2.07693 3.23808C2.30047 3.23808 2.48169 3.4193 2.48169 3.64284ZM3.69597 4.04761C3.91952 4.04761 4.10074 3.86639 4.10074 3.64284C4.10074 3.4193 3.91952 3.23808 3.69597 3.23808C3.47243 3.23808 3.29121 3.4193 3.29121 3.64284C3.29121 3.86639 3.47243 4.04761 3.69597 4.04761ZM5.71978 3.64284C5.71978 3.86639 5.53856 4.04761 5.31502 4.04761C5.09148 4.04761 4.91026 3.86639 4.91026 3.64284C4.91026 3.4193 5.09148 3.23808 5.31502 3.23808C5.53856 3.23808 5.71978 3.4193 5.71978 3.64284ZM6.12455 4.85713C6.34809 4.85713 6.52931 4.67591 6.52931 4.45237C6.52931 4.22882 6.34809 4.04761 6.12455 4.04761C5.901 4.04761 5.71978 4.22882 5.71978 4.45237C5.71978 4.67591 5.901 4.85713 6.12455 4.85713ZM4.91026 4.45237C4.91026 4.67591 4.72904 4.85713 4.5055 4.85713C4.28195 4.85713 4.10074 4.67591 4.10074 4.45237C4.10074 4.22882 4.28195 4.04761 4.5055 4.04761C4.72904 4.04761 4.91026 4.22882 4.91026 4.45237ZM2.88645 4.85713C3.10999 4.85713 3.29121 4.67591 3.29121 4.45237C3.29121 4.22882 3.10999 4.04761 2.88645 4.04761C2.66291 4.04761 2.48169 4.22882 2.48169 4.45237C2.48169 4.67591 2.66291 4.85713 2.88645 4.85713ZM1.67216 4.45237C1.67216 4.67591 1.49095 4.85713 1.2674 4.85713C1.04386 4.85713 0.86264 4.67591 0.86264 4.45237C0.86264 4.22882 1.04386 4.04761 1.2674 4.04761C1.49095 4.04761 1.67216 4.22882 1.67216 4.45237Z" fill="url(#paint0_linear_3885_33060)"/></g></g><defs><filter id="filter0_d_3885_33060" x="0.86264" y="0.809509" width="5.66666" height="5.04761" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="1"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3885_33060"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3885_33060" result="shape"/></filter><linearGradient id="paint0_linear_3885_33060" x1="0.86264" y1="0.809509" x2="0.86264" y2="4.85713" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="#F0F0F0"/></linearGradient></defs></svg>
                    United States
                </div>
            </div>
        </div>
        <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li className="flex items-center font-extrabold"><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"></path></svg>Apartament with City View</li>
            <li className="flex items-center font-extrabold "><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>3 nights December 2021</li>
            <li className="flex items-center extrabold"><svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>Family</li>
        </ul>
    </div>
    <div className="col-span-2 mt-6 md:mt-0">
        <div className="flex items-start mb-5">
            <div className="pr-4">
                <footer>
                    <p className="mb-2 text-3x1 font-extrabold text-gray-500 dark:text-gray-400">Reviewed: <time >January 20, 2022</time></p>
                </footer>
                <h4 className="text-xl font-extrabold text-gray-900 dark:text-white">Spotless, good appliances, excellent layout, host was genuinely nice and helpful.</h4>
            </div>
            <p className="bg-blue-700 text-white text-3x1 font-extrabold inline-flex items-center p-1.5 rounded">8.7</p>
        </div>
        <p className="mb-2 font-extrabold text-5x1 text-gray-500 dark:text-gray-400">The flat was spotless, very comfortable, and the host was amazing. I highly recommend this accommodation for anyone visiting Brasov city centre. It's quite a while since we are no longer using hotel facilities but self contained places. And the main reason is poor cleanliness and staff not being trained properly. This place exceeded our expectation and will return for sure.</p>
        <p className="mb-5 font-extrabold text-5x1 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
        <aside className="flex items-center mt-3 space-x-5">
            <a href="#" className="inline-flex items-center text-3x1 font-extrabold text-blue-600 hover:underline dark:text-blue-500">
                <svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                Helpful
            </a>
            <a href="#" className="inline-flex items-center text-3x1 font-extrabold text-blue-600 hover:underline dark:text-blue-500 group">
                <svg aria-hidden="true" className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path></svg>
                Not helpful
            </a>
        </aside>
    </div>
</article>

</div>



</div>
<div>


</div>
    </div>
  )
}

export default Form