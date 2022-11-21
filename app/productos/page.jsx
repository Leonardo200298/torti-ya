import React from 'react'

const fetchProductos = async () => {
    /*poner la data que traemos desde supabase/productos*/
}

export default async function Productos() {
    const productos = await fetchProductos()

  return (
    <section>
        {/*todos estos valores son campos de la tabla productos, en la db
        * el array no está definido xq no consultamos la db nunca, TODO
        */}
        {productos.map(producto =>(
            <article key={producto.id}>
                <Image src={producto.img}/>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
            </article>
        ))}
    </section>
  )
}