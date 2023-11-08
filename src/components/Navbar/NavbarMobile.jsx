import logo from "../../assets/logo.png"
import "./NavbarMobile.scss"
export const NavbarMobile = () => {
	return (
		<nav className='navbar fixed-top'>
			<div className='container-fluid'>
				<a className='col-1 navbar-brand' href='/'>
					<img className="logo" src={logo} alt="znak logo szkoły" />
				</a>
        <p className="text col-7 mb-0">
        Niepubliczna Szkoła Podstawowa <br/>im. Janusza Korczaka w Dzierżoniowie
        </p>
				<button
					className='col-2 navbar-toggler me-2'
					type='button'
					data-bs-toggle='offcanvas'
					data-bs-target='#offcanvasNavbar'
					aria-controls='offcanvasNavbar'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='offcanvas offcanvas-end'
					tabIndex='-1'
					id='offcanvasNavbar'
					aria-labelledby='offcanvasNavbarLabel'>
					<div className='offcanvas-header'>
						<h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
							Nawigacja
						</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='offcanvas'
							aria-label='Close'></button>
					</div>
					<div className='offcanvas-body'>
						<ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='/'>
									Strona główna
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/#aboutUs'>
									O nas
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/#news'>
									Aktualności
								</a>
							</li>
              <li className='nav-item'>
								<a className='nav-link' href='/#contact'>
									Kontakt
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/laboratorium'>
									Laboratoria przyszłości
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}
