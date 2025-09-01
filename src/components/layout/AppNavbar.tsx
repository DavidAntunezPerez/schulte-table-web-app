import { Navbar, NavbarBrand } from '@heroui/react'
import { AppLogo } from '../../utils/logos.utils'

export default function AppNavbar() {
	return (
		<Navbar maxWidth="full" className="bg-[#242424]">
			<NavbarBrand>
				<AppLogo width="48px" height="48px" />
				<p className="font-bold text-inherit">SCHULTE TABLE</p>
			</NavbarBrand>
		</Navbar>
	)
}
