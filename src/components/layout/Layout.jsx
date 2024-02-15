import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from './layout.module.css';


// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout(){
    return(
        <div className={styles.wrapper}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout;