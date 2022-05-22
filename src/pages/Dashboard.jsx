import { Link } from "react-router-dom"

export default function Dashboard() {
   
    const dashboard = [
      {name: "Apple Inc.", symbol: "AAPL"},
      {name: "NVIDIA Corporation", symbol: "NVDA"},
      {name: "Broadcom Inc", symbol: "AVGO"},
      {name: "ASML Holding N.V.", symbol: "ASML"},
      {name: "Adobe Inc", symbol: "ADBE"},
      {name: "Advanced Micro Devices Inc", symbol: "AMD"},
      {name: "Qualcomm Incorporated", symbol: "QCOM"},
      {name: "Intuit Inc.", symbol: "INTU"},
      {name: "Applied Materials, Inc", symbol: "AMAT"},
      {name: "Analog Devices, Inc", symbol:"ADI"}
    
    ];
   
    return (
        <div className="dashboard">
          {dashboard.map(({symbol, name}, idx) => 
            <Link key={idx} to={`/stocks/${symbol}`}>
                <h2>{name}</h2>
              </Link>
              
            )}
        </div>
    )
}