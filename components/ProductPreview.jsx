import React from 'react'

function ProductPreview({d}) {
  return (
        <div className='container bg-slate-500 flex flex-col gap-1 p-3'>
            <img alt={d.name} src={d.imagen} className=' w-28'></img>
            <h4 className='text-lg '>{d.name}</h4>
            <p className='text-sm'>{d.content}</p>
            <p className='self-end'>${d.price}.00</p>
        </div>
  )
}

export default ProductPreview