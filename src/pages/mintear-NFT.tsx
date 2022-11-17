import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import SwipeableViews from 'react-swipeable-views'
import { Context } from '../context'
import { NavBar } from '@components/NavBar'
import { PropertyData1 } from '@components/PropertyData1'
import { PropertyData2 } from '@components/PropertyData2'
import { PropertyData3 } from '@components/PropertyData3'
import { PropertyData4 } from '@components/PropertyData4'

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
  return (
    <div className='min-h-screen bg-dark'>
      <NavBar title='Mintear NFT' />
      <main className='flex min-h-full flex-col items-center justify-center px-8 pb-8 bg-dark mx-auto text-center text-white'>
        <div className='max-w-[290px] md:max-w-[450px] lg:max-w-[700px]'>
          <div className='w-full flex flex-col justify-center items-center p-6'>
            <div className='block w-[200px] h-[50px] md:w-[250px] md:h-[75px] lg:w-[350px] lg:h-[100px]'>
              <Image
                src='/img/identidad.png'
                alt='Datos del inmueble'
                width={200}
                height={50}
                objectFit='contain'
                layout='responsive'
              />
            </div>
            <h4 className='text-primary font-bold text-lg md:text-2xl'>
              {`Datos del inmueble (${indexPropertyData}/4)`}
            </h4>
          </div>
          <SwipeableViews
            index={indexMintearNFT}
            className='min-h-[350px] mb-6 md:min-h-full'
          >
            <PropertyData1 />
            <PropertyData2 />
            <PropertyData3 />
            <PropertyData4 />
            <h1>Hola</h1>
            <h1>Como</h1>
            <h1>Estas</h1>
          </SwipeableViews>
        </div>
      </main>
    </div>
  )
}

export default MintearNFT
