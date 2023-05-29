import React from 'react'
import getAllModels from '../lib/getAllModels'

const Models = async () => {

  const models = await getAllModels()

  return (

    <div className='mx-auto w-full pl-[208px] mb-24 relative'>
      <div className="product-card-wrapper mx-auto w-[904px] grid grid-cols-8">

        <p className='col-span-full mt-24 mb-6'>
          <span className='font-bold'>Manajemen Model </span>
          <span className='text-abu-1'>&gt; Dashboard</span>
        </p>
        <p className='text-5xl font-bold mb-6 col-span-full'>Dashboard</p>
        <p className='font-bold col-span-full mb-4'>Daftar Model</p>

        <p className='bg-hitam text-white p-4 font-bold col-span-2'>Aksi</p>
        <p className='bg-hitam text-white p-4 font-bold'>Stok</p>
        <p className='bg-hitam text-white p-4 font-bold'>Terjual</p>
        <p className='bg-hitam text-white p-4 font-bold'>Restock</p>
        <p className='bg-hitam text-white p-4 font-bold'>Peminat</p>
        <p className='bg-hitam text-white p-4 font-bold'>Jual</p>
        <p className='bg-hitam text-white p-4 font-bold'>Beli</p>

        {
          models.map((model, index) => {
            return (
              <div key={index} className='col-span-full grid grid-cols-8'>
                <p className='p-4 col-span-2'>{model.nama}</p>
                <p className='p-4'>{model.kriteria.stok[2]}</p>
                <p className='p-4'>{model.kriteria.terjual[2]}</p>
                <p className='p-4'>{model.kriteria.restock[2]}</p>
                <p className='p-4'>{model.kriteria.peminat[2]}</p>
                <p className='p-4'>{model.kriteria.hargaJual[2]}</p>
                <p className='p-4'>{model.kriteria.hargaBeli[2]}</p>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Models