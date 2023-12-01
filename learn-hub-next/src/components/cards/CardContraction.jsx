import React, { useState } from "react";
import { Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
export default function CardContraction({ contract } ,idService ) {
  const [status, setStatus] = useState(contract.state);

  const handleStatusChange = async (newState) =>{
    try{
      const token = cookies().get("token");
      const tokn = JSON.stringify(token);
      const extractedToken = tokn.split('"')[7];
      console.log("Token", extractedToken);
      const res = await fetch(`http://localhost:4050/api/contractions/changeStatus?serviceId=${idService}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${extractedToken}`,
        },
        body: JSON.stringify({ state: newState }),
      });
      const data = await res.json();
      console.log("Status", res.status);
      console.log("Data", data);
      setStatus(newState);
    }catch(error){
      console.log(error);
      throw error;
    }

  }

  return (
    <Card className="p-6 rounded-lg shadow-lg m-4">
      <h6 className="text-2xl text-red-600 font-bold bg-gray-300 p-2 rounded-xl mb-4">Nuevo Servicio Solicitado </h6>
      {/* texto grande */}
        <h3 className="text-3xl font-semibold  text-black-200 mb-4">{contract.serviceType}</h3>
      <div className="grid grid-cols-2 gap-4 flex md:flex-row w-[72rem]">
        <div>
          <h2 className="text-xl font-semibold mb-2">Client Information</h2>
          <p className="text-black-200">
            <strong>Contract ID:</strong> 
            {contract._id}
          </p>
          <p className="text-black-200">
            <strong>Client Name:</strong> {contract.name}
          </p>
          <p className="text-black-200">
            <strong>Client Email:</strong> {contract.email}
          </p>
          <p className="text-black-200">
            <strong>Client Telephone:</strong> {contract.telephone}
          </p>
          <p className="text-black-200">
            <strong>Hour:</strong> {contract.hour}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Contract Details</h2>
          <p className="text-black-200">
            <strong>Service Type:</strong> {contract.serviceType}
          </p>
          <p className="text-black-200">
            <strong>Total Cost:</strong> {contract.totalCost}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Status</h2>
        <p className="text-black-200">
          <strong>Current Status:</strong> {status}
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            color="blue"
            buttonType="filled"
            size="regular"
            onClick={() => handleStatusChange("Requested")}
          >
            Requested
          </Button>
          <Button
            color="green"
            buttonType="filled"
            size="regular"
            onClick={() => handleStatusChange("Accepted")}
          >
            Accepted
          </Button>
          <Button
            color="red"
            buttonType="filled"
            size="regular"
            onClick={() => handleStatusChange("Canceled")}
          >
            Canceled
          </Button>
          <Button
            color="black"
            buttonType="filled"
            size="regular"
            onClick={() => handleStatusChange("Finalized")}
          >
            Finalized
          </Button>
        </div>
      </div>
    </Card>
  );
}
