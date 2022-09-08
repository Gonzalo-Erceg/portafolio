import { Card, Text,Grid, Modal,Button } from "@nextui-org/react"
import Image from "NEXT/image"
import { useState } from "react"
import Link from "next/link"
export default function ProjectsCard({children, title,gitUrl,pageUrl,imageUrl}){
    const [visible, setVisible] = useState(false)
    const handleVisible =()=> setVisible(true)
    const handleClose =()=>setVisible(false)
    return(
        <Grid lg={3} md={4} sm={6} xs={12} justify="center">
           
                <div>
                <Card >
                    <Card.Header>
                        <Text h4 css={{margin:0}}>{title}</Text>
                    </Card.Header>
                    <Card.Body>
                    <Image src={imageUrl} width={400} height={200} alt={title}/>
                    </Card.Body>
                    <Card.Footer css={{position:"absolute",bgBlur: "#ffffff66",bottom:0, zIndex:1}}><Button onClick={handleVisible} size="xs"  >Ver</Button></Card.Footer>
                </Card>
                </div>
            
            <Modal closeButton open={visible} onClose={handleClose}>
                <Modal.Header><Text h4>{title}</Text></Modal.Header>
                <Modal.Body><Text h6>{children}</Text>
                
                </Modal.Body>
                <Modal.Footer css={{display:"flex"}}>
                    {gitUrl && <Link href={gitUrl} target="__BLANK">
                        <a target="__BLANK">
                            <Button size="sm">Repositorio</Button>
                        </a>
                    </Link>}
                    <Link href={pageUrl}>
                        <a target="__BLANK">
                            <Button size="sm"   >Visitar pagina</Button>
                        </a>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Grid>
    )
}