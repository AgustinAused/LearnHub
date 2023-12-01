import React, { useState } from "react";
import {
  Input,
  Button,
  Checkbox,
  Typography,
  Card,
} from "@material-tailwind/react";
import Link from "next/link";
import UpdateExpirience from "@/actions/Updateexperience";
import { useRouter } from "next/navigation";

export default function FormDataTea() {
  const router = useRouter();

  const [formulario, setFormulario] = useState({
    titulo: '',
    experiencia: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const  handlerSubmit = async (e) => {
    e.preventDefault();
    // Aquí puedes acceder a los datos del formulario
    console.log('Datos del formulario:', formulario);
    // Aqui se envian aca se hace la req
    try{
        const update = await UpdateExpirience(formulario);
        console.log(update);
        alert('Comment created successfully!');
        router.refresh();
        router.push("/provider/account");
    }catch(error){
      console.log('Error: ', error);
    }
  }

  return (
    <Card
      color="white"
      className="p-6 my-36 max-w-screen-lg sm:w-96"
      shadow={true}
    >
      <h2 className="text-2xl font-semibold mb-4">Experiencia del Proveedor</h2>
      <form className="mt-8 mb-2 w-80 " >
        
    <div className="mb-4">
    <Input
    name="titulo"
    label="Titulo"
    type="text"
    value={formulario.titulo}
    onChange={handleChange}
  />
        </div>
        <div class="relative w-full min-w-[200px]">
    <textarea  name="experiencia" value={formulario.experiencia} onChange={handleChange}
      class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" "
    ></textarea>
    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Experiencia
    </label>
  </div>


        <Link href="/provider/account">
          <Button className="mt-6" fullWidth onClick={handlerSubmit}>
            Guardar Información
          </Button>
        </Link>
      </form>
    </Card>
  );
}
