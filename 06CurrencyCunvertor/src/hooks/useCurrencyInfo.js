import { useEffect, useState } from "react";

// custom hooks
// here custom hooks can use builtIn hooks
function useCurrencyInfo(currency) {
  // a state for holding data from url and give it a empty object
  const [data, setData] = useState({});

  // the custom hook will return the data
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      // converting the response into json format
      .then((res) => res.json())
      // holdog response data in a STATE
      .then(() => setData(res[currency]));
    console.log(data);
    // currency is a dependency of the data
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
