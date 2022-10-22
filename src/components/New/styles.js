import styled from "styled-components";
import { Container, Button } from "reactstrap";
import { FaPlus } from "react-icons/fa"

export const NewContainer = styled(Container)`
  box-shadow: 0 0 24px #ae3b80, 0 44px 74px rgb(27 22 66 / 6%);
  background-color: #212529;
  border-radius: 10px;
  padding: 20px;
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  padding: 5px 0 20px 0;
  margin: 5px;
  color: #FFF;
  text-transform: uppercase;
  font-weight: 900;
`;

export const Botao = styled(Button)`
  background-color: #00dcc9;
  width: 60%;
  height: 40px;
  border-radius: 7px;
  margin-top: 22px;
`;

export const ButtonIcon = styled(FaPlus)`
  font-size: 20px;
  font-weight: 900;
  color: #FFF;
`;


