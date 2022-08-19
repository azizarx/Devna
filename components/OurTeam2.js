import styles from '../styles/Home.module.css'
import Image from 'next/image';
import ourArrow from '../images/ourArrow.png'
const OurTeam2 = () => {
  return (
    <section id='Team' className={styles.section}>
      <p className={styles.teamtext2}>We <span className={styles.textCyan}>digitalize</span> businesses<br/>to help them <span className='italic not-bold font-thin'>grow</span> and<br/>catch up the <span className='italic font-thin'>speed<br/></span> 
on the century.
</p>
<a href='#Contact'> <div className={styles.teamarrow}>
          <Image 
          src={ourArrow}
          />
        </div> </a>
    </section>
  )
}
export default OurTeam2;