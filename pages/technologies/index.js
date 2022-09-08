import Blayout from "../../utils/Blayout"
import Head from "next/head"
import {Grid,Card,Text} from "@nextui-org/react"
import Link from "next/link"
import {motion} from "framer-motion"
import {HtmlLogo, CssLogo, JsLogo, ReactLogo, NodeLogo, NextLogo,MongoDBLogo,ExpressLogo,BootstrapLogo, MaterialIuLogo,NextUILogo, ThreejsLogo, FirebaseLogo,ReduxLogo} from "../../components/logos/logos.js"
export default function Technologies(){
    return(<>
        <Blayout>
        <Head>
            <title>Tecnologias</title>
        </Head>
            
            <div className="container">
            <div className="previusNext">
                <motion.div whileHover={{scale:1.1}}><Link href="/"><a><Card css={{width:"150px"}}><Card.Header css={{justifyContent:"center", alignItems:"center"}}><h5 style={{margin:0}}>Pagina de inicio</h5></Card.Header></Card></a></Link></motion.div>
                <motion.div whileHover={{scale:1.1}}><Link href="/projects"><a><Card css={{width:"150px"}}><Card.Header css={{justifyContent:"center", alignItems:"center"}}><h5 style={{margin:0}}>Proyectos</h5></Card.Header></Card></a></Link></motion.div>
            </div>
            <h2>Frameworks y tecnologias</h2>
            <Grid.Container gap={3} >
                <Grid lg={3} md={4} sm={6} xs={12} justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card >
                        <Card.Header >
                            <Text h4>HTML5</Text>
                        </Card.Header>
                        <Card.Body>
                        <HtmlLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12} justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>CSS</Text>
                        </Card.Header>
                       <Card.Body>
                       <CssLogo/>
                       </Card.Body>
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Javascript</Text>
                        </Card.Header>
                        <Card.Body>
                        <JsLogo/>
                        </Card.Body>
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>React JS</Text>
                        </Card.Header>
                        <Card.Body>
                        <ReactLogo/>
                        </Card.Body>
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Node JS</Text>
                        </Card.Header>
                        <Card.Body>
                        <NodeLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Next JS</Text>
                        </Card.Header>
                        <Card.Body>
                            <NextLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Mongo DB</Text>
                        </Card.Header>
                        <Card.Body>
                        <MongoDBLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Firebase</Text>
                        </Card.Header>
                        <Card.Body>
                        <FirebaseLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12} justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Express</Text>
                        </Card.Header>
                        <Card.Body>
                            <ExpressLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12} justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Redux</Text>
                        </Card.Header>
                        <Card.Body>
                            <ReduxLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                
            </Grid.Container>

            <h2>Diseño de interfas</h2>
            <Grid.Container gap={3}>
            <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Bootstrap</Text>
                        </Card.Header>
                        <Card.Body>
                        <BootstrapLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Material UI</Text>
                        </Card.Header>
                        <Card.Body>
                        <MaterialIuLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Next UI</Text>
                        </Card.Header>
                        <Card.Body>
                        <NextUILogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
                <Grid lg={3} md={4} sm={6} xs={12}  justify="center">
                    <motion.div whileHover={{scale:1.05}}>
                    <Card>
                        <Card.Header>
                        <Text h4>Three JS</Text>
                        </Card.Header>
                        <Card.Body>
                        <ThreejsLogo/>
                        </Card.Body>
                        
                    </Card>
                    </motion.div>
                </Grid>
            </Grid.Container>
            </div>
        </Blayout>
        <style jsx>{`
            .container{
                margin-top:50px;
                min-height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                text-align:center
            }
            .previusNext{
                
                display:flex;
                gap:20px
            }
            
            `}</style>
    </>)
}