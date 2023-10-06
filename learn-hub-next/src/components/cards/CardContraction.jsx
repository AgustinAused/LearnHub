import React, { useState } from "react";
import { Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
export default function CardContraction({ contract }) {
  const [status, setStatus] = useState(contract.status);

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
    // Aquí puedes hacer una solicitud a tu servidor para actualizar el estado en la base de datos
  };

  return (
    <Card className=" max-w-screen-lg  p-6 rounded-lg shadow-lg m-4">
      <h6 className="text-2xl bg-gray-300 p-2 rounded-xl mb-4">Nuevo Servicio Solicitado </h6>
      {/* texto grande */}
        <h3 className="text-3xl font-semibold  text-black-200 mb-4">{contract.serviceType}</h3>
      <div className="grid grid-cols-2 gap-4 flex md:flex-row">
        <div>
          <h2 className="text-xl font-semibold mb-2">Client Information</h2>
          <p className="text-black-200">
            <strong>Contract ID:</strong> 
          </p>
          <p className="text-black-200">
            <strong>Client Name:</strong> {contract.clientData.name}
          </p>
          <p className="text-black-200">
            <strong>Client Email:</strong> {contract.clientData.email}
          </p>
          <p className="text-black-200">
            <strong>Client Telephone:</strong> {contract.clientData.Telephone}
          </p>
          <p className="text-black-200">
            <strong>Hour:</strong> {contract.clientData.Horario}
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
