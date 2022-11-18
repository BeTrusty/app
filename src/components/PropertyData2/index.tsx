import React, { useContext, useState, useEffect } from 'react'
import { Context } from '@src/context'
import { Button } from '@components/Button'
import { ButtonDisabled } from '@components/ButtonDisabled'

function PropertyData2 () {
  const {
    continueClickMintearNFT,
    valueDepto,
    setValueDepto,
    valueFlat,
    setValueFlat,
    valueCity,
    setValueCity,
    valueDestination,
    setValueDestination,
    valuePrice,
    setValuePrice
  } = useContext(Context)
  const [activeButtonContinue, setActiveButtonContinue] = useState<boolean>(
    false
  )
  useEffect(() => {
    if (
      valueDepto !== '' &&
      valueFlat !== '' &&
      valueCity !== '' &&
      valueDestination !== '' &&
      valuePrice !== ''
    ) {
      setActiveButtonContinue(true)
    } else {
      setActiveButtonContinue(false)
    }
  })
  return (
    <form className='w-full'>
      <section className='w-full grid place-items-center items-end lg:grid-cols-2 lg:gap-x-7 lg:gap-y-3 mb-9'>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='depto'>Depto</label>
          <input
            type='text'
            id='depto'
            name='depto'
            placeholder='11'
            required
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueDepto(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueFlat(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueCity(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueDestination(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValuePrice(e.target.value)}
          />
        </div>
      </section>
      {activeButtonContinue ? (
        <Button content='Continuar' onClick={continueClickMintearNFT} />
      ) : (
        <ButtonDisabled content='Continuar' active={activeButtonContinue} />
      )}
    </form>
  )
}

export { PropertyData2 }
