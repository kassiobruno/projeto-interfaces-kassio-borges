import {Container} from "reactstrap";
import Header from "../Header";
import New from "../New";
import Layout from "../../layout";
//import CoinSearch from "../CoinSearch";

const Home = () => {
  return (
    <Container>
      <Layout />
      <Header />
      <New />
    </Container>
  );
};

export default Home;