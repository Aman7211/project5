const Platform = require('../models/PlatformSchema');
const axios = require("axios");

// fetching the data and store the data controllers

exports.fetchDataAndStoreInDB = async()=> {
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = response.data;
   
    // // Clear existing data
    await Platform.deleteMany({});

    // Insert new data
    for (const ticker of Object.values(tickers).slice(0, 10)) {
        const { name, last, buy, sell, volume,high,low, baseAsset } = ticker;
        
        // Ensure to provide values for the required fields
       const stockDetail= await Platform.create({
            name,
            last,
            buy,
            sell,
            volume,
            high,
            low,
            base_unit: baseAsset,
        })
    }

    console.log('Data stored in the MongoDB.');
} 
catch (error) {
    console.error('Error fetching or storing data:', error.message);
}
  }
  

  exports.getAllData = async(req,res)=>{
    try {
        const data = await Platform.find();
        res.status(200).json({
            success: true,
            message: "DATA SUCCESSULLY FETCHED",
            data
        });
      } catch (error) {
        console.error('Error fetching data from MongoDB :', error.message);
        res.status(500).send('Internal Server Error');
      }
  }
