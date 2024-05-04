import React from 'react'

function HomeBanner() {
  return (
    <div id="banner" className='container flex flex-col px-10 pt-5 py-10 bg-slate-400 justify-between'>
      <h1 className='container flex flex-col p-2'>
        <b className='text-4xl'>LaCooperativa</b>
        <span className='text-sm'>Comida casera at your service</span>
      </h1>
      <p className='px-2 pt-10 pb-10 self-end '>Somos una cooperativa que conecta empleados que no tienen tiempo <br/>
      para cocinar con companeros que si les da tiempo... </p>
      <button className='btn w-auto bg-yellow-500 self-end '>Learn more</button>
      
    </div>
  )
}

export default HomeBanner