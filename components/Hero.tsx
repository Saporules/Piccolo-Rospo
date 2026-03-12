import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import logoPiccoloRospo from '../app/logo-piccolo-rospo.jpg';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.textContent}>
                    <div className={styles.badge}>Pizza Artesanal</div>
                    <h1 className={styles.title}>
                        <span className="plaster-regular">Piccolo</span><br />
                        <span className={`${styles.titleRed} birthstone-regular`}>Rospo</span>
                    </h1>
                    <p className={styles.subtitle}>
                        El auténtico sabor tradicional en cada rebanada. Horneadas a la perfección para los paladares más exigentes.
                    </p>
                    <div className={styles.actions}>
                        <a href="#menu" className="btn-primary">Ver Especialidades</a>
                    </div>
                </div>
                <div className={styles.imageContent}>
                    {/* Logo Piccolo Rospo */}
                    <div className={styles.illustrationWrapper}>
                        <Image
                            src={logoPiccoloRospo}
                            alt="Piccolo Rospo Logo"
                            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                        />
                        {/* Decorative stars */}
                        <div className={`${styles.star} ${styles.star1}`}>✦</div>
                        <div className={`${styles.star} ${styles.star2}`}>✦</div>
                        <div className={`${styles.star} ${styles.star3}`}>✦</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
