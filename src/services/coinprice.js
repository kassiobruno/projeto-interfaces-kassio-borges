import {axios} from "axios";
const API_COIN = 'https://api.coingecko.com/api/v3/coins';

export const getCoins = async() => {
  const coins = await axios.get(API_COIN + "/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false");
  return coins.data;
}

export const getPriceFromCoin = async() => {
  const prices = await axios.get(API_COIN + "/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false");
  return prices.data.current_price;
};
