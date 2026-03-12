import React from 'react';
import styles from './Menu.module.css';

type MenuItem = {
    name: string;
    description: string;
    prices?: { size: string; price: string; }[];
    price?: string;
};

const pizzas: MenuItem[] = [
    {
        name: "Tres Quesos",
        description: "Una mezcla sublime de quesos seleccionados fundidos a la perfección sobre nuestra base artesanal.",
        prices: [
            { size: "Chica (25cm", price: "$125" },
            { size: "Mediana (33cm)", price: "$150" }
        ]
    },
    {
        name: "Champperoni",
        description: "El clásico pepperoni acompañado de champiñones frescos en nuestra salsa especial de tomate.",
        prices: [
            { size: "Chica (25cm", price: "$125" },
            { size: "Mediana (33cm)", price: "$150" }
        ]
    },
    {
        name: "Mexicana",
        description: "Sabor local con ingredientes tradicionales, jalapeños, chorizo y cebolla cambray.",
        prices: [
            { size: "Chica (25cm", price: "$125" },
            { size: "Mediana (33cm)", price: "$150" }
        ]
    },
    {
        name: "Hawaiiana",
        description: "La combinación perfecta entre lo dulce de la piña y el jamón premium horneado.",
        prices: [
            { size: "Chica (25cm", price: "$125" },
            { size: "Mediana (33cm)", price: "$150" }
        ]
    }
];

const extras: MenuItem[] = [
    {
        name: "Ensalada",
        description: "Hojas mixtas, con tomates cherry, crutones de ajo y queso, con nuestro aderezo ranch light.",
        prices: [
            { size: "Individual", price: "$30" },
            { size: "Grande", price: "$50" }
        ]
    },
    {
        name: "Extra Porción de Chimi",
        description: "Para los amantes de la chimichurri, por que uno nunca es suficiente.",
        price: "$20"
    },
    {
        name: "Extra Queso Mozzarella",
        description: "Para los amantes del queso que quieren aún más sabor en cada rebanada.",
        price: "$20"
    }
];

export default function Menu() {
    const renderPrice = (item: MenuItem) => {
        if (item.price) {
            return <span className={styles.itemPriceSingle}>{item.price}</span>;
        }
        if (item.prices) {
            return (
                <div className={styles.priceGrid}>
                    {item.prices.map((p, i) => (
                        <div key={i} className={styles.priceColumn}>
                            <span className={styles.sizeLabel}>{p.size}</span>
                            <span className={styles.priceValue}>{p.price}</span>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <section id="menu" className={`section pattern-checkers ${styles.menuSection}`}>
            <div className="container">
                <h2 className={`text-center ${styles.menuTitle}`}>Nuestro Menú</h2>
                <div className={styles.menuGrid}>

                    <h3 className={styles.menuSubtitle}>Pizzas</h3>
                    {pizzas.map((pizza, index) => (
                        <div key={`pizza-${index}`} className={styles.menuItem}>
                            <div className={styles.itemHeader}>
                                <h4 className={styles.itemName}>{pizza.name}</h4>
                                <div className={styles.itemDots}></div>
                                {renderPrice(pizza)}
                            </div>
                            <p className={styles.itemDescription}>{pizza.description}</p>
                        </div>
                    ))}

                    <h3 className={`${styles.menuSubtitle} ${styles.menuSubtitleExtras}`}>Extras</h3>
                    {extras.map((extra, index) => (
                        <div key={`extra-${index}`} className={styles.menuItem}>
                            <div className={styles.itemHeader}>
                                <h4 className={styles.itemName}>{extra.name}</h4>
                                <div className={styles.itemDots}></div>
                                {renderPrice(extra)}
                            </div>
                            <p className={styles.itemDescription}>{extra.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
