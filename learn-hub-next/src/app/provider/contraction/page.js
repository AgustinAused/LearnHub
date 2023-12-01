'use client';
import { useEffect, useState } from "react"
// import hiringData from "@/data/hiringData";
import CardContraction from "@/components/cards/CardContraction";
import GetContracts from "@/actions/GetContracts";

export default function page({ params }) {
    // necesitamos recibir la informacion del cliente, la contratacion,y el curso/clase
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await GetContracts();
            setData(res);
        }
        fetchData()
    },[]);

    return(
        <div className="flex flex-col items-center justify-center ">
            <h1 className=" text-3xl font-semibold mb-6">Contract Management{/*{userData.name}*/}</h1>
            {/* aca irian todas las contrataciones */}
            {data && data.map((item) => (
                <CardContraction contract={item}/>
            ))}
        </div>
    )
};
