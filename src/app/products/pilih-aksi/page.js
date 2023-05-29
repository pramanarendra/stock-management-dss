import React from 'react'
import ActionModal from '@/app/components/actionModal'
import getAllModels from '@/app/lib/getAllModels'

const page = async () => {

    const actionData = await getAllModels()

  return (
    // <div className='mx-auto w-full pl-[288px] mb-24 relative'>
    //     <div className="pl-[120px] navigation mx-auto">
    //         <p className='mx-auto'>
    //         <span className='font-bold'>Manajemen Produk </span>
    //         <span className='text-abu-1'>&gt; Pilih Aksi</span>
    //         </p>
    //         <p className='text-5xl font-bold'>Pilih Aksi</p>
    //     </div>

    //     <p>Pemilihan Aksi</p>
    //     <p>Pilih aksi yang akan dijadikan sebagai dasar pembobotan kriteria</p>

    //     <ActionModal props={actionData}/>
    // </div>
    <div className='mx-auto w-full pl-[208px] mb-24 relative'>
        <div className="product-card-wrapper mx-auto w-[904px] grid grid-cols-4">

            <p className='col-span-full mt-24 mb-6'>
                <span className='font-bold'>Manajemen Produk </span>
                <span className='text-abu-1'>&gt; Pilih Aksi</span>
            </p>
            <p className='text-5xl font-bold col-span-full mb-8'>Pilih Aksi</p>
            <p className='col-span-full font-bold'>Pemilihan Aksi</p>
            <p className='col-span-full text-xs mb-6'>Pilih aksi yang akan dijadikan sebagai dasar pembobotan kriteria</p>

            <div className='col-span-full'>
                <ActionModal props={actionData} />
            </div>
        </div>
    </div>
  )
}

export default page