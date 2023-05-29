import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    // const removeAlternatives = () => {
    //     localStorage.removeItem('alternatives');
    // }

  return (
    <>
        <nav className='bg-hitam text-white h-screen fixed min-w-[288px] z-10'>
            <h1 className='font-bold p-6'>Stock Management DSS</h1>
            <div className='flex flex-col'>
                <h2 className=' mt-4 text-sm text-abu-2 pl-6'>Manajemen Produk</h2>
                <Link href={'/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Dashboard</Link>
                <Link href={'/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Update Stock</Link>
                <Link href={'/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Tambah Produk</Link>
                <Link href={'/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Hapus Produk</Link>
                <Link href={'/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Edit Produk</Link>
            </div>

            <div className='flex flex-col'>
                <h2 className='mt-8 text-sm text-abu-2 pl-6'>Manajemen Model</h2>
                <Link href={'/models/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Dashboard</Link>
                <Link href={'/models/create/'} className='pl-6 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Buat Model</Link>
                <Link href={'/models/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Hapus Model</Link>
            </div>

            <div className='flex flex-col'>
                <h2 className='mt-8 text-sm text-abu-2 pl-6'>Akun</h2>
                <Link href={'/'} className='link pl-5 py-4 font-bold text-abu-2 transition duration-150 hover:bg-abu-1 hover:text-white'>Logout</Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar