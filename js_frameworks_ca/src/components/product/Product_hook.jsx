import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../home/Home';
import styles from './product.module.css';
import useLocalStorage from '../hooks/useLocalStorage';
import products from '../../assets/data/products';

function ProductHook() {
  const [data, setData] = useLocalStorage("cart", {});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const [items,setItems] = useState([]);
  
  useEffect((data) => {
      setData(data)
      console.log(data)

  }, [data]);

  
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
        <button className={styles.addToCartButton} onClick={() => saveItem(data)}>Add to cart</button>
        <Link to={"/"} className={styles.backButton} element={<Home />}>Continue shopping</Link>
      </div>
    </div>
    </>
  );
}
export default ProductHook;