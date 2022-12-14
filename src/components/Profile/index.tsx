import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { Context } from '@src/context'

function Profile () {
  const { name, profilePicture, setProfilePicture } = useContext(Context)
  const isTwitter = profilePicture.includes('pbs.twimg.com')
  useEffect(() => {
    if (isTwitter) {
      const newUrlImage = profilePicture.replace('normal', '400x400')
      setProfilePicture(newUrlImage)
    }
  })
  return (
    <section className='flex flex-col justify-center items-center gap-5 text-white text-center max-w-[400px] mx-auto'>
      <Image
        src={profilePicture || '/img/default-profile-picture.png'}
        alt={`Foto de perfil de ${name}`}
        width={115}
        height={115}
        objectFit='contain'
        layout='fixed'
        className='rounded-full'
      />
      <h3 className='text-xl font-bold text-primary'>{`Bienvenido ${name}`}</h3>
    </section>
  )
}

export { Profile }
