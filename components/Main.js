
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Devna from '../images/Devna.png'
import ButtonArrow from '../images/ButtonArrow.png'
import Link from 'next/link'
const Main = () => {
  return (
    <section className={styles.section}>
    <div className={styles.home}>
    </div>
    <div className={styles.Devna}>
     <Image
     src={Devna}
     alt="Devna"
     />
     <p className={styles.text}>Lorem ipsum <span className={styles.textCyan}>dolor sit amet</span>, consectetur adipiscing elit. <span className={styles.textCyan}>Elementum</span></p>
     </div>
     <div className={styles.arrow}>
     <Link href='#Home'>
      <a><Image
      src={ButtonArrow}
      alt='button arrow'
      />
      <p className={styles.arrowText}> <br/> Scroll Down</p>
      </a>
     </Link>
     </div>
     </section>
  )
}
export default Main;
