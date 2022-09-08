import '../styles/globals.css'
import {NextUIProvider} from "@nextui-org/react"
import {AnimatePresence} from "framer-motion"
 
function MyApp({ Component, pageProps , router}) {
  return <NextUIProvider>
    <AnimatePresence exitBeforeEnter initial={false}>
    <Component {...pageProps} key={router.asPath}/>
    </AnimatePresence>
  </NextUIProvider>
}

export default MyApp
