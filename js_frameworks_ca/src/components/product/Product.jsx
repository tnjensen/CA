import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../home/Home';
import styles from './product.module.css';
import useLocalStorage from '../hooks/useLocalStorage';
import products from '../../assets/data/products';

function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const [cart, setCart] = useLocalStorage("cart", [JSON.stringify(data)]);
  
  const addToCart = (data) => {
      setCart(data);
  }

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
    <div className={styles.mainContent}>
      <h1>Product details</h1>
      <div className={styles.productCard}>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt='Post image'/>
        <p>{data.description}</p>
        <div className={styles.productPrice}>{`Price: ${data.price}`}</div>
        <button className={styles.addToCartButton} onClick={() => addToCart(data)}>Add to cart</button>
        <Link to={"/"} className={styles.backButton} element={<Home />}>Continue shopping</Link>
      </div>
    </div>
    </>
  );
}
export default Product;