import { Link } from "react-router-dom"
import logoUE from "../../assets/UE.jpg"
import logoLab from "../../assets/logo-lab-przysz.png"
import projectUE from "../../assets/describe.pdf"
import "./NewsComponent.scss"

export const NewsComponent = () => {
	return (
		<div className='NewsComponent pt-4 pb-4'>
			<div className='news-quote text-center p-4'>
				"Dziecko ma prawo być sobą. Ma prawo do popełniania błędów. Ma prawo do
				posiadania własnego zdania. Ma prawo do szacunku. Nie ma dzieci - są
				ludzie."
			</div>
			<div
				className='row row-cols-1 row-cols-lg-3 row-cols-sm-1 cards'
				id='news'>
				<div className='col pb-4'>
					<div className='card h-100'>
						<img
							src={logoUE}
							className='card-img-top-left'
							alt='logo unii europejskiej'
						/>
						<div className='card-body'>
							<h5 className='card-title'>Projekt</h5>
							<p className='card-text'>
								"Szkoła rozwijająca i wspierająca ucznia"
							</p>
						</div>
						<div className='card-footer'>
							<a
								href={projectUE}
								className='btn btn-warning'
								target='_blank'
								rel='noreferrer'>
								Więcej...
							</a>
						</div>
					</div>
				</div>
				<div className='col pb-4'>
					<div className='card h-100'>
						<img
							src={logoLab}
							className='card-img-top-left'
							alt='logo unii europejskiej'
						/>
						<p className='card-img-top'></p>
						<div className='card-body'>
							<h5 className='card-title'>Laboratoria przyszłości</h5>
							<p className='card-text'>Wrzesień</p>
						</div>
						<div className='card-footer'>
							<Link to='/laboratorium/september' className='btn btn-warning'>
								Więcej...
							</Link>
						</div>
					</div>
				</div>
				<div className='col pb-4'>
					<div className='card h-100'>
					<img
							src={logoLab}
							className='card-img-top-left'
							alt='logo unii europejskiej'
						/>
						<div className='card-body'>
							<h5 className='card-title'>Laboratoria przyszłości</h5>
							<p className='card-text'>Październik</p>
						</div>
						<div className='card-footer'>
							<Link to='/laboratorium/october' className='btn btn-warning'>
								Więcej...
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
