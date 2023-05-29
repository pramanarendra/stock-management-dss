import React from 'react'

export default async function getAllProducts() {
    const res = await fetch('https://smdss.free.beeceptor.com/produk')

    if(!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
    
