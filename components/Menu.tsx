import React from 'react';
import styles from './Menu.module.css';

const pizzas = [
    {
        name: "Tres Quesos",
        description: "Una mezcla sublime de quesos seleccionados fundidos a la perfección sobre nuestra base artesanal.",
        price: "13\" o 33cm"
    },
    {
        name: "Champperoni",
        description: "El clásico pepperoni acompañado de champiñones frescos en nuestra salsa especial de tomate.",
        price: "13\" o 33cm"
    },
    {
        name: "Mexicana",
        description: "Sabor local con ingredientes tradicionales, jalapeños, chorizo y cebolla cambray.",
        price: "13\" o 33cm"
    },
    {
        name: "Hawaiiana",
        description: "La combinación perfecta entre lo dulce de la piña y el jamón premium horneado.",
        price: "13\" o 33cm"
    }
];

export default function Menu() {
    return (
        <section id="menu" className={`section pattern-checkers ${styles.menuSection}`}>
            <div className="container">
                <h2 className={`text-center ${styles.menuTitle}`}>Nuestro Menú Artesanal</h2>
                <div className={styles.menuGrid}>
                    {pizzas.map((pizza, index) => (
                        <div key={index} className={styles.menuItem}>
                            <div className={styles.itemHeader}>
                                <h3 className={styles.itemName}>{pizza.name}</h3>
                                <div className={styles.itemDots}></div>
                                <span className={styles.itemPrice}>{pizza.price}</span>
                            </div>
                            <p className={styles.itemDescription}>{pizza.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
