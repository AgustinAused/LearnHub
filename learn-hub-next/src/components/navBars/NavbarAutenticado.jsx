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
} from "@heroicons/react/24/outline";
import Link from "next/link";
import useAuth from "@/customHooks/useAuth";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/services">
        <Typography
          as="div"
          href="/services"
          variant="small"
          color="black"
          className="font-normal"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
            <BuildingStorefrontIcon className="h-[2rem] w-[2rem] " />
            Servicios
          </ListItem>
        </Typography>
      </Link>
      <Link href="/provider/contraction">
        <Typography
          as="div"
          href=""
          variant="small"
          color="black"
          className="font-normal"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
            <FlagIcon className="h-[2rem] w-[2rem]" />
            contrataciones
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

export default function NavbarAutenticado() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = useAuth("auth", "false");

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
        <Link href="/">
          <Typography
            as="div"
            variant="h4"
            className=" font-bold mr-4 cursor-pointer py-1.5 lg:ml-6  "
          >
            LearnHub
          </Typography>
        </Link>
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
          <a href="/" className="p-0 m-0">
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
