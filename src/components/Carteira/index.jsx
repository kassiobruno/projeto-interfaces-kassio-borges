import { CarteiraDiv } from "./styles.js";
import { Table } from "reactstrap";
import { useState, useEffect } from "react";


const Carteira = ({ data }) => {
  const [qtdDolar, setQtdDolar] = useState(0);
  const [qtdReal, setQtdReal] = useState(0);


  useEffect(() => {
  setQtdDolar((data.crypto_qtd * data.coinPrice).toFixed(2));
  });

  useEffect(() => {
    setQtdReal((qtdDolar * 5).toFixed(2));
  });

  return (
    <CarteiraDiv>
          <Table dark hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Crypto</th>
                <th>Quantidade</th>
                <th>Valor US$</th>
                <th>Valor RS$</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>{data.coinName}</td>
                <td>{data.crypto_qtd}</td>
                <td>{qtdDolar} US$</td>
                <td>{qtdReal} RS$</td>
              </tr>
            </tbody>
          </Table>
    </CarteiraDiv>
  );
};

export default Carteira;
