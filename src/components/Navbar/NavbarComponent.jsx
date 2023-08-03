import { useMediaQuery } from "react-responsive";
import { NavbarMobile } from "./NavbarMobile";
import { NavbarDesktop } from "./NavbarDesktop";

export const NavbarComponent = () =>{
  const isDesktop = useMediaQuery({
    query: '(min-width: 992px)'
  });

return isDesktop ? <NavbarDesktop /> : <NavbarMobile />;
}