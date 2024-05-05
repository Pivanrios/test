import React from 'react'

function About() {
  return (
    <div className='bg-yellow-500'>
        <section className='p-2'>
            <div className='flex  flex-col items-center px-3 py-5 bg-yellow-400 rounded-lg'>
                <h3 className='text-2xl font-bold'>Why?</h3>
                <span className='flex gap-2'>
                    <img src='../images/lasagnaCompleta.jpeg' alt='comida' width={200}/>
                    <p>
                        No todos tenemos tiempo para preparar nuestro lonche,
                        y la comida congelada dentro de las empresas no siempre
                        es la opcion mas saludable, y los servicios de reparticion
                        no suele ser la opcion mas economica.
                        Abriendo un canal de comunicaion podemos ampliar nuestras
                        opciones y crear un menu variado que satisfaga los gustos de todos.
                    </p>
                </span>
            </div>
            
        </section>
        <section className='p-2'>
            <div className='flex  flex-col items-center px-3 py-5 bg-yellow-400 rounded-lg'>
                <h3 className='text-2xl font-bold'>How?</h3>
                <span className='flex gap-2'>
                    <p>
                        Entregamos tu comida casera preparada por companeros de trabajo, 
                        en el breakroom de preferencia. <br/>
                        Solo tienes que ordenar por medio de la encuesta en nuestro 
                        grupo de whatsapp o por mensaje al numero (646) 123-2222.<br/>
                        Mandas tu comprobante de transferencia por zelle o bbva.
                    </p>
                    <img src='../images/lasagnaCompleta.jpeg' alt='comida' width={200}/>
                </span>
            </div>
        </section>
        <section>
            
        </section>
    </div>
  )
}

export default About