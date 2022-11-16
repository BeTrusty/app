import React from 'react'

function PropertyData2 () {
  return (
    <section>
      <form className='w-full'>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='depto'>Depto</label>
          <input
            type='text'
            id='depto'
            name='depto'
            placeholder='11'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='flat'>Piso</label>
          <input
            type='number'
            id='flat'
            name='flat'
            placeholder='4'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='city'>Ciudad</label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='Mendoza, Argentina'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='destination'>Destino</label>
          <input
            type='text'
            id='destination'
            name='destination'
            placeholder='Vivienda o profesional (No apto turístico).'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='price'>Precio estimado</label>
          <input
            type='number'
            id='price'
            name='price'
            placeholder='45.000 ARS'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
      </form>
    </section>
  )
}

export { PropertyData2 }
