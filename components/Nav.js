import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import logo from '../images/LogoD.png'
import Image from 'next/image'
 const Nav = () => {
  return (
    <nav className={styles.nav} id='p'>
        <ul>
            <li className={styles.logo}><a href='#'><Image src={logo} /></a></li>
            <li>
                <Link href='#Home'>Home</Link>
            </li>
            <li>
                <Link href='#About'>About</Link>
            </li>
            <li>
                <Link href='#Contact'>Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
export default Nav;