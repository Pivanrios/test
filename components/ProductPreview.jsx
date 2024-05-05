import Link from 'next/link'
import React from 'react'

function ProductPreview({d}) {
  return (
      <Link href={`/platillos/${d.name.toLowerCase()}`}>
        <div id="item-prev" className='container bg-yellow-400 flex  lg:flex-col items-center flex-row gap-1 p-3'>
            <img alt={d.name} src={d.imagen} className=' w-28'></img>
            <ol className='container flex flex-col justify-between'>
              <h4 className='text-lg font-bold '>{d.name}</h4>
              <p className='text-sm'>{d.content}</p>
              <p className='self-end'>${d.price}.00</p>
            </ol>
        </div>
      </Link>
  )
}

export default ProductPreview