import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './components/DataTable';
import './styles/App.css';

function App() {
    const [data, setData] = useState([]);
    const [symbol, setSymbol] = useState('bitcoin');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:3000/api/data/${symbol}`);
            setData(result.data);
        };

        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, [symbol]);

    return (
        <div className="App">
            <h1>Real-Time Stock Data</h1>
            <select onChange={(e) => setSymbol(e.target.value)}>
                <option value="bitcoin">bitcoin</option>
                <option value="ethereum">ethereum</option>
                <option value="ripple">ripple</option>
                <option value="litecoin">litecoin</option>
                <option value="chainlink">chainlink</option>
            </select>
            <DataTable data={data} />
        </div>
    );
}

export default App;