// import { useId } from "react";

// // useId is a hook for generating id's

// function InputBox({
//   // labels are From and To
//   label,
//   // the input from the user
//   amount,
//   // onAmountChange is taken jo bhi is component ko call karega waha per state change karni padegi when amout is changed
//   onAmountChange,
//   // filter mein currency change
//   onCurrencyChange,
//   // currency agar nahi hai to empty array
//   currencyOptions = [],
//   // bydefault ek currency
//   selectCurrency = "usd",
//   // if user do not want to give input
//   amountDisable = false,
//   // for production grade level
//   currencyDisable = false,
//   // given below is the css className propertyif user want to give for ine 19
//   className = "",
// }) {
//   const amountInputId = useId();
//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
//       <div className="w-1/2">
//         <label
//           htmlFor={amountInputId}
//           className="text-black/40 mb-2 inline-block"
//         >
//           {label}
//         </label>
//         <input
//           id={amountInputId}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           placeholder="Amount"
//           disabled={amountDisable}
//           value={amount}
//           // if amount is change
//           onChange={(e) =>
//             // if default value nahi hai to && run hoga
//             onAmountChange && onAmountChange(Number(e.target.value))
//           }
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//           disabled={currencyDisable}
//         >
//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default InputBox;

import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
