import { useState } from 'react';
import styles from './contact.module.css';
/* import useCounter from '../hooks/useCounter'; */

function Contact(){
    /* const [message,setMessage] = useState("");
    const [counter, setCounter] = useCounter("count");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const json = Object.fromEntries(formData.entries());
        console.log(json);
        setMessage("Message sent");
        e.target.reset();
    } */
    const [message,setMessage] = useState("");
    const [toSend, setToSend] = useState({
        from_name: '',
        subject: '',
        message: '',
        reply_to: '',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        window.emailjs.send(
            'service_ute4afk',
            'template_38fs6kq',
            toSend,
            '4y9d4xdOY5xlwIwPl'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
            setMessage("Message sent");
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    return(
        <div className={styles.mainContent}>
            <h1 className={styles.contactHeader}>Contact us</h1>
            {message && <div className={styles.submitMessage}>{message}</div>}
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div>
                <input placeholder="Full name" type='text' name='from_name'  value={toSend.from_name}
                    onChange={handleChange} minLength='3' required />
                </div>
                <div>
                <input placeholder="Subject" type='text' name='subject'  value={toSend.subject}
                    onChange={handleChange} minLength='3' required />
                </div>
                <div>
                <input placeholder="Email" type='email' name='reply_to' value={toSend.reply_to}
                    onChange={handleChange} required />
                </div>
                <div>
                <textarea  placeholder="Message"  value={toSend.message}
                    onChange={handleChange} cols={30} rows={5} name='message' minLength='3' required />
                </div>
                <input type='submit' className={styles.submitButton} value='Send' />
            </form>
        </div>
    )
}
export default Contact;