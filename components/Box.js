import styles from '../styles/Box.module.css'
import Image from 'next/image';
function Box (props) {
    const {logo, title, paragraph} = props;
    return(
        <div className={styles.box}>
           <div className={styles.imglogo}><Image src={logo} alt='dev' /></div> 
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.paragraph}>{paragraph}</p>
        </div>
    )
}
export default Box;