import { FilmComponent } from "../FilmComponent/FilmComponent"
import { GalleryComponent } from "../Gallery/GalleryComponent"
import { novemberPhotos } from "../Gallery/LabPhotos/november/novemberPhotos"
import { novemberPhotos2 } from "../Gallery/LabPhotos/november/novemberPhotos2"
import video from "../../assets/labPhotos/november/video.mp4"
import video2 from "../../assets/labPhotos/november/video2.mp4"
import "./LabText.scss"

export const November = () => {
	return (
		<div className='November'>
			<h2 className='LabTitle'>listopad</h2>
			<p className='LabText2'>
				W listopadzie klasa V i VIII dzięki wykorzystaniu drukarki 3D mogła
				„wziąć” do ręki komórkę roślinną i zwierzęcą i porównać ich budowę.
				Dzięki poziomicom wydrukowanym na drukarce 3D, także V klasa mogła
				poszerzyć swoją wiedzę na lekcjach geografii. Klasa IV utrwalała
				kierunki świata na lekcjach przyrody przy pomocy wydrukowanej róży
				wiatrów. Uczniowie z tej klasy dali świetny koncert na rurkach, który
				nagrali, a póżniej mogli dokonywać korekt.
			</p>
			<GalleryComponent carouselId='novemberPhotos' images={novemberPhotos} />
			<FilmComponent videoPath={video} />
			<p className='LabText2'>
				W klasach młodszych niezmiennie dużym powodzenie cieszą się klocki lego,
				które wykorzystuje my na wielu lekcjach poprzez zabawę – tworzenie
				własnych projektów i rozwijały kreatywność i logiczne myślenie. Wiele
				uroczystości szkolnych, dzięki wykorzystaniu sprzętu do nagrywania,
				robienia zdjęć znalazły się na naszej stronie internetowej.
			</p>
			<GalleryComponent carouselId='novemberPhotos2' images={novemberPhotos2} />
			<FilmComponent videoPath={video2} />
		</div>
	)
}
