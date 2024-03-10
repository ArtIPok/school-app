import { FilmComponent } from "../FilmComponent/FilmComponent"
import { GalleryComponent2 } from "../Gallery/GalleryComponent2"
import { decemberPhotos } from "../Gallery/LabPhotos/december/decemberPhotos"
import video from "../../assets/labPhotos/december/video.MP4"
import "./LabText.scss"

export const December = () => {
	return (
		<div className='december'>
			<h2 className='LabTitle'>grudzień</h2>
			<p className='LabText2'>
      W tym świątecznym miesiącu korzystaliśmy z wielu pomocy, dzięki wsparciu w ramach Laboratorium. Klasy młodsze na zajęciach z rewalidacji wykonały ozdoby choinkowe, z użyciem drukarki 3D oraz długopisów 3D, korzystały także z edukacyjnych klocków Lego z których wykonywały budowle ćwicząc analizę i syntezę wzrokową. W ramach przygotowania kiermaszu świątecznego robiliśmy świeczki, mydełka i stroiki, wszystko było dokumentowane na zdjęciach.
			Uczniowie klasy siódmej na lekcjach zawodoznawstwa zapoznali się z działaniem lutownicy  i wykorzystaniem jej w różnych zawodach.
			Kamerę wykorzystaliśmy przy nagraniu jasełek, robiliśmy zdjęcia podczas zawodów sportowych na zajęciach wychowania fizycznego.
			Na zajęciach z języka angielskiego uczniowie przesyłali sobie filmiki z życzeniami. Klasy młodsze nagrywały filmy – scenki na których uczniowie witali się, nagrywano także scenki powitania w języku angielskim.
			</p>
			<GalleryComponent2 carouselId='decemberPhotos5' images={decemberPhotos} />
      <FilmComponent videoPath={video} />
		</div>
	)
}
