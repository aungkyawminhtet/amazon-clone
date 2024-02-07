"use client";
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';

interface cardType {
  id: number,
  title: String,
  price: number,
  description: String,
  category: String,
  image: any
}[]

const MAX_rating = 5;
const MIN_rating = 1;

const Card = (props : cardType) => {
  const [rating] = useState(Math.floor(Math.random() * (MAX_rating - MIN_rating + 1) + MIN_rating));
  const [isPrime] = useState(Math.random() < 0.5);
  return (
    <div className='flex flex-col relative bg-white p-7 w-[300px] z-30'>
      <h1 className='absolute right-10 text-slate-600'>{props.category}</h1>
      <img src={props.image} alt="" className='w-[200px] h-[200px] object-contain mx-auto my-6' />
      <h1>{props.title.slice(0,20)}...</h1>
      <h1 className=' line-clamp-2 my-3'>{props.description}</h1>
      <div className='flex mb-5'>
        {
          [...new Array(rating)].map((arr, i) => (
            <FaStar key={i} className='w-4 text-yellow-400' />
          ))
        }
      </div>
      <div className='mb-4'>
        {isPrime ? <div className='flex items-center'>
          <img src="./prime.png" className='h-6' alt="" />
          <h1 className='text-sm ms-3'>Free delivery</h1>
          </div> : <div className='mb-5'></div>}
      </div>
      <button className='btn'>Add to Basket</button>
    </div>
  )
}
export default Card
