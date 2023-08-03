import logo from "../../assets/logo.png"
import "./NavbarDesktop.scss"

export const NavbarDesktop = () => {
	return (
		<div className="fixed-top">
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid'>
					<a className='col-1 navbar-brand' href='/'>
						<img className='logo' src={logo} alt='znak logo szkoły' />
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarText'
						aria-controls='navbarText'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarText'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='/'>
									Strona główna
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									O nas
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Aktualności
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='/'>
									Kontakt
								</a>
							</li>
						</ul>
						<span className='navbar-text'>
							Telefon: 600 904 492, 74 832 36 88, email: szkola.korcza@wp.pl
						</span>
					</div>
				</div>
			</nav>
			<div className='title-header d-flex'>
				Niepubliczna Szkoła Podstawowa im. Janusza Korczaka w Dzierżoniowie
			</div>
		</div>
	)
}
