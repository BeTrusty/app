import React from 'react'
import Image from 'next/image'
import { BtnLogin } from '@src/types/index'

function ButtonLogin ({ content, img, onClick }: BtnLogin) {
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
      />
      {content}
    </button>
  )
}

export { ButtonLogin }
