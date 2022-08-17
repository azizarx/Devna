import Head from 'next/head'
import Nav from '../components/Nav'
import Home from '../components/Home'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Main from '../components/Main'
import OurWorks from '../components/OurWorks'
import OurTeam  from '../components/OurTeam'
import OurTeam2 from '../components/OurTeam2'
export default function () {
  return (
    <>
    <Head>
      <title>Devna</title>
    </Head>
    <Main/>
     <Nav/>
    <Home/>
    <Services/>
    <OurTeam/>
    <OurTeam2/>
    {/*<OurWorks/>*/}
    <Contact/>
  </>
  )
}