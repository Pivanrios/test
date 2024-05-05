
import React from 'react'

function Platillo() {
  return (
    <div className='flex flex-row justify-between px-3 md:px-10 bg-yellow-500 '>
      <button>D</button>
      <div className='flex flex-col bg-yellow-400 p-10'>
        <h3 className='text-2xl md:text-4xl font-bold'>Nombre Del Producto</h3>
        <p>product details</p>

        <p>reviews</p>
        <button className='btn'>add review</button>
      </div>
      <button>L</button>
    </div>
  )
}

export default Platillo