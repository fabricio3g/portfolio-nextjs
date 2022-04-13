import Layout from "../components/Layout"
import Work from "../components/Work"
import {data} from '../test/work'
import {  useContext } from "react";
import {ThemeContext} from '../utils/contextTheme'
import { Container } from "react-bootstrap";
const Portfolio = () =>{
    const { themeName } = useContext(ThemeContext);
    let themeChange = (themeName === 'DARK')
    return(
        <Layout>
            <>
            <div className="mt-5 ">

            </div>
            <Container fluid className={` mt-2 ${themeChange ? 'bg-gray-0 ' : 'bg-white'} `}>
            
            <Work data={data}/>
            </Container>
            </>
        </Layout>
    )
} 

export default Portfolio