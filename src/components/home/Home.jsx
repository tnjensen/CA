import DisplayProducts from '../data/Products_local';
import Products from '../products/Products';
import Search from '../search/Search';
import TestProducts from '../testProducts/TestProducts';
import styles from './home.module.css';

function Home(){
    return(
        <>
        {/* <DisplayProducts /> */}
        <Products />
        {/* <TestProducts /> */}
    </>
    )
}
export default Home;