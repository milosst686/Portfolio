import React from 'react'

var adress;

const detectProvider= () =>{
    let provider;
if(window.ethereum){
    provider = window.ethereum
}else if (window.web3)
{
    provider = window.web3.currentProvider;
}else{
    window.alert("Nothing detected, Check metamask");
}
return provider;
}

const onLoginHandler = async() =>{
const provider = detectProvider();
if(provider)
{
    if(provider != window.ethereum){
        console.log("Do you have multiple wallets instaled");
    }
    await provider.request({
        method: "eth_requestAccounts"
    })
    adress = provider.account;
}


}


export const ConnectWallet = () => {
  return (
    <div>
        <h2 className='flex justify-center'>Connect your wallet to donate</h2>
        
        <div className='my-10 flex justify-center'>
                <button className='h-10 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 mx-5 text-cyan-600' type='button' 
                    onClick={onLoginHandler}>Connect</button>
            </div>
            <div className='my-10 flex justify-center'>
            <h2>You'r wallet adress: {adress}</h2>
            </div>
    </div>
  )
}
