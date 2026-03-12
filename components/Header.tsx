'use client';

import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContent}`}>
                <div className={styles.logo}>
                    <span className={`text-green plaster-regular ${styles.logoPiccolo}`}>Piccolo</span>
                    <span className={`text-red birthstone-regular ${styles.logoRospo}`}>Rospo</span>
                </div>
                <nav className={styles.nav}>
                    <a href="#menu" className={styles.navLink}>Menú</a>
                    <a href="#promotions" className={styles.navLink}>Promociones</a>
                    <a href="#contact" className="btn-primary">Pedir Ahora</a>
                </nav>
            </div>
        </header>
    );
}
