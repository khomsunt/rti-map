
import { table } from 'console';
import React , { useState } from 'react'



export default function seem() {
  return (
    <div>
    <div className='flex justify-center py-20'>
         <img className='rounded-lg' src='https://i.pinimg.com/564x/1e/5b/47/1e5b47adab1abec77d3e52a8697ea867.jpg' ></img>
         </div>

   <div className='flex justify-center text-emerald-500 text-5xl'>S EE M </div>
   <div className='flex justify-center text-emerald-300 text-1xl '>orginalzation</div>


  <div className='flex justify-center mt-20'>  
  <div className=' space-y-6'>
        <input 
        className='border border-green-300 rounded-full px-10 py-2 '
        placeholder='username'/>
        <br></br>
        <input 
        className='border border-green-300 rounded-full px-10 py-2 '
        placeholder='cute pie'/>
</div>
    </div>
  
    <span className='flex text-green-600 justify-center text-2xl py-10 px-2'>WELCOME TO SEE M SEASON</span>

    <div className='mt-8 flex px-6 justify-center space-x-5'>
      <div className='flex items-center space-x-4'>
        <div className='flex flex-col'>
          <span>wimter 00 TIME</span>
          <span className='flex text-cyan-300'>Nature</span>
        </div>

        <div className='flex flex-col'>
          <span>summer 00 TIME</span>
          <span className='flex text-amber-300 '>Nature</span>
        </div>

        <div className='flex flex-col'>
          <span>raining 00 TIME</span>
          <span className='flex text-violet-300 '>Nature</span>
        </div>
         
      </div>
    </div>
   

    <span className='flex text-sky-300 justify-center text-2xl py-9'> WINTER SEASON</span>
    <div className='flex justify-center py-10 '>
    <img className='rounded-lg' src='https://i.pinimg.com/564x/96/4e/ae/964eaed430c0ef4222be33670076df02.jpg'></img>
    </div>

    

    <span className='flex text-green-400 justify-center py-10'> don't have account?</span>

    <div className='flex justify-center mt-5 '>
      
      
        <button  className='btn bg-cyan-300 w-20 rounded-3xl py-3 text-stone-950  focus:outline-none focus:ring-sky-100 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4'>add</button>
        <button className='btn bg-violet-300 w-40  rounded-3xl py-3 text-stone-950  focus:outline-none focus:ring-violet-200 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4'>edit my season</button>
        <button className='btn bg-rose-200  w-20  rounded-3xl py-3 text-stone-950   focus:outline-none focus:ring-rose-100 me-2 mb-2 mt-5 shadow-lg hover:bg-gradient-to-bl focus:ring-4'>delete</button>
    </div>
    <div className='text-center'>
    <button type="submit" className="w-28 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-200 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 mt-5 shadow-lg">บันทึก</button>
    </div>




   </div>
  );
}
