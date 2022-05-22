import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function Stocks() {

  const apiKey = 'dde7c536a6ce853249cc2e7a66b154fc'
  const { symbol } = useParams();
  const url = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=dde7c536a6ce853249cc2e7a66b154fc`

  const [coin, setStock] = useState(null);
  const getStock = async () => {
    const data = await fetch(url).then(res => res.json());
    setStock(data);  
  }

  useEffect(() => {
    getStock();
  }, []);

const loaded = () =>
<div>
  <h1>{symbol}</h1>
  <h2>{coin.stock}</h2>
</div>

const loading = () => <h1>Loading...</h1>

return (
  coin ? loaded() : loading()
)
}