import "./AboutComponent.scss"
import logo from "../../assets/logo.png"
import { useFontSize } from "../../context/FontSizeContext"

export const AboutComponent = () => {
	const { isFontIncreased } = useFontSize()

	return (
		<div className='AboutComponent pt-4 pb-4' id='aboutUs'>
			<div className='about-card pt-5'>
				<div className='row align-items-center'>
					<div className='col-lg-6 d-none d-lg-block'>
						<img
							src={logo}
							className='img-fluid rounded-start mx-auto d-block'
							alt='logo szkoły'
						/>
					</div>
					<div className='col-lg-6'>
						<div className='card-body'>
							<h5 className='title-card text-start'>O naszej szkole...</h5>
							<div
								className={`card-text pt-2 ps-2 about-text ${
									isFontIncreased ? "increase-font" : ""
								}`}>
								<div>
									<p>
										Niepubliczna Szkoła Podstawowa im. Janusza Korczaka w
										Dzierżoniowie powstała 1 września 2016 roku z myślą o
										uczniach potrzebujących zindywidualizowanych metod
										nauczania. Skupiamy się szczególnie na pracy z uczniami:
									</p>
									<ul className='list-about'>
										<li>z zaburzeniami rozwojowymi ze spektrum autyzmu,</li>
										<li>z zaburzenia zachowania i emocji,</li>
										<li>
											z niepełnosprawnościami (ruchowymi, intelektualnymi,
											sprzężonymi),
										</li>
										<li>z zaburzeniami lękowymi,</li>
										<li>
											z innymi trudnościami w funkcjonowaniu psychospołecznym.
										</li>
									</ul>
								</div>
								<div>
									<p>
										W ramach bezpłatnej nauki w naszej Szkole zapewniamy opiekę
										wykwalifikowanej kadry pedagogiczno-terapeutycznej, która
										stale rozwija swoje kompetencje. Do każdego dziecka
										podchodzimy indywidualnie, patrząc na jego szczególne
										potrzeby rozwojowe, terapeutyczne i dydaktyczne.<br />
										Proponujemy szeroki wachlarz zajęć specjalistycznych:
									</p>
									<ul className='list-about'>
										<li>konsultacje psychologiczne,</li>
										<li>rewalidację,</li>
										<li>terapię logopedyczną,</li>
										<li>trening umiejętności społecznych,</li>
										<li>sensoplastykę,</li>
										<li>
											zajęcia z wykorzystaniem AAC( komunikacji alternatywnej i
											wspomagającej),
										</li>
										<li>rehabilitację.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
