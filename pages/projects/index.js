import Blayout from "../../utils/Blayout"
import Head from "next/head"
import { motion } from "framer-motion"
import { Card, Text,Grid } from "@nextui-org/react"
import ProjectsCard from "../../components/ProjectsCard"
import Link from "next/link"
export default function Projects(){
        return(<>
        <Blayout>
            <Head>
                <title>Proyectos</title>
            </Head>
            
            <div className="container">
            <div className="previusNext">
                <motion.div whileHover={{scale:1.1}}><Link href="/technologies"><a><Card css={{width:"150px"}}><Card.Header css={{justifyContent:"center", alignItems:"center"}}><h5 style={{margin:0}}>Tecnologias</h5></Card.Header></Card></a></Link></motion.div>
                <motion.div whileHover={{scale:1.1}}><Link href="/contacts"><a><Card css={{width:"150px"}}><Card.Header css={{justifyContent:"center", alignItems:"center"}}><h5 style={{margin:0}}>Contacto</h5></Card.Header></Card></a></Link></motion.div>
            </div>
                <Text h2>Projectos personales que he realizado</Text>
                <Grid.Container gap={3}>
                    <ProjectsCard title="Gatitoleria" gitUrl="https://github.com/Gonzalo-Erceg/Gatitoleria" pageUrl="https://gatitoleria.vercel.app" imageUrl="/img/gatitoleria.png">Gatitoleria es una pagina web creada con la API `thecatapi`, La pagina proporciona informacion sobre las diferentes especies de gatos como tambien imagenes de estos.</ProjectsCard>
                    <ProjectsCard title="Witter" pageUrl="https://witter-tan.vercel.app" gitUrl={null} imageUrl="/img/Witter.png">Witter es una pagina web estilo Twitter diseñada con NextJS y usando Firebase para el back-end</ProjectsCard>
                    <ProjectsCard title="Midjourney/Landing Page" pageUrl="https://landing-page-midyourney.vercel.app" gitUrl="https://github.com/Gonzalo-Erceg/Landing_page-Midyourney" imageUrl="/img/midjourney.png">Perico</ProjectsCard>
                    <ProjectsCard title="Shop App" pageUrl="https://gonzalo-erceg.github.io/shop-app/" gitUrl="https://github.com/Gonzalo-Erceg/shop-app" imageUrl="/img/ShopApp.png">Shop app es una pagina web estatica estilo tienda virtual con carritu de compra y carousel de pago</ProjectsCard>
                    <ProjectsCard title="Rick and Morty API" pageUrl="https://gonzalo-erceg.github.io/rickAndMorty/" gitUrl="https://github.com/Gonzalo-Erceg/rickAndMorty" imageUrl="/img/RaM.png"></ProjectsCard>
                    <ProjectsCard title="Task App" pageUrl="https://task-app-kappa.vercel.app" gitUrl="https://github.com/Gonzalo-Erceg/task_app" imageUrl="/img/task_app.png">proyectito</ProjectsCard>
                </Grid.Container>
            </div>  
        </Blayout>
        <style jsx>
            {`
            .container{
                margin-top:50px;
                min-height:100vh;
                display:flex;
                
                align-items:center;
                flex-direction:column;
                text-align:center
            }
            .previusNext{
                
                display:flex;
                gap:20px
            }`}
        </style>
        </>)
}