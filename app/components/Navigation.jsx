import React from 'react'
import Link from "next/link"
import styles from "./Navigation.module.css"
function Navigation() {
  return (
    <header className={styles.header}>
        <nav>
            <ul className={styles.navigation}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/productos">Productos</Link></li>
                <li><Link href="/pedidos">Pedidos</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation