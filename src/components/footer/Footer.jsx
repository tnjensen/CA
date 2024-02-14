import styles from './footer.module.css';

function Footer(){
    return(
        <div className={styles.footerContent}>
            <div className={styles.footerLeft}>
            Copyright &copy; 2024
            </div>
            <div className={styles.footerRight}>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-instagram'></i>
            </div>
        </div>
    )
}
export default Footer;