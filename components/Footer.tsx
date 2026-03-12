import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.brandInfo}>
                    <h2 className={styles.footerTitle}>Piccolo Rospo</h2>
                    <p className={styles.slogan}>Artesanos de la Verdadera Pizza</p>
                    <div className={styles.instagramBlock}>
                        <span role="img" aria-label="Instagram">📸</span>
                        <a href="https://instagram.com/PIZZAPICCOLOROSPO" target="_blank" rel="noopener noreferrer" className={styles.igLink}>
                            @PIZZAPICCOLOROSPO
                        </a>
                    </div>
                </div>

                <div className={styles.contactInfo}>
                    <h3 className={styles.sectionTitle}>Contacto</h3>
                    <a href="https://wa.me/524442347600" className={styles.whatsappBtn}>
                        <span role="img" aria-label="WhatsApp">💬</span> 444 234 7600
                    </a>
                    <p className={styles.deliveryInfo}>
                        Envío a domicilio desde <strong>$35</strong><br />
                        Ó recoge en sucursal
                    </p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} Piccolo Rospo. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
