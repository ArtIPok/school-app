import { FilmComponent } from "../FilmComponent/FilmComponent"
import { GalleryComponent2 } from "../Gallery/GalleryComponent2"
import { januaryPhotos } from "../Gallery/LabPhotos/january/januaryPhotos"
import video1 from "../../assets/labPhotos/january/video1.mp4"
import video2 from "../../assets/labPhotos/january/video2.mp4"
import video3 from "../../assets/labPhotos/january/video3.mp4"

import "./LabText.scss"

export const January = () => {
	return (
		<div className='january'>
			<h2 className='LabTitle'>styczeń</h2>
			<p className='LabText2'>
				W tym miesiącu uczniowie naszej szkoły zajęli się budowaniem różnych
				budowli korzystając z instrukcji, udało się uruchomić tor ze
				zjeżdżającym narciarzem. Robiliśmy różne pomoce – liczmany,
				korzystaliśmy z nich na zajęciach rewalidacyjnych oraz przy przeliczaniu
				elementów. Klasa czwarta również rozwijała swoje umiejętności taneczne.
			</p>
			<p className='LabText2'>
				W małych konstruktorów bawili się uczniowie klasy pierwszej, natomiast
				klasa czwarta wykonała miasteczko ruchu drogowego. Robiliśmy prezenty na
				Dzień Babci i Dziadka z wykorzystaniem drukarki 3D oraz długopisów 3D. W
				ramach tematu: "Odkrywanie świata" klasa szósta odtwarzała obrazy
				przedstawiające ludzi w różnych zakątkach świata.
			</p>
			<GalleryComponent2 carouselId='januaryPhotos5' images={januaryPhotos} />
			<FilmComponent videoPath={video1} />
			<FilmComponent videoPath={video2} />
			<FilmComponent videoPath={video3} />
		</div>
	)
}
