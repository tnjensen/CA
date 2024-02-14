import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Product from '../product/Product_hook';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from './products_local.module.css';

const products = [
    {
        "id": "109566af-c5c2-4f87-86cb-76f36fb8d378",
        "title": "Vanilla Perfume",
        "description": "Women's perfume that smells a warm and sweet, with nuances of wood and jasmine.",
        "price": 2599.99,
        "discountedPrice": 2079.99,
        "imageUrl": "https://static.noroff.dev/api/online-shop/1-perfume-white.jpg",
        "rating": 5,
        "tags": [
            "perfume",
            "beauty"
        ],
        "reviews": [
            {
                "id": "90a61e3e-355a-42e4-b038-d91dcad33c20",
                "username": "Jim N.",
                "rating": 5,
                "description": "My partner loves it, its her favourite."
            }
        ]
    },
    {
        "id": "10d6cc02-b282-46bb-b35c-dbc4bb5d91d9",
        "title": "Toy car",
        "description": "A die-cast model of a toy car, perfect for displaying on your shelf.",
        "price": 499.95,
        "discountedPrice": 449.95,
        "imageUrl": "https://static.noroff.dev/api/online-shop/12-toy-car.jpg",
        "rating": 0,
        "tags": [
            "toy"
        ],
        "reviews": []
    },
    {
        "id": "159fdd2f-2b12-46de-9654-d9139525ba87",
        "title": "Gold headphones",
        "description": "Professional headphones with gold trim.",
        "price": 449.99,
        "discountedPrice": 382.49,
        "imageUrl": "https://static.noroff.dev/api/online-shop/3-headphones-beats.jpg",
        "rating": 4,
        "tags": [
            "headphones"
        ],
        "reviews": [
            {
                "id": "88e11191-d2e5-4bfb-9bcb-d7e158284657",
                "username": "Michael J.",
                "rating": 4,
                "description": "Good sound quality."
            }
        ]
    }
];

function DisplayProducts(){
    const productlist = products.map((product) => (
        <div key={product.id} className={styles.productCard}>
        <h2>{product.title}</h2>
        <Link to={"/product/" + product.id} element={<Product />}><img src={product.imageUrl} alt='Product image' /></Link>
        <p>{product.description}</p>
    </div>
    ));

    return(
    <div className={styles.mainContent}>
        <div>{productlist}</div>
    </div>
)
}
export default DisplayProducts;