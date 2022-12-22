import React from 'react'
import Link from "next/link"
import styles from "./Navigation.module.css"
function Navigation() {
  return (
    <nav className={styles.nav}>
      <h1>TortiYa</h1>
      <ul className={styles.navigation}>
          
          <li><Link href="/">Productos</Link></li>
          <li><Link href="/carrito">Carrito</Link></li>
          <li><Link href="/about">Sobre nosotros</Link></li>
      </ul>        
    </nav>
  )
}

export default Navigation