import { useEffect, useState } from "react";

function useCurrencyInfo(currency = "usd") {
    const [data, setData] = useState({});
    const url = `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json()) 
            .then((res) => setData(res[currency]))
            .catch((error) => console.error("Error fetching data:", error)); 

    }, [currency]);
    console.log(data);
    return data;

}

export default useCurrencyInfo;
