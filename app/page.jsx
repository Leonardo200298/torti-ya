"use client"
import { React, useState, useEffect, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import Image from 'next/image'
import Lista from './components/Lista'

export default function Page() {
    let supabaseUrl = process.env.NEXT_PUBLIC_API_URL
    let supabaseKey = process.env.NEXT_PUBLIC_API_KEY
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    const [error, setError] = useState(null)
    const [tortillas, setTortillas] = useState(null)
    const dbfetch = useRef(false)

    //1. este useEffect trae la info de la DB cuando se crea la función
    useEffect(()=>{
        async function fetchTortillas(){
            const { data, error } = await supabase
                .from('products')
                .select('*')
            if(error){
                setError(error)
                setTortillas(null)
                console.error(error)
                return;
            }
            if(data){
                setTortillas(data)
                setError(null)
            }
        }
        //evitar ejecución múltiple del useEffect
        if(dbfetch.current) return;
        dbfetch.current = true;
        //a ver qué logramos
        fetchTortillas()
        console.log('tenés esto que te llega de la db: '+tortillas)
    },[])

    return (
        <section>
            {console.log('acá tenés antes de pasar la prop:'+tortillas)}
            <Lista items={tortillas}/>
        </section>
    )
}