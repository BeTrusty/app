import React, { useState, useEffect, useContext } from 'react'
import Image from 'next/image'
import { Context } from '@src/context'
import { Button } from '@components/Button'
import { ButtonDisabled } from '@components/ButtonDisabled'

function PropertyData3 () {
  const {
    continueClickMintearNFT,
    valueAnnualReturn,
    setValueAnnualReturn,
    valueAnnualVacancy,
    setValueAnnualVacancy,
    valueGravamen,
    setValueGravamen,
    valueAttachPhotos,
    setValueAttachPhotos
  } = useContext(Context)
  const [activeButtonContinue, setActiveButtonContinue] = useState<boolean>(
    false
  )
  useEffect(() => {
    if (
      valueAnnualReturn !== '' &&
      valueAnnualVacancy !== '' &&
      valueGravamen !== '' &&
      valueAttachPhotos !== ''
    ) {
      setActiveButtonContinue(true)
    } else {
      setActiveButtonContinue(false)
    }
  })
  const [countFiles, setCountFiles] = useState<number>(0)
  return (
    <form className='w-full'>
      <section className='w-full grid place-items-center items-end lg:grid-cols-2 lg:gap-x-7 lg:gap-y-3 mb-9'>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='annual_return' className='text-sm'>
            Rentabilidad anual media histórica (USD)
          </label>
          <input
            type='number'
            id='annual_return'
            name='annual_return'
            placeholder='5%'
            required
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueAnnualReturn(e.target.value)}
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
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueAnnualVacancy(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-white'>
          <label htmlFor='gravamen' className='text-sm'>
            Carga o gravamen sobre la propiedad
          </label>
          <input
            type='text'
            id='gravamen'
            name='gravamen'
            placeholder='Ninguno'
            required
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 outline-none'
            onChange={e => setValueGravamen(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-light-grey'>
          <label
            htmlFor='attach_photos'
            className='bg-dark border-2 border-light-grey rounded-md w-full px-2 py-1 mt-4 outline-none flex flex-row justify-center items-center gap-2 h-14 relative'
          >
            <Image
              src='/img/photo.svg'
              alt='Icono de una fotografía'
              width={20}
              height={20}
              objectFit='contain'
            />
            {countFiles <= 0 ? 'Adjuntar fotos' : `${countFiles} archivos`}
            <input
              type='file'
              id='attach_photos'
              name='attach_photos'
              placeholder='Adjuntar fotos'
              multiple
              required
              onChange={e => {
                setValueAttachPhotos(e.target.value)
                setCountFiles(Number(e.target.files?.length))
              }}
              accept='.jpg,.png,.jpeg'
            />
          </label>
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

export { PropertyData3 }
