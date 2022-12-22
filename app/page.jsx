"use client"
import { React, useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

async function fetchItems(){
    const supabaseUrl = process.env.API_URL
    const supabaseKey = process.env.API_KEY
    console.log('La URL es:'+supabaseUrl+' y la clave es:'+supabaseKey)
    const supabase = createClient(supabaseUrl, supabaseKey)
}

export default function Page() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetchItems()
        //fetchItems().map((item)=>setItems([...items, item]))
    },[])

    console.log(items)

    return (
        <section>
            <p>Acá irían los productos obtenidos de la base</p>
        </section>
    )
}