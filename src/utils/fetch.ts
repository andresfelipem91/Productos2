import { useState, useEffect } from "react";

interface FechResult {
    data: any[];
}

export default function useFetch(): FechResult {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((res) => res.json()).then((data) => { setData(data); })
    })

    return { data }
}