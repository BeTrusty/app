import { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { getSession } from 'next-auth/react'
import React, { useEffect, useContext } from 'react'
import { Context } from '../context'
import { Header } from '@components/Header'
import { Profile } from '@components/Profile'
import { ButtonWithIcon } from '@components/ButtonWithIcon'
import { useRouter } from 'next/router'
import { FaShoppingCart } from 'react-icons/fa'
import { FaWallet } from 'react-icons/fa'
import { HiIdentification } from 'react-icons/hi2'
import { MdEmojiPeople } from 'react-icons/md'

function Home ({ session }: Session) {
  const { setMySession, setName, setEmail, setProfilePicture } = useContext(
    Context
  )
  const router = useRouter()
  useEffect(() => {
    setMySession(session)
    setName(session.user.name)
    setEmail(session.user.email)
    setProfilePicture(session.user.image)
  }, [])
  return (
    <>
      <Head>
        <title>Home | BeTrusty</title>
        <meta
          name='description'
          content='BeTrusty es una empresa web3 enfocada en el Real Estate'
        />
      </Head>
      <main className='flex min-h-screen flex-col justify-center p-8 bg-dark mx-auto text-center text-white'>
        <Header />
        <Profile />
        <h4 className='my-2'>Cuenta no verificada (no puedes mintear NFTs).</h4>
        <section className='flex flex-col gap-3 mt-7'>
          <ButtonWithIcon
            content='Marketplace'
            onClick={() => console.log('marketplace')}
          >
            <FaShoppingCart />
          </ButtonWithIcon>
          <ButtonWithIcon
            content='Mintear NFT'
            onClick={() => router.push('/mintear-NFT')}
          >
            <HiIdentification />
          </ButtonWithIcon>
          <ButtonWithIcon
            content='Mi wallet'
            onClick={() => router.push('/wallet')}
          >
            <FaWallet />
          </ButtonWithIcon>
          <ButtonWithIcon
            content='Panel inquilino'
            onClick={() => console.log('Panel inquilino')}
          >
            <MdEmojiPeople />
          </ButtonWithIcon>
        </section>
      </main>
    </>
  )
}

export default Home

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
