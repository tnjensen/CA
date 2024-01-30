import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Home from '../home/Home';
import styles from './product.module.css';

function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();
        console.log(id);
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

  console.log(data);

  return (
    <div className={styles.singleProduct}>
      <h2>{data.title}</h2>
      <img src={data.imageUrl} alt='Post image'/>
      <p>{data.description}</p>
      <Link to={"/"} className={styles.backButton} element={<Home />}>Go back</Link>
    </div>
  );
}
export default Product;