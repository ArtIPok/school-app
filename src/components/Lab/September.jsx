import { GalleryComponent } from "../Gallery/GalleryComponent"
import { mainPhotos } from "../Gallery/LabPhotos/mainLab/mainPhotos"
import { septemberPhotos } from "../Gallery/LabPhotos/september/septemberPhotos"
import "./LabText.scss"

export const September = () => {
	return (
		<div className='September'>
			<p className='LabText2'>
				W naszej szkole odbyły się warsztaty dla nauczycieli dotyczące obsługi
				drukarki 3D. Nauczyciele dowiedzieli się jak przygotować projekty, jakie
				programy wykorzystać oraz jakie materiały są najlepsze do druku.
			</p>
			<GalleryComponent carouselId='mainPhotos' images={mainPhotos} />
			<h2 className='LabTitle'>wrzesień</h2>
			<p className='LabText2'>
				Uczniowie klasy trzeciej oraz piątej poznali poszczególne etapy
				tworzenia wydruku 3D od pomysłu, poprzez etap projektowania,
				przygotowania do wydruku i sam wydruk. W tym zakresie poznali jeden z
				programów do projektowania 3D - TinkerCad. Uczniowie zaprojektowali
				breloczki z własnym imieniem. Breloczki były robione w klasie III i V z
				okazji Dnia Chłopaka. Wrzesień był również bogaty w zabawy
				konstrukcyjne. Nauka przez zabawę- to jest to. W klasach młodszych
				korzystaliśmy z zestawu Lego. Uczniowie zapoznawali się z instrukcją i
				korzystaniem z niej. Dzieci z dużym zaangażowaniem brały i udział w
				zajęciach, uczyły się współpracy między sobą i próbowały także tworzyć
				według własnej inwencji.
			</p>
			<GalleryComponent carouselId='septemberPhotos' images={septemberPhotos} />
		</div>
	)
}
