import { Card, Container,Text,Grid } from '@nextui-org/react';
import {motion, transform, useMotionValue, useTransform} from "framer-motion"
import Link from 'next/link';



export default function Button(props){
    const {children, classe,link} = props
    const y = useMotionValue(0)
    const scale = useTransform(
    y,
    [0,-25],
    [0,2.5]
  )
    return(
        <motion.div whileHover={{ y:"-25px"}} style={{y}} >
             <motion.div className={classe[0]} style={{y,scale}} />
             <motion.div className={classe[1]} style={{y,scale}} />
             <Link href={link}>
             <a >
             <Card css={{w:"200px"}} isHoverable={Card} >
                <Card.Body css={{textAlign:"center",fontWeight:600, fontSize:"20px"}}>
                  {children}
                </Card.Body>
                
              </Card>
             </a>
             </Link>
             </motion.div>
    )
}