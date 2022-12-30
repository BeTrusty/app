import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { NavBar } from '@components/NavBar'

function Wallet () {
  return (
    <div className='min-h-screen bg-dark '>
      <Head>
        <title>Wallet | BeTrusty</title>
        <meta
          name='description'
          content='Esta es tu wallet y la puedes utilizar dentro de la apliación de BeTrusty'
        />
      </Head>
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
                priority
              />
            </div>
            <h4 className='text-primary font-bold text-2xl lg:text-3xl'>
              Mi Wallet
            </h4>
            <div id='connect-wallet'>
              <ConnectButton />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Wallet

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const session = await getSession(context)
  // redirect if not authenticated
  if (!session) {
    return {
      props: { session },
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }
  return {
    props: { session }
  }
}
