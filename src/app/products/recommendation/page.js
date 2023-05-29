'use client'

import React, { useEffect, useState } from 'react'
import weightedProduct, { countPreference } from '@/app/lib/weightedProduct'

const Recommendation = () => {
  
  const alternatives = JSON.parse(localStorage.getItem('alternatives'))
  const model = JSON.parse(localStorage.getItem('model'))

  console.log(alternatives)

  let peringkat = []

  const findProduct = (id, alternatives) => {
    let result = {}
    alternatives.forEach((alternative) => {
      console.log(alternative)
        if(alternative.id == id) {
            result = alternative
            // console.log(result)
        }
    })
    return result
  }

  let preferences = countPreference(alternatives, model.kriteria)

  for( const preference in preferences) {
    console.log('preference: ' + preferences[preference].id)
  }
  

  peringkat = weightedProduct(model.kriteria, alternatives)
  console.log(peringkat)

  return (
    <div className='mx-auto w-full pl-[208px] mb-24 relative'>
      <div className="product-card-wrapper mx-auto w-[904px] grid grid-cols-8">

        <p className='col-span-full mt-24 mb-6'>
          <span className='font-bold'>Manajemen Produk </span>
          <span className='text-abu-1'>&gt; Dashboard </span>
          <span className='text-abu-1'>&gt; Hasil Rekomendasi</span>
        </p>
        <p className='text-5xl font-bold col-span-full mb-6'>Hasil Rekomendasi</p>
        <p className='font-bold col-span-full mb-4'>Daftar Peringkat</p>
        <p className='bg-hitam text-white p-4 font-bold'>Rank</p>
        <p className='bg-hitam text-white col-span-6 p-4 font-bold'>Alternatives</p>
        <p className='bg-hitam text-white p-4 font-bold'>Score</p>

        {
            peringkat.map((rank, index) => {
              let product = findProduct(rank.id, alternatives)
              return (
                <div key={index} className='col-span-full grid grid-cols-8'>
                  <p className='p-4'>{index+1}</p>
                  <p className='p-4 col-span-6'>{product.nama}</p>
                  <p className='p-4'>{rank.score.toFixed(3)}</p>
                </div>
              )
            })
          }
      </div>
    </div>
  )
}

// Object.keys(obj).forEach(key => {
//   console.log(key + ': ' + obj[key]);
// });

export default Recommendation