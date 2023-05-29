import React from 'react'

export default async function getAllModels() {
    const res = await fetch('https://smdss.free.beeceptor.com/model')

    if(!res.ok) throw new Error('failed to fetch data')
    return res.json()
}
    
