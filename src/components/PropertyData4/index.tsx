import React, { useState, useContext, useEffect } from 'react'
import Image from 'next/image'
import { Context } from '@src/context'
import { Button } from '@components/Button'
import { ButtonDisabled } from '@components/ButtonDisabled'

function PropertyData4 () {
  const {
    continueClickMintearNFT,
    valueAttachPlans,
    setValueAttachPlans,
    valueAttachManual,
    setValueAttachManual,
    valueAttachDeeds,
    setValueAttachDeeds,
    valueAttachReports,
    setValueAttachReports,
    valueAttachImprovements,
    setValueAttachImprovements
  } = useContext<any>(Context)
  const [activeButtonContinue, setActiveButtonContinue] = useState<boolean>(
    false
  )
  useEffect(() => {
    if (
      valueAttachPlans !== '' &&
      valueAttachManual !== '' &&
      valueAttachDeeds !== '' &&
      valueAttachReports !== '' &&
      valueAttachImprovements !== ''
    ) {
      setActiveButtonContinue(true)
    } else {
      setActiveButtonContinue(false)
    }
  })
  const [countFilesPlans, setCountFilesPlans] = useState<number>(0)
  const [countFilesManual, setCountFilesManual] = useState<number>(0)
  const [countFilesDeeds, setCountFilesDeeds] = useState<number>(0)
  const [countFilesReports, setCountFilesReports] = useState<number>(0)
  const [countFilesImprovements, setCountFilesImprovements] = useState<number>(
    0
  )
  return (
    <form className='w-full'>
      <section className='w-full grid place-items-center items-end lg:grid-cols-3 lg:gap-2'>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-light-grey'>
          <label
            htmlFor='attach_plans'
            className='bg-dark border-2 border-light-grey rounded-md w-full p-4 mt-4 outline-none flex flex-col justify-center items-center gap-2 lg:min-h-[140px] relative'
          >
            <Image
              src='/img/plans.svg'
              alt='Icono de una fotografía'
              width={50}
              height={50}
              objectFit='contain'
            />
            {countFilesPlans <= 0
              ? 'Adjuntar planos en .pdf'
              : `${countFilesPlans} archivos`}
            <input
              type='file'
              id='attach_plans'
              name='attach_plans'
              placeholder='Adjuntar planos en .pdf'
              multiple
              required
              onChange={e => {
                setValueAttachPlans(e.target.value)
                setCountFilesPlans(Number(e.target.files?.length))
              }}
              accept='.pdf'
            />
          </label>
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-light-grey'>
          <label
            htmlFor='attach_manual'
            className='bg-dark border-2 border-light-grey rounded-md w-full p-4 mt-4 outline-none flex flex-col justify-center items-center gap-2 lg:min-h-[140px] relative'
          >
            <Image
              src='/img/manual.svg'
              alt='Icono de un manual'
              width={50}
              height={50}
              objectFit='contain'
            />
            {countFilesManual <= 0
              ? 'Adjuntar manual en .pdf'
              : `${countFilesManual} archivos`}
            <input
              type='file'
              id='attach_manual'
              name='attach_manual'
              placeholder='Adjuntar manual en .pdf'
              multiple
              required
              onChange={e => {
                setValueAttachManual(e.target.value)
                setCountFilesManual(Number(e.target.files?.length))
              }}
              accept='.pdf'
            />
          </label>
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-light-grey'>
          <label
            htmlFor='attach_deeds'
            className='bg-dark border-2 border-light-grey rounded-md w-full p-4 mt-4 outline-none flex flex-col justify-center items-center gap-2 lg:min-h-[140px] relative'
          >
            <Image
              src='/img/deeds.svg'
              alt='Icono de las escrituras de una casa'
              width={50}
              height={50}
              objectFit='contain'
            />
            {countFilesDeeds <= 0
              ? 'Adjuntar escritura en .pdf'
              : `${countFilesDeeds} archivos`}
            <input
              type='file'
              id='attach_deeds'
              name='attach_deeds'
              placeholder='Adjuntar escritura en .pdf'
              multiple
              required
              onChange={e => {
                setValueAttachDeeds(e.target.value)
                setCountFilesDeeds(Number(e.target.files?.length))
              }}
              accept='.pdf'
            />
          </label>
        </div>
      </section>
      <section className='w-full grid place-items-center items-end lg:grid-cols-2 lg:gap-2 mb-9'>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-light-grey'>
          <label
            htmlFor='attach_file'
            className='bg-dark border-2 border-light-grey rounded-md w-full p-4 mt-4 outline-none flex flex-col justify-center items-center gap-2 lg:h-32 relative'
          >
            <Image
              src='/img/reporte-de-inspeccion.svg'
              alt='Icono de reporte de inspección'
              width={50}
              height={50}
              objectFit='contain'
            />
            {countFilesReports <= 0
              ? 'Adjuntar reporte de inspección en .pdf'
              : `${countFilesReports} archivos`}
            <input
              type='file'
              id='attach_file'
              name='attach_file'
              placeholder='Adjuntar reporte de inspección en .pdf'
              multiple
              required
              onChange={e => {
                setValueAttachReports(e.target.value)
                setCountFilesReports(Number(e.target.files?.length))
              }}
              accept='.pdf'
            />
          </label>
        </div>
        <div className='flex flex-col justify-center items-start gap-2 mb-2 text-light-grey'>
          <label
            htmlFor='attach_improvements'
            className='bg-dark border-2 border-light-grey rounded-md w-full p-4 mt-4 outline-none flex flex-col justify-center items-center gap-2 lg:h-32 relative'
          >
            <Image
              src='/img/improvements.svg'
              alt='Icono de mejoras'
              width={50}
              height={50}
              objectFit='contain'
            />
            {countFilesImprovements <= 0
              ? 'Adjuntar de mejoras en .pdf'
              : `${countFilesImprovements} archivos`}
            <input
              type='file'
              id='attach_improvements'
              name='attach_improvements'
              placeholder='Adjuntar de mejoras en .pdf'
              multiple
              required
              onChange={e => {
                setValueAttachImprovements(e.target.value)
                setCountFilesImprovements(Number(e.target.files?.length))
              }}
              accept='.pdf'
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

export { PropertyData4 }
