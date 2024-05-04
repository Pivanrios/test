import React from 'react'

function HomeBanner() {
  return (
    <div>
      <div id="banner" className='container flex flex-col px-10 pt-5 py-10 bg-yellow-400 justify-between' >
        <h1 className='container flex flex-col p-2'>
          <b className='text-4xl'>LaCooperativa</b>
          <span className='text-sm text-gray-500'>Comida casera at your service</span>
        </h1>
        <p className='px-2 pt-10 pb-10 self-end  '>Preparamos un menu semanal dentro de amazon para empleados que no tienen tiempo de cocinar... </p>
        <button className='btn w-auto bg-yellow-500 self-end'>Learn more</button>   
      </div>
    </div>
  )
}

export default HomeBanner