import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Button } from '@material-tailwind/react';
export default function CardContraction({ contract }) {
    const [status, setStatus] = useState(contract.status);

    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        // Aquí puedes hacer una solicitud a tu servidor para actualizar el estado en la base de datos
    };

    return (
        <Card>
            <CardHeader color="lightBlue" size="lg">
            </CardHeader>
            <CardBody>
                <h2 className="text-xl font-semibold">Service Contract Information:</h2>
                <p>
                    <strong>Contract ID:</strong> {contract.id}
                </p>
                <p>
                    <strong>Client Name:</strong> {contract.clientData.name}
                </p>
                <p>
                    <strong>Client Email:</strong> {contract.clientData.email}
                </p>
                <p>
                    <strong>Client Telephone:</strong> {contract.clientData.Telephone}
                </p>
                <p>
                    <strong>Hour:</strong> {contract.clientData.Horario}
                </p>

                <h2 className="text-xl font-semibold my-4">Contract Details:</h2>
                <p>
                    <strong>Service Type:</strong> {contract.serviceType}
                </p>
                <p>
                    <strong>Total Cost:</strong> {contract.totalCost}
                </p>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">Status:</h2>
                    <p>
                        <strong>Current Status:</strong> {status}
                    </p>
                    <Button
                        color="blue"
                        buttonType="filled"
                        size="regular"
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => handleStatusChange('Requested')}
                    >
                        Requested
                    </Button>
                    <Button
                        color="green"
                        buttonType="filled"
                        size="regular"
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => handleStatusChange('Accepted')}
                    >
                        Accepted
                    </Button>
                    <Button
                        color="red"
                        buttonType="filled"
                        size="regular"
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => handleStatusChange('Canceled')}
                    >
                        Canceled
                    </Button>
                    <Button
                        color="gray"
                        buttonType="filled"
                        size="regular"
                        block={false}
                        iconOnly={false}
                        ripple="light"
                        onClick={() => handleStatusChange('Finalized')}
                    >
                        Finalized
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
};
