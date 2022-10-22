import styled from "styled-components";
import { GrBitcoin } from "react-icons/gr";

export const NavBarContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=League+Gothic&display=swap');
 *{
  font-family: 'League Gothic', sans-serif;
 }
 `;

export const Icon = styled(GrBitcoin)`
  color: #00dcc9;
  font-size: 55px;
  padding-right: 10px;
`;

export const IconText = styled.text`
  justify-content: center;
  color: #FFF;
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 50px;
`;
