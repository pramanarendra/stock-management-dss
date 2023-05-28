import React from 'react'

export default async function getAllProducts() {
    const res = await fetch('https://stockapi.free.beeceptor.com/produk', { next: { revalidate: 10 } })

    if(!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
    
