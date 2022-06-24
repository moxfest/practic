import '../styles/globals.scss'
import HeaderWrapper from "../Components/General/HeaderWrapper";
import {Provider} from 'react-redux'

import store from '../Store/index';
import {Layout} from "antd";
const {Header,Footer,Content}=Layout
function MyApp({ Component, pageProps }) {
  return <Layout>



    <Header className={'header'}><HeaderWrapper/></Header>


      <Content className={"content"}><Provider store={store}>
        <Component {...pageProps} />
      </Provider></Content>
    {/*<Footer>footer</Footer>*/}
  </Layout>
}



export default MyApp
