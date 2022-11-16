import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { NavBar } from '@components/NavBar'

function Wallet () {
  return (
    <div className='bg-dark '>
      <NavBar title='Wallet' />
      <main className='flex min-h-screen flex-col items-center justify-start px-8 pb-8 bg-dark mx-auto text-center text-white'>
        <div className=''>
          <div className='w-full flex flex-col justify-center items-center gap-4 p-6'>
            <Image
              src='/img/wallet.png'
              alt='Datos del inmueble'
              width={100}
              height={25}
              objectFit='contain'
            />
            <h4 className='text-primary font-bold text-2xl'>Mi Wallet</h4>
            <ConnectButton />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Wallet
