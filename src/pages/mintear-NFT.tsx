import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import SwipeableViews from 'react-swipeable-views'
import { Context } from '../context'
import { NavBar } from '@components/NavBar'
import { Button } from '@components/Button'
import { PropertyData1 } from '@components/PropertyData1'
import { PropertyData2 } from '@components/PropertyData2'
import { PropertyData3 } from '@components/PropertyData3'

function MintearNFT () {
  const {
    indexMintearNFT,
    setIndexMintearNFT,
    indexPropertyData,
    setIndexPropertyData
  } = useContext<any>(Context)
  useEffect(() => {
    setIndexMintearNFT(0)
    setIndexPropertyData(1)
  }, [])
  const continueClick = () => {
    setIndexPropertyData(indexPropertyData + 1)
    setIndexMintearNFT(indexMintearNFT + 1)
  }
  return (
    <div className='bg-dark'>
      <NavBar title='Mintear NFT' />
      <main className='flex min-h-screen flex-col items-center justify-center px-8 pb-8 bg-dark mx-auto text-center text-white'>
        <div className='max-w-[290px]'>
          <div className='w-full flex flex-col justify-center items-center p-6'>
            <Image
              src='/img/identidad.png'
              alt='Datos del inmueble'
              width={200}
              height={50}
              objectFit='contain'
            />
            <h4 className='text-primary font-bold text-lg'>
              {`Datos del inmueble (${indexPropertyData}/4)`}
            </h4>
          </div>
          <SwipeableViews
            index={indexMintearNFT}
            className='mb-6 min-h-[350px]'
          >
            <PropertyData1 />
            <PropertyData2 />
            <PropertyData3 />
            <h1>Hola</h1>
            <h1>Como</h1>
            <h1>Estas</h1>
          </SwipeableViews>
          <Button content='Continuar' onClick={continueClick} />
        </div>
      </main>
    </div>
  )
}

export default MintearNFT
