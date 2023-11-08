import { useFontSize } from "../../context/FontSizeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faSearchMinus } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";
import logoLab from "../../assets/logo-lab-przysz.png";
import "./NavbarDesktop.scss";

export const NavbarDesktop = () => {
	const { isFontIncreased, toggleFontSize } = useFontSize();

	return (
		<div className='fixed-top'>
			<nav className='navbar navbar-expand-lg'>
				<div className='container-fluid'>
					<a className='col-1 navbar-brand' href='/' aria-label='Strona główna'>
						<img className='logo' src={logo} alt='znak logo szkoły' />
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarText'
						aria-controls='navbarText'
						aria-expanded='false'
						aria-label='Otwórz nawigację'>
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
						</ul>
						<a className='navbar-lab-logo' href='/laboratorium' aria-label='Laboratorium'>  {/* 2. Dodaj element <a> z logo */}
						<img className='logo-lab' src={logoLab} alt='Laboratorium przyszłości' />
					</a>
						<div
						className="zoom-icon"
							onClick={toggleFontSize}
							role='button'
							tabIndex='0'
							aria-label='Zwiększ rozmiar czcionki'>
							<FontAwesomeIcon
								icon={isFontIncreased ? faSearchMinus : faSearchPlus}
								className='font-icon'
								aria-hidden='true'
							/>
						</div>
						<span className='navbar-text'>
							Telefon: 600 904 492, 74 832 36 88, email:{" "}
							<a
								href='mailto:szkola.korcza@wp.pl'
								aria-label='E-mail kontaktowy'>
								szkola.korczak@wp.pl
							</a>
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
