import Posts from "../components/Posts"
import Layout from '../components/Layout'
import { Container } from "react-bootstrap"
import {  useContext } from "react";
import {ThemeContext} from '../utils/contextTheme'

function Blog(){
    const { themeName } = useContext(ThemeContext);
    let themeChange = (themeName === 'DARK')
    return(
     
            <Layout>
                <div className="mt-5 ">

                </div>
                <Container fluid className={`p-3 mt-2 max-h-full ${themeChange && 'bg-gray-0 text-white'}`}>
                <Posts/>
                </Container>
            </Layout>
    )
}

export default Blog