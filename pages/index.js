import Head from 'next/head'
import HomeSection from '@/components/home/homeSection'
import Header from '@/components/home/header'
import AboutUs from '@/components/about/about'
import Services from '@/components/services/services'
import OurPeople from '@/components/our-people/our-people'
import OurClients from '@/components/our-clients/our-clients'



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.css"/>

      </Head>
      
      
      <main className='main'>
        
        <HomeSection />
        <AboutUs/>
        <Services/>
        <OurPeople/>
        <OurClients/>
       
      </main>
    </>
  )
}
