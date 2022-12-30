import React from 'react'
import Image from 'next/image'

function ButtonLogin ({ content, img, onClick }: ButtonLogin) {
  console.log(`Botón ${content} renderizado`)
  return (
    <button
      onClick={onClick}
      className='flex flex-row justify-center items-center gap-2 py-2 border-primary border-2 text-white rounded-3xl text-center'
    >
      <Image
        src={img}
        alt={content}
        width={20}
        height={20}
        objectFit='contain'
        priority
      />
      {content}
    </button>
  )
}

export { ButtonLogin }
