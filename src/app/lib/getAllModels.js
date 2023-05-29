import React from 'react'

export default async function getAllModels() {
    const res = await fetch('https://stockapi.free.beeceptor.com/model', { next: { revalidate: 10 } })

    if(!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
    
