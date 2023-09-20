import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyinfo from "./hooks/userCurrencyinfo";

function App() {
  const [amount, setamount] = useState();
  const [convertedAmount, setConvertedAmount] = useState();
  const [from, setfrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const curencyinfo = useCurrencyinfo(from);
  const optiones=Object.keys(curencyinfo)
  function swap(){
    setamount(convertedAmount)
    setConvertedAmount(amount)
    setfrom(To)
    setTo(from)
  }
  function convert(){
    setConvertedAmount(amount*curencyinfo[To])
  }
  
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${'https://images.pexels.com/photos/3793689/pexels-photo-3793689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full mb-1">
                <InputBox label="From" amount={amount} OnAmountChange={(Amount)=>{setamount(Amount)}} selectCurrency={from}
                OnCurrencyChange={(Currency)=>{
                  setfrom(Currency)
                }}
                currencyOption={optiones}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={()=>{
                    swap()
                  }}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox label="To"  amount={convertedAmount} OnAmountChange={(Amount)=>{setamount(Amount)}} selectCurrency={To}
                OnCurrencyChange={(Currency)=>{
                  setTo(Currency)
                }}
                currencyOption={optiones} />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                onClick={convert}
              >
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
