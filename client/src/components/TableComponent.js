import React from 'react';

const TableComponent = ({ data }) => {

  const dataArray = data && data.data ? data.data : data;

  if (!dataArray || !Array.isArray(dataArray)) {
    return <p>Data is not available or not in the expected format.</p>;
  }

  return (
    <div className='container ' style={{marginTop:"40px"}}>
    <table style={{fontSize:"15px"}}>
      <thead>
        <tr style={{color:"wheat"}}>
          <th>Name</th>
          <th >Last Trade</th>
          <th>Buy Trade</th>
          <th>Sell Trade</th>
          <th>Volume</th> 
          <th>High</th>
          <th>Low</th>
          <th>Difference</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((item, index) => (
          <tr key={index} className='m-2 bg-secondary' style={{border:"5px solid black"}}>
            <td >{item.name}</td>
            <td>{item.last}</td>
            <td>{item.buy}</td>
            <td>{item.sell}</td>
            <td>{item.volume}</td>
            <td>{item.high}</td>

            <td>{item.low}</td>
            <td>{item.high-item.low}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TableComponent;
