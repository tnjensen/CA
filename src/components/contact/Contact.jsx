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
            <h2 className={styles.contactHeader}>Contact us</h2>
            <div className={styles.counter}>{counter}</div>
            {message && <div className={styles.submitMessage}>{message}</div>}
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div><label htmlFor='fullName'>Full Name</label>
                <input type='text' name='fullName' minLength='3' required />
                </div>
                <div><label htmlFor='subject'>Subject</label>
                <input type='text' name='subject' minLength='3' required />
                </div>
                <div>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' required />
                </div>
                <div>
                <label className={styles.messageLabel} htmlFor='body'>Message</label>
                <textarea cols={30} rows={5} name='body' minLength='3' required />
                </div>
                <input type='submit' className={styles.submitButton} value='Send' />
            </form>
        </div>
    )
}
export default Contact;