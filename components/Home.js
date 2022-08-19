import mac from '../images/mac.png'
import Hire from '../images/Hire.png'
import arrow1 from '../images/arrow1.png'
import OurServices from '../images/OurServices.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Part1 = () => {
  return (
    <section id='Home' className={styles.section}>
    <h1 className={styles.descrition} >We bring your <br/> <span className={styles.textCyan}>digital</span> dream <br/> 
        to <span className={styles.textCyan}>life</span></h1>
        <div className={styles.mac}>
           <Image 
        src={mac}
        alt='pc'
        />
        </div>
        <div className={styles.btn_arrow}>
        <a className={styles.btn1} href='#Contact'><Image
        src={Hire}
        alt='btn'
        /></a>
        <div className={styles.arrow1}>
        <Image
        src={arrow1}
        alt='arrow'
        />
        </div>
        </div>
      <a href='#Services'> <div className={styles.OurServices}>
          <Image 
          src={OurServices}
          alt='arrow'
          />
        </div> </a>
   </section>
  )
}
export default Part1;