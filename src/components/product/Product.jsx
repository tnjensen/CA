import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../home/Home';
import styles from './product.module.css';
import useLocalStorage from '../hooks/useLocalStorage';
import useCounter from '../hooks/useCounter';

function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const [cart, setCart] = useLocalStorage("cart", []);
  const [counter, setCounter] = useCounter(0);
  
  const addToCart = (data) => {
    setCounter(counter + 1);
    setCart((cart) => {
      return [data, ...cart];
  });
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
      <div className={styles.counter}>{counter}</div>
      <div className={styles.productCard}>
        <h2>{data.title}</h2>
        <img src={data.imageUrl} alt='Post image'/>
        <p>{data.description}</p>
        {data.discountedPrice !== data.price ? (
          <>
          <div className={styles.productPrice}>{`On offer: $${data.discountedPrice}`}</div>
         <div className={styles.discountPrice}>{`You save: $${data.price - data.discountedPrice}`}</div>
         </>
        ) : (
          <>
          <div className={styles.productPrice}>{`Price: $${data.discountedPrice}`}</div>
          <div className={styles.discountPrice}>{`Not on offer`}</div>
          </>
          )
        }
        <button className={styles.addToCartButton} onClick={() => addToCart(data)}>Add to cart</button>
        <Link to={"/"} className={styles.backButton} element={<Home />}>Continue shopping</Link>
      </div>
    </div>
    </>
  );
}
export default Product;