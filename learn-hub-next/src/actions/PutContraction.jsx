
'use server';

import { cookies } from "next/headers";

export const putContraction = async (newState,serviceId,contractId) => {
    try {
        // Utiliza await en la llamada a cookies().get('token')
        const token = await cookies().get('token');
        let tokenString = JSON.stringify(token);
        const extractedToken = tokenString.split('"')[7];
        console.log(extractedToken);
        console.log(serviceId);
    
        const response = await fetch(`http://localhost:4050/api/contractions/changeStatus`, {
            method: 'PUT',
            headers: {
            Authorization: `Bearer ${extractedToken}`,
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            newState: newState,
            serviceId: serviceId,
            contractId: contractId,
        }),
        });
        // Verifica si la respuesta es exitosa (código 200)
        if (response.ok) {
            const data = await response.json();
            console.log('Response:', data);
        } else {
          // Muestra un mensaje de error si la respuesta no es exitosa
          console.error('Error:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    
}