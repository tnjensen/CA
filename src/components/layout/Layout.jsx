import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";


// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout(){
    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default Layout;