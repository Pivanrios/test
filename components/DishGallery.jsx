import React from 'react'
import ProductPreview from './ProductPreview'
import Link from 'next/link' //Link to send to other page

function DishGallery({dishes}) {
  const seleccion = dishes.slice(0,3) //here were gonna slice depending on the width of the screen, add breakpoints

  return (
    <div className='container flex flex-col items-center bg-yellow-500 py-3 px-2 gap-1'>{//this is the section were we display our dishes 
      }<h3 className='text-2xl font-bold'>Dishes</h3>
      <div className='container flex lg:flex-row md:flex-row flex-col gap-2 justify-between'>
      {seleccion.map((d)=>{//we map to our dishes and render product component sending the information via prop
        return(
          <Link href={`platillos/${d.name.toLowerCase()}`}>
            <ProductPreview d={d}/>{//we wrap our component to a specific page for our dish, *d=dish
          }</Link>
        )
      })}
      </div>
      <Link href={"/platillos"} className='self-end'>mas-----</Link>
    </div>
  )
}

export default DishGallery