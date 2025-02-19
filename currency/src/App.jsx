import { useState, useEffect } from "react";
import useCurrencyInfo from "./hooks/useCurrency";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState(""); 
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState("0.00"); 

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {}); 

  useEffect(() => {
    if (amount && currencyInfo[to]) {
      const result = (parseFloat(amount) * currencyInfo[to]).toFixed(2); 
      setConvertedAmount(result);
    }
  }, [amount, from, to, currencyInfo]); 

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); 
    setConvertedAmount(amount ? parseFloat(amount).toFixed(2) : "0.00");
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (amount && currencyInfo[to]) {
                setConvertedAmount((parseFloat(amount) * currencyInfo[to]).toFixed(2));
              }
            }}
          >
            <div className="w-full mb-3">
              <InputBox
                label="From"
                amount={amount}
                currencyOption={options}
                onCurrencyChange={setFrom}
                selectCurrency={from}
                onAmountChange={(value) => setAmount(value.replace(/^0+/, ""))} 
              />
            </div>

            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <div className="w-full mt-3 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOption={options}
                onCurrencyChange={setTo}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
