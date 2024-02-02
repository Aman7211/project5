import React from 'react'

const Header = () => {

  return (
    <div className='container d-flex mt-5' style={{backgroundColor:"black"}}>
    <div  style={{ color: "#6cc8ca", fontSize:"30px", fontWeight:"bold",  padding:"15px", marginRight:"300px"}}>HOLDINFO</div>
    <div className='btn btn-secondary m-4 text-center'>INR</div>
    <div className='btn btn-secondary m-4  text-center'>BTC</div>
    <div className='btn btn-secondary m-4  text-center'>Buy BTC</div>
    <div className='btn m-4 text-center' style={{backgroundColor:"#6cc8ca"}}>Connect Telegram</div>

    </div>
  )
}

export default Header