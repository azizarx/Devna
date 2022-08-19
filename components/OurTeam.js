import styles from '../styles/Home.module.css'
import Image from 'next/image';
import team from '../images/team.png'
const OurTeam = () => {
  return (
    <section id='About' className={styles.section}>
<p className={styles.teamtext}> <span className={styles.Devnaword}>Devna</span> <span className='font-bold'>is a team of</span><br/>  <span className='italic'>devolopers</span> <span className='font-bold'>that create</span><br/><span className='italic'>website, mobile apps and<br/>softwares</span>  <span className='font-bold'>for clients.</span>
</p>
<a href='#Team'> <div className={styles.teamarrow}>
          <Image 
          src={team}
          />
        </div> </a>
    </section>
  )
}
export default OurTeam;