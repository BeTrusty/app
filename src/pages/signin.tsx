import React, { useContext, useEffect } from 'react'
import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import SwipeableViews from 'react-swipeable-views'
import { Context } from '../context'
import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Features } from '@components/Features'

function Signin ({ session }: Session) {
  const { indexSlide, setIndexSlide, setMySession } = useContext(Context)
  const router = useRouter()
  useEffect(() => {
    setMySession(session)
  }, [setMySession, session])
  const changeSlide = () => {
    clearInterval(intervalo)
    if (indexSlide < 2) {
      setIndexSlide(indexSlide + 1)
    } else {
      setIndexSlide(0)
    }
  }
  const intervalo = setInterval(changeSlide, 3000)
  return (
    <>
      <Head>
        <title>Signin | BeTrusty</title>
        <meta
          name='description'
          content='Inicia sesión para poder utilizar BeTrusty'
        />
      </Head>
      <main className='flex min-h-screen flex-col justify-center items-center p-8 bg-dark mx-auto text-center text-white'>
        <Header />
        <SwipeableViews index={indexSlide} className='mb-3'>
          <Features
            img='/img/identidad.png'
            text='Identidad digital para tu inmueble.'
          />
          <Features
            img='/img/certificacion.png'
            text='Certificación de la existencia real y trazabilidad.'
          />
          <Features
            img='/img/NFT.png'
            text='Mintea tu NFT y adueñate de tu
          propiedad digital.'
          />
        </SwipeableViews>
        <section className='flex flex-row justify-center items-center gap-3 mb-9'>
          <div
            className={
              indexSlide === 0
                ? 'w-3 h-3 rounded-full bg-white border-white border'
                : 'w-3 h-3 rounded-full bg-opacity-0 border-white border'
            }
          />
          <div
            className={
              indexSlide === 1
                ? 'w-3 h-3 rounded-full bg-white border-white border'
                : 'w-3 h-3 rounded-full bg-opacity-0 border-white border'
            }
          />
          <div
            className={
              indexSlide === 2
                ? 'w-3 h-3 rounded-full bg-white border-white border'
                : 'w-3 h-3 rounded-full bg-opacity-0 border-white border'
            }
          />
        </section>
        <div className='w-full max-w-[325px]'>
          <Button content='Continuar' onClick={() => router.push('/login')} />
        </div>
      </main>
    </>
  )
}

export default Signin

export async function getServerSideProps (context: GetServerSidePropsContext) {
  const session = await getSession(context)
  if (!session) {
    return {
      props: { session }
    }
  }
  if (session !== null || session !== undefined) {
    return {
      props: { session },
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}
