import React, { useState } from 'react';
import { Dialog } from '@material-tailwind/react';

const FilterModal = ({ isOpen, onClose }) => {
    const [filtro, setFiltro] = useState({
        categoria: '',
        tipoClase: 'individual',
        frecuencia: 'unica',
        calificacion: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFiltro((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const aplicarFiltro = () => {
        // Aquí puedes implementar la lógica para aplicar el filtro
        console.log('Filtro aplicado:', filtro);
        onClose(); // Cierra el modal después de aplicar el filtro
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

                <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                    <h2 className="text-2xl font-bold mb-4">Filtrar Servicios</h2>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Categoría:</label>
                        <input
                            type="text"
                            name="categoria"
                            value={filtro.categoria}
                            onChange={handleInputChange}
                            className="mt-1 p-2 border rounded w-full"
                        />
                    </div>

                    {/* Agrega más campos de filtro según tus necesidades */}
                    
                    <div className="flex justify-end">
                        <button
                            onClick={aplicarFiltro}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Aplicar Filtro
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default FilterModal;