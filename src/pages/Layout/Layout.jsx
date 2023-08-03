import { Outlet } from "react-router-dom"
import { NavbarComponent } from "../../components/Navbar/NavbarComponent"

export const Layout = () => (
	<>
      <NavbarComponent />
      <Outlet />
    </>
)
