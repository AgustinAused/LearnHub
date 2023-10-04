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
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,

  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Link href="/services">
        <Typography
          as="div"
          href="/servicios"
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
      {/* <Link href="/account">

        <Typography
          as="div"
          href="/account"
          variant="small"
          color="black"
          className="font-normal"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
            <UserCircleIcon className="h-[2rem] w-[2rem]" />
            Account
          </ListItem>
        </Typography>
      </Link> */}
      <Link href='/about'>
        <Typography
          as="div"
          href="/about"
          variant="small"
          color="black"
          className="font-normal"
        >
          <ListItem className="flex items-center gap-2 py-2 pr-4 text-base">
            <FlagIcon className="h-[2rem] w-[2rem]" />
            About Us
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar color="transparent" className="mx-auto my-4 w-full px-4 py-2  " fullWidth >
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
        <div className="hidden gap-2 lg:flex">
          <Link href="/sign-in">
            <Button variant="outlined" size="md" color="black" className="text-sm">
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="gradient" size="md" color="black" className="text-sm">
              Sign Up
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="black"
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
          <Link href="/sign-in">
            <Button variant="outlined" size="sm" color="black" fullWidth>
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="gradient" size="sm" fullWidth>
              Sign Up
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
}
