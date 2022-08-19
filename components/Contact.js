import styles from '../styles/Contact.module.css'
import linkedinLogo from "../images/linkedin.png"
import facebookLogo from "../images/facebook.png"
import Image from 'next/image'
import ContactTitle from '../images/ContactTitle.png'
/*import top from '../images/top.png'*/
const Contact = () => {
  return (
    <section id='Contact' className={styles.section}>
    
      <div className={styles.contactTitle}>
        <Image
            src={ContactTitle}
            width={9000}
            height={1400}
            alt='contact'
            />
      </div>
            <div className={styles.adventure}>
            Give us a<br/> new<br/>adventure
            </div>
            <div className={styles.info}>
                <div className={styles.mail}>
                <h4>Email</h4>
                <p>XXXXX@gmail.com</p>
                </div>
                <div className={styles.phone}>
                <h4>Phone Number </h4>
                <p>XXXXX@gmail.com</p>
                </div>
                <div className={styles.adress}>
                <h4>Adresse</h4>
                <p>XXXXX@gmail.com</p>
                </div>
            </div>
            <div className={styles.social}>
                <a href="#"><Image src={facebookLogo} alt='facebook logo'/></a>
                <a href="#"><Image src={linkedinLogo} alt='linkedin logo' /></a>
            </div>
            <div className={styles.top}>
           {  /* <a href='#'>

             <Image
              src={top}
              alt='top'
              />
             </a> */}
            </div>
</section>
  )
}
export default Contact