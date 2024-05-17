
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

    <span className='flex text-sky-300 justify-center text-2xl py-9'> WINTER SEASON</span>
    <div className='flex justify-center py-10 '>
    <img className='rounded-lg' src='https://i.pinimg.com/564x/96/4e/ae/964eaed430c0ef4222be33670076df02.jpg'></img>
    </div>

    <div className='mt-8 flex px-6'>
      <div className='flex items-center space-x-4'>
        <div className='flex flex-col'>
          <span>wimter 00 TIME</span>
          <span className='flex text-green-400'>Nature</span>
        </div>

        <div className='flex flex-col'>
          <span>summer 00 TIME</span>
          <span className='flex text-green-400 '>Nature</span>
        </div>

        <div className='flex flex-col'>
          <span>raining 00 TIME</span>
          <span className='flex text-green-400 '>Nature</span>
        </div>
         
      </div>
    </div>
   

    <span className='flex text-green-400 justify-center'> don't have account?</span>

    
    
   </div>
  );
}
