import Style from '../styles/Layout.module.css'
import Nav from './Nav'
import Footer from './Footer'
import GetScrollPosition from '../utils/getScrollPosition'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const Layout = ({ children }) => {
    const  [ path, setPath ]  = useState('')
    const router = useRouter()
    
    useEffect(()=>{
        setPath(String(router.route)) 
    })

    const position = GetScrollPosition()

    const navIsDown = () => {
        if(position > 30){
            console.log('I"m true')
            return true
        }
        return false
    }
    return(
        <div className={`d-flex flex-column min-vh-100 ${Style.layout}`}>
            <Nav position={navIsDown()} path={path}/>
            {children}
            
        
            <Footer/>
        </div>
    )

} 
export default Layout
