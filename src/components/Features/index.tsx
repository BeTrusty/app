import Image from 'next/image'
import React from 'react'

function Features ({ img, text }: Features) {
  return (
    <section className='flex flex-col justify-center gap-5 text-white text-center max-w-[290px] mx-auto'>
      <Image
        src={img}
        alt={text}
        width={320}
        height={180}
        objectFit='contain'
      />
      <h3>{text}</h3>
    </section>
  )
}

export { Features }
