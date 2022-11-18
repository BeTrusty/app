import React from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { NavBar } from '@components/NavBar'

function Wallet () {
  return (
    <div className='min-h-screen bg-dark '>
      <NavBar title='Wallet' />
      <main className='flex min-h-full flex-col items-center justify-start px-8 pb-8 bg-dark mx-auto text-center text-white'>
        <div className=''>
          <div className='w-full flex flex-col justify-center items-center gap-4 p-6'>
            <div className='block w-[200px] h-[50px] md:w-[250px] md:h-[75px]'>
              <Image
                src='/img/wallet.svg'
                alt='Datos del inmueble'
                width={200}
                height={50}
                objectFit='contain'
                layout='responsive'
              />
            </div>
            <h4 className='text-primary font-bold text-2xl lg:text-3xl'>
              Mi Wallet
            </h4>
            <ConnectButton />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Wallet
