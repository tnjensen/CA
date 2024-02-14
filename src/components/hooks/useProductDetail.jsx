import { useState } from "react";
import products from "../../assets/data/products";

function useProductDetail(){
    const [data, setData] = useState({products});
    
        function displayProduct(){
            console.log(`Product: ${data}`)
        }
      return [setData, displayProduct];
}
export default useProductDetail;