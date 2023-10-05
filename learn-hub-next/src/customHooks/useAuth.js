
import { useState, useEffect } from 'react';

function useAuth(key, initialValue) {
  // Obtén el valor almacenado en localStorage o usa el valor inicial proporcionado
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }});

  // Utiliza useEffect para guardar el valor en localStorage cada vez que cambie
  const login=()=>{
    setValue(true);
    localStorage.setItem(key, JSON.stringify(true));
  }

  return [value, login];
}

export default useAuth;

  


