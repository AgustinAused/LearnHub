'use client';
import { useEffect, useState } from "react"
import hiringData from "@/data/hiringData";
import CardContraction from "@/components/cards/CardContraction";

export default function page({ params }) {
    // necesitamos recibir la informacion del cliente, la contratacion,y el curso/clase
    const [data,setData] = useState([])
    useEffect(() => {
            console.log(params.slug);
            let data = hiringData; 
            setData(data);
            console.log(data);
        }
    )
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className=" text-3xl font-semibold mb-6">Contract Management{/*{userData.name}*/}</h1>
            {/* aca irian todas las contrataciones */}
            {data && data.map((item) => (
                <CardContraction contract={item}/>
            ))}
        </div>
    )
};
