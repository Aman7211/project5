import { useState, useEffect } from "react";

const Banner = ({ data }) => {
    const [totalLastTrade, setTotalLastTrade] = useState(0);
    const dataArray = data && data.data ? data.data : data;

      useEffect(() => {
       
         if (!dataArray || !Array.isArray(dataArray)) {
        return <p>Data is not available or not in the expected format.</p>;
      }
        const calculateTotalLastTrade = () => {
          const total = dataArray.reduce((accumulator, currentData) => {
            return accumulator + parseFloat(currentData.last);
          }, 0);
           const average = total/10;
          setTotalLastTrade(average);
        };
    
        calculateTotalLastTrade();
      }, [dataArray]);
    
  return (
    <div className="text-center" style={{fontSize:"60px", color:"wheat"}}>
        {totalLastTrade.toFixed(2)}
    </div>
  )
}

export default Banner