import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Dropdown,DropdownTrigger, DropdownMenu, DropdownItem,} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image width={36} src="/odin.png"/>
        <p className="font-bold text-inherit">Path of the Norns</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="light">
                Products
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" variant="light" color="primary">
              <DropdownItem key="decks">Tarot Decks</DropdownItem>
              <DropdownItem key="gems">Gems</DropdownItem>
              <DropdownItem key="books">Books</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
