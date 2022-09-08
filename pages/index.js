import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { Card, Container,Text,Grid } from '@nextui-org/react';
import {motion, transform, useMotionValue, useTransform} from "framer-motion"

import Button from '../components/Button';
import Blayout from '../utils/Blayout';
export default function Home() {
  
  const y = useMotionValue(0)
  const scale = useTransform(
    y,
    [0,-25],
    [0,2.5]
  )
  return (
    <>
    <Blayout>
    <Head>
    <title>Gonzalo Erceg</title>
    </Head>
    <div className='container'>
      <div className='banner'>
        
         
        <Container xs css={{textAlign:"center"}}>
          <motion.div whileHover={{scale:1.2, cursor:"default"}} >
            <Text h1 css={{ textGradient: "45deg, $blue600 -20%, $purple600 50%"}}>Gonzalo Jaoquin Erceg</Text>
            <Text h3 css={{textGradient:"90deg, $blue600 0%, $purple600 100%"}}>Desarollo web</Text>
          </motion.div>
        </Container>
         <Text h6  css={{position:"absolute", bottom:0, right:0}}>Foto de <a href="https://unsplash.com/@pakata?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pakata Goh</a> en <a href="https://unsplash.com/es/s/fotos/programaci%C3%B3n?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </Text>
      </div>
      <Container md css={{marginTop:"25vh",marginBottom:"25vh"}}>
        <div className='description'>
          <Text h2>¡Hola soy un desarrollador web que se especializa en desarrollo front-end!</Text>
          
          <Text h5>Hola, mi nombre es Gonzalo Joaquin Erceg y ​​soy desarrollador web. Me especializo en la creación de sitios web usando HTML, CSS y JavaScript. Tengo una gran comprensión de los estándares web y soy capaz de crear sitios web receptivos y compatibles con dispositivos móviles.</Text>
          <Text h5>Durante mi carrera, he trabajado en una variedad de proyectos web, utilizando una amplia gama de tecnologías. Esto me ha permitido adquirir una gran cantidad de conocimientos y habilidades, que me hacen un gran candidato para el puesto de desarrollador web junior. Algunas de las tecnologías que he utilizado en mis proyectos incluyen HTML, CSS, JavaScript, ReactJs y NextJs. También tengo experiencia en el diseño web, y puedo crear sitios web atractivos y bien estructurados.</Text>        
        </div>
      </Container>
      <div className='technologies'>
          
          <Grid.Container justify='center' alignItems="center"  css={{height:"100vh"}}>
            <Grid xs={12} md={4} justify="center">
              <Button classe={["circle oneCircle",'circle secondCircle']} link="/technologies">Tecnologias</Button>
            </Grid>
            <Grid  xs={12} md={4} justify="center">
              <Button classe={['circle thirdCircle','circle fourthCircle']} link="/projects"> Proyectos</Button>
            </Grid>
            <Grid xs={12} md={4} justify="center">
              <Button classe={['circle fifthCircle','circle sixthCircle']} link="/contacts">Contacto</Button>
            </Grid>
            
          </Grid.Container>
          <Text h6 css={{position:"absolute", bottom:0, right:0}}>Foto de <a href="https://unsplash.com/@alesnesetril?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ales Nesetril</a> en <a href="https://unsplash.com/es/s/fotos/programaci%C3%B3n?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </Text>
      </div>
      
  
    </div>
    </Blayout>
    <style jsx>{`
    
    .banner{
      height:100vh;
      width:100%;
      display: flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      position:relative;
      box-shadow:2px 0px 20px 1px #0002;
      background-image:url("/pakata-goh-EJMTKCZ00I0-unsplash.jpg");
      background-size: cover;
      background-position:center;
      background-attachment:fixed
    }
    .description{
      width:100%;
      height:50vh
    }
    .technologies{
      position:relative;
      min-height:100vh;
      background-image:url("/ales-nesetril-Im7lZjxeLhg-unsplash.jpg");
      background-size:cover;
      background-position:center;
      background-attachment:fixed;
      text-align:center
    }
   
    
   
    `}</style>
    </>
  )
}
