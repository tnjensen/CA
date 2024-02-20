import { useState } from 'react';
import styles from './contact.module.css';
import useCounter from '../hooks/useCounter';

function Contact(){
    const [message,setMessage] = useState("");
    const [counter, setCounter] = useCounter("count");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const json = Object.fromEntries(formData.entries());
        console.log(json);
        setMessage("Message sent");
        e.target.reset();
    }
    
    return(
        <div className={styles.mainContent}>
            <h1 className={styles.contactHeader}>Contact us</h1>
            {message && <div className={styles.submitMessage}>{message}</div>}
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div>
                <input placeholder="Full name" type='text' name='fullName' minLength='3' required />
                </div>
                <div>
                <input placeholder="Subject" type='text' name='subject' minLength='3' required />
                </div>
                <div>
                <input placeholder="Email" type='email' name='email' required />
                </div>
                <div>
                <textarea  placeholder="Message" cols={30} rows={5} name='body' minLength='3' required />
                </div>
                <input type='submit' className={styles.submitButton} value='Send' />
            </form>
        </div>
    )
}
export default Contact;