import styles from '../styles/Home.module.css'
import Box from '../components/Box'
import logo from '../images/dev.png'
import Image from 'next/image'
import Arrow from '../images/Arrow2.png'
import OurS from '../images/OurS.png'
import what from '../images/whatwedo.png'
import About from '../images/About.png'
const Services = () => {
  return (
    <section id='Services' className={styles.section}> 
    <div className={styles.Arrow2}>
          <Image
          src={Arrow}
          alt='arrow'
          />
        </div>
      <div className={styles.OurS}>
        <Image
        src={OurS}
        alt='ours'
        /> 
       </div>
       <div className={styles.what}>
        <Image
        src={what}
        alt='what ?'
        />
       </div>
       <p className={styles.nam}>Tristique <span className={styles.textCyan}>viverra enim nam.</span>erra enim nam</p>
        <div className={styles.boxcontainer}>
            <Box paragraph="Sit amet amet accumsan donec volutpat et.Sit amet amet accumsan donec volutpat et." logo={logo} title="Web Development" />
            <Box paragraph="Sit amet amet accumsan donec volutpat et.Sit amet amet accumsan donec volutpat et." logo={logo} title="Web Development" />
            <Box paragraph="Sit amet amet accumsan donec volutpat et.Sit amet amet accumsan donec volutpat et." logo={logo} title="Web Development" />
        </div>
        <a href='#About'> <div className={styles.About}>
          <Image 
          src={About}
          alt='About'
          />
        </div> </a>
    </section>
  )
}
export default Services