import React, { useEffect } from 'react'

import {AiOutlineShoppingCart} from 'react-icons/ai'

const Ecommerce = ({Shop,add,cartItem}) => {
  
  return (
    <section className='flex flex-wrap p-4 mt-10 gap-10'>
        {Shop.map((i) => (
            <div className='shadow-lg rounded-md p-2' key={i.id}>
                <img src={i.image} className='rounded-md w-[200px] h-92' />
                <div className='flex mt-5 justify-between items-center'>
                    <p className='text-lg font-bold'>{i.name}</p>
                    <p className='text-xs font-semibold'>${i.price}</p>
                </div>
                <p className='mt-1 font-bold text-sm'>{i.quantity} pieces left</p>
                {cartItem.some(j => j.id == i.id) ? (
                    <button className='p-2 pointer-events-none mt-2  flex gap-2 justify-center items-center rounded-md font-bold border shadow-xl w-full'><AiOutlineShoppingCart /></button>
                ) : (
                    <button onClick={() => add(i)} className='p-2 mt-2 hover:bg-green-700 hover:text-white flex gap-2 justify-center items-center rounded-md font-bold border shadow-xl w-full'><AiOutlineShoppingCart />Add to cart</button>
                )}
                
            </div>
        ))}
    </section>
  )
}

export default Ecommerce