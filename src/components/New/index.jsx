import React, { useState, useEffect } from "react";
import { Input, Label } from "reactstrap";
import axios from "axios";
import Carteira from "../Carteira";
import { NewContainer, FormGroup, Botao, ButtonIcon } from "./styles";

const New = () => {
  const [feedback, setFeedback] = useState(false);
  const [form, setForm] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSubmit = () => {
    setFeedback(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <NewContainer>
        <FormGroup>
          <Label>
            Escolha sua Crypto
            <Input
              id="name"
              name="coinName"
              type="select"
              onChange={handleChange}
            >
              <option value=""> Selecione...</option>
              {coins.map((item) => (
                <option key={item.symbol} value={item.symbol}>
                  {item.name} - {item.symbol}
                </option>
              ))}
            </Input>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Valor
            <Input
              id="valor"
              name="coinPrice"
              type="select"
              onChange={handleChange}
            >
              <option value=""> Selecione...</option>
              {coins.map((item) => (
                <option key={item.current_price} value={item.current_price}>
                  {item.symbol} - {item.current_price} US$
                </option>
              ))}
            </Input>
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Quantidade
            <Input
              id="quantidade"
              name="crypto_qtd"
              type="number"
              onChange={handleChange}
            />
          </Label>
          <Botao onClick={handleSubmit}>
            <ButtonIcon />
          </Botao>
        </FormGroup>
      </NewContainer>
      <div style={{ color: "#FFF" }}>
        {feedback && <Carteira data={form} />}
      </div>
    </>
  );
};

export default New;
