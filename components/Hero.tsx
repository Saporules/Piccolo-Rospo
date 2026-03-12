import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.textContent}>
                    <div className={styles.badge}>Pizza Artesanal</div>
                    <h1 className={styles.title}>
                        PICCOLO<br />
                        <span className={styles.titleRed}>Rospo</span>
                    </h1>
                    <p className={styles.subtitle}>
                        El auténtico sabor tradicional en cada rebanada. Horneadas a la perfección para los paladares más exigentes.
                    </p>
                    <div className={styles.actions}>
                        <a href="#menu" className="btn-primary">Ver Especialidades</a>
                    </div>
                </div>
                <div className={styles.imageContent}>
                    {/* Placeholder for the frog logo/illustration from the user's images */}
                    <div className={styles.illustrationWrapper}>
                        <div className={styles.frogPlaceholder}>
                            <span role="img" aria-label="Frog Chef">🐸🍕</span>
                        </div>
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
