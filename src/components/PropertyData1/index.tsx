import React from 'react'

function PropertyData1 () {
  return (
    <section>
      <form className='w-full'>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='property_type'>Tipo de inmueble</label>
          <input
            type='text'
            id='property_type'
            name='property_type'
            placeholder='Departamento'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='number_of_enviroments'>Cantidad de ambientes</label>
          <input
            type='number'
            id='number_of_enviroments'
            name='number_of_enviroments'
            placeholder='2'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='own_surface'>Superficie cubierta (propia)</label>
          <input
            type='number'
            id='own_surface'
            name='own_surface'
            placeholder='36,80 m2'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='common_suface'>Superficie cubierta (común)</label>
          <input
            type='number'
            id='common_suface'
            name='common_suface'
            placeholder='16,19 m2'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='owner'>Propietario</label>
          <input
            type='text'
            id='owner'
            name='owner'
            placeholder='Rosalia Iztueta'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='location'>Ubicación</label>
          <input
            type='text'
            id='location'
            name='location'
            placeholder='Chile 921'
            required
            className='bg-dark border-2 border-white rounded-md w-full px-2 py-1 outline-none'
          />
        </div>
      </form>
    </section>
  )
}

export { PropertyData1 }
