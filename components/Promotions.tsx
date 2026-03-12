import React from 'react';
import styles from './Promotions.module.css';

export default function Promotions() {
    return (
        <section id="promotions" className={`section ${styles.promotionsSection}`}>
            <div className="container text-center">
                <h2 className={styles.sectionTitle}>Promociones Exclusivas</h2>

                <div className={styles.promoGrid}>
                    {/* Opciones de la promoción visual extraída del flyer (13" o 33cm) */}
                    <div className={styles.blastWrapper}>
                        <div className={`blast-shape ${styles.blastShape}`}>
                            <div className={styles.blastContent}>
                                <div className={styles.promoItem}>
                                    <span className={styles.quantity}>1<span className={styles.x}>x</span></span>
                                    <span className={styles.price}>$150</span>
                                </div>
                                <div className={styles.promoItem}>
                                    <span className={styles.quantity}>2<span className={styles.x}>x</span></span>
                                    <span className={styles.price}>$280</span>
                                </div>
                                <div className={styles.sizeNotice}>13" o 33cm</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.promoInfoContent}>
                        <h3>La Mejor Oferta en Tamaños Familiares</h3>
                        <p className={styles.infoText}>
                            Aplica en nuestras pizzas clásicas de 33 centímetros. Ideales para compartir y con opciones de envíos a domicilio desde $35 o recoge en sucursal.
                        </p>
                        <p className={styles.contactText}>
                            Pedidos al: <br />
                            <span className={styles.phone}>📞 444 234 7600</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
