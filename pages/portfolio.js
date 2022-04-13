import Layout from "../components/Layout"
import Work from "../components/Work"
import {data} from '../test/work'

const portfolio = () =>{
    return(
        <Layout>
            <Work data={data}/>
        </Layout>
    )
} 

export default portfolio