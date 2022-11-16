import React from 'react'

function PropertyData3 () {
  return (
    <section>
      <form className='w-full'>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='annual_return'>
            Rentabilidad anual media histórica (USD)
          </label>
          <input
            type='number'
            id='annual_return'
            name='annual_return'
            placeholder='5%'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='annual_vacancy'>Vacancia anual medio</label>
          <input
            type='number'
            id='annual_vacancy'
            name='annual_vacancy'
            placeholder='2,5%'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='gravamen'>Carga o gravamen sobre la propiedad</label>
          <input
            type='number'
            id='gravamen'
            name='gravamen'
            placeholder='Ninguno'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <input
            type='file'
            id='attach_file'
            name='attach_file'
            placeholder='Adjuntar fotos'
            multiple
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none h-16 mt-4'
          />
        </div>
      </form>
    </section>
  )
}

export { PropertyData3 }
