
import NavBarNoAutenticado from "./NavMaterialT";
import NavbarAutenticado from "./NavbarAutenticado";
import { cookies } from "next/headers";


export default function NavbarSwitch() {
    

    
  function isthereToken() {
    const cookiesList = cookies();
    const hasCookie = cookiesList.has("token");
    // redirige al usuario a la pagina de inicio si el logout fue exitoso
    return hasCookie;
  }

  

  function renderNavbar() {
    const authOk =  isthereToken();
    return authOk ? <NavbarAutenticado /> : <NavBarNoAutenticado />;
  }

  return (
    <div>
      {/* para utilizar dos tipos de navbar dependiendo de si esta o no autenticado */}
      {renderNavbar()}
    </div>
  );
}
