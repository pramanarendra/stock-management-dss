import React from 'react'
import getAllProducts from '../lib/getAllProducts'
import ProductCard from '../components/productCard'
import Link from 'next/link'

const Products = async () => {

  const productsData = await getAllProducts()

  return (
    <div className='mx-auto w-full pl-[208px] mb-24 relative'>
      <div className="product-card-wrapper mx-auto w-[904px] grid grid-cols-4 gap-6">

        <p className='col-span-full mt-24'>
          <span className='font-bold'>Manajemen Produk </span>
          <span className='text-abu-1'>&gt; Dashboard</span>
        </p>
        <p className='text-5xl font-bold'>Dashboard</p>

        <p className='col-span-full font-bold mt-12'>Produk Highlight</p>
        <div className='bg-jingga-1 text-white rounded-xl flex flex-col justify-center p-4'>
          <p className='text-xs'>Produk Terlaris</p>
          <p className='font-bold'>Jupiter Tactile 60g</p>
        </div>
        <div className='bg-toska rounded-xl flex flex-col justify-center p-4'>
          <p className='text-xs'>Stok Terbatas</p>
          <p className='font-bold'>Raiden Shogun</p>
        </div>
        <div className='bg-jingga-2 rounded-xl flex flex-col justify-center p-4'>
          <p className='text-xs'>Kurang Diminati</p>
          <p className='font-bold'>Wooden Keyboard Stand Holder</p>
        </div>

        <div className='col-span-full flex justify-between mt-12'>
          <p className='font-bold'>Daftar Produk</p>
          <button className='flex bg-hitam font-bold text-white transition duration-150 hover:text-jingga-1 px-[22px] py-2 gap-2 justify-center rounded-lg'>
              <Link href='products/pilih-aksi'>Buat Keputusan</Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
          </button>
        </div>

        {productsData.map(product => {
          return (
            <ProductCard props={product}/>
          )
        })}
      </div>

    </div>
  )
}

export default Products