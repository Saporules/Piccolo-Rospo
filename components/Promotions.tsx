import React from 'react';
import styles from './Promotions.module.css';
import PromoSlider from './PromoSlider';
import fs from 'fs';
import path from 'path';

async function getPromotions() {
    const promosDir = path.join(process.cwd(), 'app/content/promotions');
    
    if (!fs.existsSync(promosDir)) {
        return [];
    }

    const folders = fs.readdirSync(promosDir);
    const slides = [];

    for (const folder of folders) {
        const folderPath = path.join(promosDir, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            const slideFilePath = path.join(folderPath, 'slide.ts');
            if (fs.existsSync(slideFilePath)) {
                try {
                    // Import dynamically using Webpack contextual path
                    const module = await import(`@/app/content/promotions/${folder}/slide`);
                    if (module.slide) {
                        slides.push(module.slide);
                    }
                } catch (error) {
                    console.error(`Error loading slide from folder ${folder}:`, error);
                }
            }
        }
    }
    
    return slides;
}

export default async function Promotions() {
    const slides = await getPromotions();

    return (
        <section id="promotions" className={`section ${styles.promotionsSection}`}>
            <div className="container text-center">
                <h2 className={styles.sectionTitle}>Promociones Exclusivas</h2>

                <div className={styles.promoGrid}>
                    <PromoSlider slides={slides} />
                </div>
            </div>
        </section>
    );
}
