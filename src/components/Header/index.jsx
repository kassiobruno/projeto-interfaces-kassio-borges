import HeaderImg from "../../assets/img/header.png";
import {HeaderContainer, Titulo, ImgHeader} from "./styles.js"

const Header = () => {
  return(
    <HeaderContainer>
      <Titulo>
        <p>Uma forma simples e ágil de calcular o valor atual das suas cryptomoedas</p>
      </Titulo>
      <ImgHeader src={HeaderImg} alt="" />
    </HeaderContainer>
  );
};

export default Header;