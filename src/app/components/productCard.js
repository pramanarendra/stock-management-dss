import React from 'react'
import Image from 'next/image'

const ProductCard = ({props}) => {
  return (
    <div className='h-[446px] relative rounded-lg transition duration-200 hover:bg-abu-2'>
        <div className="image w-[208px] h-[208px] bg-abu-1 rounded-t-lg">{props.gambar}</div>
        <div className="product-desc w-[208px] p-4">
            <p className='my-1'>{props.nama}</p>
            <p className='font-bold my-1'>Rp{new Intl.NumberFormat('id-ID').format(props.hargaJual)}</p>
            <div className='text-xs my-1'>
              <span>Tersedia: {props.stok} </span>
              <span>| Terjual: {props.terjual}</span>
            </div>
            <p className='text-xs text-abu-1 my-1'>{props.kategori}</p>
        </div>
        <button className='absolute bottom-4 flex bg-hitam font-bold text-white mx-4 px-6 py-2 gap-2 justify-center rounded-lg'>
            <span>Lihat Detail</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
  )
}

export default ProductCard