import React from 'react'
import { Btn } from '@src/types/index'

function Button ({ content, onClick }: Btn) {
  return (
    <button
      onClick={onClick}
      className='px-14 py-2 bg-primary text-dark rounded-3xl text-center text-xl w-full max-w-[320px] md:max-w-[420px] lg:max-w-[680px] mx-auto'
    >
      {content}
    </button>
  )
}

export { Button }
