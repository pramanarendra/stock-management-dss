'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image';

const ProductCard = ({props}) => {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.clear();
    }
  }, []);

  const [added, setAdded] = useState(0)

  const addAlternative = (produk) => {
    if (added == 0) {
      let existingData = localStorage.getItem("alternatives");
      let dataArray = existingData ? JSON.parse(existingData) : [];
      dataArray.push(produk);
      let updatedData = JSON.stringify(dataArray);
      localStorage.setItem("alternatives", updatedData);
      setAdded(1)
    } else {
      let myArray = JSON.parse(localStorage.getItem("alternatives"));
      myArray = myArray.filter((element) => element.id !== produk.id);
      localStorage.setItem("alternatives", JSON.stringify(myArray));
      setAdded(0)
    }
  }

  return (
    <div className={added ? 'h-[446px] relative rounded-lg transition duration-200 bg-abu-2 cursor-pointer' : 'h-[446px] relative rounded-lg transition duration-200 hover:bg-abu-3 cursor-pointer'} onClick={() => addAlternative(props)}>
        <Image src={'https://drive.google.com/uc?export=view&id=' + props.gambar} width={208} height={208} alt='product-image'></Image>
        <div className="product-desc w-[208px] p-4">
            <p className='my-1'>{props.nama}</p>
            <p className='font-bold my-1'>Rp{new Intl.NumberFormat('id-ID').format(props.hargaJual)}</p>
            <div className='text-xs my-1'>
              <span>Tersedia: {props.stok} </span>
              <span>| Terjual: {props.terjual}</span>
            </div>
            <p className='text-xs text-abu-1 my-1'>{props.kategori}</p>
        </div>
        <button className='absolute bottom-4 flex bg-hitam font-bold text-white mx-4 px-6 py-2 gap-2 justify-center rounded-lg transition duration-150 hover:text-jingga-1'>
            <span>Lihat Detail</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
  )
}

export default ProductCard