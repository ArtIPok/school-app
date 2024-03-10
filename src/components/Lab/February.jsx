import { FilmComponent } from "../FilmComponent/FilmComponent"
import { GalleryComponent2 } from "../Gallery/GalleryComponent2"
import { februaryPhotos } from "../Gallery/LabPhotos/february/februaryPhotos"
// import video1 from "../../assets/labPhotos/february/video1.mp4"
import video2 from "../../assets/labPhotos/february/video2.mp4"
import video3 from "../../assets/labPhotos/february/video3.mp4"
import video4 from "../../assets/labPhotos/february/video4.mp4"
import video5 from "../../assets/labPhotos/february/video5.mp4"

import "./LabText.scss"

export const February = () => {
	return (
		<div className='february'>
			<h2 className='LabTitle'>luty</h2>
			<p className='LabText2'>
				W lutym odbyło się wiele ciekawych lekcji dzięki sprzętowi który
				pozyskaliśmy w ramach Laboratorium Przyszłości. Dzięki posiadaniu
				drukarki 3D wszyscy uczniowie naszej szkoły otrzymali piękne serduszka z
				okazji Walentynek.
			</p>
			<p className='LabText2'>
				Uczniowie klasy czwartej uczyli się jak obsługiwać lutownicę i wykonali
				nutki i pięciolinię, na której komponowali utwory, które na gitarze
				grała pani od muzyki.
			</p>
			<p className='LabText2'>
				Uczniowie klasy piątej budowali fantastyczny pojazd i wprawiali go w
				ruch przy pomocy zestawu Modi. Klocki Modi zestaw eksperta
				wykorzystaliśmy także na zajęciach rozwijających kreatywność, dzieci
				wykonywały konstrukcje zgodnie z instrukcją, a były to latarka, alarm
				przeciwwłamaniowy, czujnik natężenia światła. Utworzyły także latarkę,
				która świeciła w zależności od siły głosu.
			</p>
			<p className='LabText2'>
				Uczniowie klasy piątej zaprojektowali i wydrukowali na drukarce 3D
				pomoce do nauki ułamków dziesiętnych.
			</p>
			<GalleryComponent2 carouselId='februaryPhotos5' images={februaryPhotos} />
			{/* <FilmComponent videoPath={video1} /> */}
			<FilmComponent videoPath={video2} />
			<FilmComponent videoPath={video3} />
			<FilmComponent videoPath={video4} />
			<FilmComponent videoPath={video5} />
		</div>
	)
}
