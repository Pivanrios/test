import React from 'react'

function HomeBanner() {
  return (
    <div id="banner" className='container flex flex-col px-10 py-5 bg-slate-400 justify-between'>
      <h1 className='container flex flex-col'>
        <b className='text-4xl'>LaCooperativa</b>
        <span className='text-sm'>Comida casera a tu empresa</span>
      </h1>
      <p className=' '>Somos una cooperativa que conecta empleados que no tienen tiempo <br/>
      para cocinar con companeros que si les da tiempo... </p>
      <button className='btn w-auto bg-yellow-500 self-end'>Learn more</button>
      
    </div>
  )
}

export default HomeBanner