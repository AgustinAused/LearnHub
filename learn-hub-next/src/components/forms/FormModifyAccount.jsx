'use client';
import React, { useState } from "react";
export default function FormModifyAccount({account ,onGuardarCambios}) {
    const [formData, setFormData] = useState({
        name: account.name,
        email: account.email,
        degree: account.degree,
        expirience: account.expirience,
        
      });


    
};
