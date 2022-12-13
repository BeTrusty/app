/* eslint-disable multiline-ternary */
import React, { useState, useContext, useEffect } from 'react'
import { Context } from '@src/context'
import { Button } from '@components/Button'
import { ButtonDisabled } from '@components/ButtonDisabled'
import ReCaptcha from 'react-google-recaptcha'

function PropertyData1 () {
  const {
    continueClickMintearNFT,
    valuePropertyType,
    setValuePropertyType,
    valueNumberOfEnviroments,
    setValueNumberOfEnviroments,
    valueOwnSurface,
    setValueOwnSurface,
    valueCommonSuface,
    setValueCommonSuface,
    valueOwner,
    setValueOwner,
    valueLocation,
    setValueLocation
  } = useContext(Context)
  const [activeButtonContinue, setActiveButtonContinue] =
    useState<boolean>(false)
  useEffect(() => {
    if (
      valuePropertyType !== '' &&
      valueNumberOfEnviroments !== '' &&
      valueOwnSurface !== '' &&
      valueCommonSuface !== '' &&
      valueOwner !== '' &&
      valueLocation !== ''
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
          <label htmlFor='property_type'>Tipo de inmueble</label>
          <input
            type='text'
            id='property_type'
            name='property_type'
            placeholder='Departamento'
            required
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValuePropertyType(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueNumberOfEnviroments(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueOwnSurface(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueCommonSuface(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueOwner(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueLocation(e.target.value)}
          />
        </div>
      </section>
      {activeButtonContinue ? (
        <Button content='Continuar' onClick={continueClickMintearNFT} />
      ) : (
        <ButtonDisabled content='Continuar' active={activeButtonContinue} />
      )}
      <ReCaptcha
        sitekey='6LeUWnYjAAAAAE5Gyhz2lE-mf9xhZCEqsJoMvkzbP'
        onChange={value => console.log('Recaptcha value:', value)}
      />
    </form>
  )
}

export { PropertyData1 }
