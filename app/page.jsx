"use client"
import { React, useState, useEffect } from 'react'
import { Image } from 'next/image'

const fetchProducts = async () => {
    /*poner la data que traemos desde supabase/productos*/
}

export default function Page() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        setItems(fetchProducts)
    },[])

    return (
        <section>
            <p>Acá irían los productos obtenidos de la base</p>
        </section>
    )
}