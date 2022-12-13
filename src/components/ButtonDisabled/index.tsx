import React from 'react'
import { BtnDisabled } from '@src/types/index'

function ButtonDisabled ({ content, active }: BtnDisabled) {
  return (
    <button
      disabled={active}
      className='px-14 py-2 bg-light-grey text-white shadow-lg shadow-dark rounded-3xl text-center text-xl w-full max-w-[320px] md:max-w-[420px] lg:max-w-[680px] mx-auto cursor-not-allowed'
    >
      {content}
    </button>
  )
}

export { ButtonDisabled }
