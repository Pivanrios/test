import React from 'react'

function Footer() {
  return (
    <section className='container bg-yellow-500 px-3 py-2'>
        <div className='flex flex-col items-center py-3 gap-5'>
            <h3 className='text-2xl font-bold'>Contact us</h3>
            <div className=' flex flex-row gap-3 '>
                <div id='instagram'></div>
                <div id='whatsapp'></div>
                <div id='linkedin'></div>
            </div>
            <span className='font-gray'>copy right pivanrios</span>
        </div>
    </section>
  )
}

export default Footer