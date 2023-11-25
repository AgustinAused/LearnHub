"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  BuildingStorefrontIcon,
  PlusCircleIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import LogoutSession from "../../actions/Logout";
import { useRouter } from "next/navigation";

// handler del logout


function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/provider/addCourse">
        <Typography
          as="div"
          href="/provider/addCourse"
          variant="small"
          color="black"
          className="font-normal"
          >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
            <PlusCircleIcon className="h-[2rem] w-[2rem] " />
            Agrega un Servicio
          </ListItem>
        </Typography>
      </Link>
      <Link href="/provider/contraction">
        <Typography
          as="div"
          href='/provider/contraction'
          variant="small"
          color="black"
          className="font-normal"
          >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
            <FlagIcon className="h-[2rem] w-[2rem]" />
            Contrataciones
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

export default function NavbarAutenticado() {
  const [openNav, setOpenNav] = React.useState(false);
  const router = useRouter();
  
  const logout = async (e) => {
    e.preventDefault();
    const logout = LogoutSession();
    if (logout) {
      router.refresh();
      router.push('/');
    }
    
  }
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);
    
    return (
      <Navbar
      color="transparent"
      className="mx-auto my-4 w-full px-4 py-2  "
      fullWidth
      >
      <div className="flex items-center justify-between text-black">
        <div className="flex flex-row items-center ">
          <Link href="/">
            <Typography
            href="/"
              as="div"
              variant="h3"
              className=" font-bold mr-4 cursor-pointer py-1.5 lg:ml-6  "
            >
              LearnHub
            </Typography>
          </Link>
          
          <img
            src="/logoPaginaPNG.png"
            alt="Logo de la pagina"
            className="max-h-[4rem] "
          />
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex flex items-center">
          <Link href="/provider/account">
            <Typography
              as="div"
              href="/provider/account"
              variant="small"
              color="black"
              className="font-normal"
            >
              <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
                <UserCircleIcon className="h-[2rem] w-[2rem]" />
                Account
              </ListItem>
            </Typography>
          </Link>
          
            <Button
              onClick={
                logout
              }
              variant="outlined"
              size="sm"
              fullWidth
            >
              Sing Out
            </Button>
          
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Link href="/provider/account">
            <Typography
              as="div"
              href="/provider/account"
              variant="small"
              color="black"
              className="font-normal"
            >
              <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
                <UserCircleIcon className="h-[2rem] w-[2rem]" />
                Account
              </ListItem>
            </Typography>
          </Link>
          <a className="p-0 m-0" href="/">
            <Button
              onClick={() => {
                setIsAuthenticated("false");
              }}
              variant="outlined"
              size="sm"
              fullWidth
            >
              Sing Out
            </Button>
          </a>
        </div>
      </Collapse>
    </Navbar>
  );
}
