'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './PromoSlider.module.css';
import Image from 'next/image';

export interface SlideData {
    title: string;
    text: string;
    backgroundColor: string;
    backgroundImage: string;
    floatingImage: string;
    link?: string;
}

interface PromoSliderProps {
    slides: SlideData[];
}

export default function PromoSlider({ slides }: PromoSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const slideInterval = useRef<NodeJS.Timeout | null>(null);
    const touchStartX = useRef<number | null>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (!isHovered && slides.length > 1) {
            slideInterval.current = setInterval(nextSlide, 5000);
        }
        return () => {
            if (slideInterval.current) clearInterval(slideInterval.current);
        };
    }, [isHovered, currentSlide, slides.length]); // Depend on currentSlide so interval resets correctly on manual change

    // Touch event handlers for swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;

        // Sensitivity threshold for swipe
        if (diff > 50) {
            nextSlide();
        } else if (diff < -50) {
            prevSlide();
        }
        
        touchStartX.current = null;
    };

    if (slides.length === 0) {
        return <div className="text-center">No hay promociones disponibles.</div>;
    }

    return (
        <div 
            className={styles.sliderContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div 
                className={styles.slidesWrapper}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={styles.slide}
                        style={{ 
                            backgroundColor: slide.backgroundColor,
                            backgroundImage: slide.backgroundImage ? `url(${slide.backgroundImage})` : 'none'
                        }}
                    >
                        <div className={styles.slideContent}>
                            <h3 className={styles.slideTitle}>{slide.title}</h3>
                            <p className={styles.slideText}>{slide.text}</p>
                            {slide.link && (
                                <a href={slide.link} className="btn-primary">Aprovechar</a>
                            )}
                        </div>
                        {slide.floatingImage && (
                            <div className={styles.slideImageWrapper}>
                                {/* Utilizaremos img nativa por simplicidad de src externo/local en config */}
                                <img 
                                    src={'/' + slide.floatingImage} 
                                    alt={slide.title} 
                                    className={styles.slideImage} 
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {slides.length > 1 && (
                <>
                    <button className={styles.prevButton} onClick={prevSlide} aria-label="Previous slide">
                        &#10094;
                    </button>
                    <button className={styles.nextButton} onClick={nextSlide} aria-label="Next slide">
                        &#10095;
                    </button>

                    <div className={styles.dotsContainer}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
