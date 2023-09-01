import React, { useEffect, useState } from 'react'
import {MdOutlineCancel} from 'react-icons/md'

const Cart = ({cartItem, removeFromCart}) => {

    


  return (
    <section className='flex flex-wrap p-4 mt-10 gap-10'>
        {cartItem.map((i) => (
            <div className='shadow-lg rounded-md p-2 relative' key={i.id}>
                <button onClick={() => removeFromCart(i.id)} className='absolute hover:bg-red-700 hover:text-white right-4 top-4 cursor-pointer shadow-2xl p-3 rounded-full bg-white'><MdOutlineCancel /></button>
                <img src={i.image} className='rounded-md w-[200px] h-92' />
                <div className='flex mt-5 justify-between items-center'>
                    <p className='text-lg font-bold'>{i.name}</p>
                    <p className='text-xs font-semibold'>${i.price}</p>
                </div>
                <p className='mt-1 font-bold text-sm'>{i.quantity} pieces left</p>
            </div>
        ))}
    </section>
  )
}

export default Cart