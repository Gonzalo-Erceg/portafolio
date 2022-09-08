import Blayout from "../../utils/Blayout"
import Head from "next/head"
import {Container,Card,Text, Tooltip, Grid} from "@nextui-org/react"

import { motion } from "framer-motion"
import Link from "next/link"
export default function Contacts(){
    return(<>
   <Blayout>
    <Head>
        <title>Contacto</title>
    </Head>
   <Container sm css={{minHeight:"100vh",display:"flex", alignContent:"center"}}>
   <div className="previusNext">
                <motion.div whileHover={{scale:1.1}}><Link href="/"><a><Card css={{width:"150px"}}><Card.Header css={{justifyContent:"center", alignItems:"center"}}><h5 style={{margin:0}}>Pagina de inicio</h5></Card.Header></Card></a></Link></motion.div>
              
            </div>
        <Card >
            <Card.Header ><Text h2 css={{margin:"auto"}}>Contacto</Text></Card.Header>
            <Card.Body>
                
                <Grid.Container >
                    <Grid xs={12} justify="center">
                    <Text h5>Prodras encontrarme y contactarme de las siguientes formas</Text>
                    </Grid>
                    <Grid xs={12} justify="center"> 
                    <motion.div whileHover={{x:"10px"}} ><Tooltip content="Copiar" color="primary"><Text h5 css={{textAlign:"center", cursor:"pointer"}} onClick={()=>navigator.clipboard.writeText("gonzalo.erceg@hotmail.com")}>gonzalo.erceg@hotmail.com </Text></Tooltip> </motion.div>
                    </Grid>
                    <Grid xs={12} justify="center">
                    <motion.div whileHover={{x:"10px"}}><Link href="https://github.com/Gonzalo-Erceg"><a target="__BLANK"><Text h5 css={{textAlign:"center"}}>Github</Text></a></Link></motion.div>
                    </Grid>
                    <Grid xs={12} justify="center">
                    <motion.div whileHover={{x:"10px"}}><Link href="https://www.linkedin.com/in/gonzalo-joaquin-erceg-398a69226/"><a target="__BLANK"><Text h5 css={{textAlign:"center"}}>Linkedin</Text></a></Link></motion.div>
                    </Grid>
                </Grid.Container>
            </Card.Body>
        </Card>
    </Container>
   </Blayout>
    <style jsx>{`
        .previusNext{
            margin:auto;
            margin-bottom:20px
        }
        `}</style>
    </>)
}