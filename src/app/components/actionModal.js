'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const ActionModal = ({props}) => {
    
    const addModel = (model) => {
        localStorage.removeItem("model");
        localStorage.setItem("model", JSON.stringify(model))
    }

    const resetChoise = () => {
        localStorage.removeItem("alternatives")
        localStorage.removeItem("model")
    }

  return (
    <div className='flex flex-col rounded-2xl'>
        <div className='flex flex-col'>
            {
                props.map((prop, index) => {
                    return (
                        <div key={index} className='w-[458px] flex align-middle gap-3 py-2 cursor-pointer'>
                            <input type="radio" name='action' id={index} value={prop} onChange={() => addModel(prop)} className='accent-hitam'/>
                            <label htmlFor={index} className='cursor-pointer'>{prop.nama}</label>
                        </div>
                    )
                })
            }
        </div>
        <div className='flex justify-end gap-2 mt-6'>
            <Link href='/' onClick={() => resetChoise()} className='py-2 px-8 box-border border-2 rounded-lg border-hitam font-bold '>Batal</Link>
            <button className='flex bg-hitam font-bold text-white px-6 py-2 gap-2 justify-center rounded-lg transition duration-150 hover:text-jingga-1'>
            <Link href='/products/recommendation'>Buat Keputusan</Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
        </div>
    </div>
  )
}

export default ActionModal