import dataCrypto from "../storage/crypto.json";

export const getCrypto = () => {
  return dataCrypto.data.map(({ symbol, name, price_usd }) => ({
    symbol,
    name,
    price_usd,
  }));
};

export const getPriceUsd = (symbolPrice_usd) => {
  return dataCrypto.data.find((data) => data.symbol === symbolPrice_usd).price_usd;
};

