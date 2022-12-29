import React from 'react'

export default function Lista(props) {
    console.log('cuando nos pasaron la prop, quedó '+props.items)
    let arr = []

    return (
        <div>
            {props.items?
            props.items.map((item)=>(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            ))
            :'Cargando...'}
        </div>
  )
}