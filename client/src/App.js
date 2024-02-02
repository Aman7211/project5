import './App.css';
import React, { useState, useEffect } from 'react';
import TableComponent from './components/TableComponent';
import Header from './components/Header';
import Banner from './components/Banner';
function App() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://project5-2yt5.onrender.com/api/v1/platform');
          if (!response.ok) {
            throw new Error("Failed to fetch the stock detail");
          }
        const data = await response.json();
        console.log(data);
        setTableData(data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <div className="text-white bg-dark" style={{height:"100vh", width:"100vw"}}>
      <h1 style={{color:"wheat", textAlign:"center"}}> This Project Created Only for Internship Purpose </h1>
      <Header />
      <h4 style={{color:"grey", textAlign:"center", marginTop:"50px"}}>Best Price to Trade</h4>    
      <Banner data={tableData} />
      <div>
      <h3 style={{color:"wheat", textAlign:"center", marginTop:"50px"}}>Stock Data</h3>
      <TableComponent data={tableData} />
    </div>
    </div>
    </>
  );
}

export default App;