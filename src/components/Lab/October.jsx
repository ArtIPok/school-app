import { FilmComponent } from "../FilmComponent/FilmComponent"
import { GalleryComponent } from "../Gallery/GalleryComponent"
import { octoberPhotos } from "../Gallery/LabPhotos/october/octoberPhotos"
import video from "../../assets/labPhotos/october/video.mp4"
import "./LabText.scss"

export const October = () => {
	return (
		<div className='October'>
			<h2 className='LabTitle'>pażdziernik</h2>
			<p className='LabText2'>
				Na lekcji fizyki, której tematem były obwody elektryczne uczniowie klasy
				VIII wykorzystali elementy MODI Ekspert Kit do tworzenia prostych
				obwodów elektrycznych. Łącząc wybrane moduły np. źródło napięcia, diodę
				świecącą i włącznik zbudowali latarkę. Podobnie z wykorzystaniem innych
				części, powstały: alarm przeciwwłamaniowy, miernik środowiska, czy
				miernik hałasu. Praca zespołowa uczniów sprzyjała rozwojowi umiejętności
				współdziałania i współpracy. Szybko zauważyliśmy powstawanie zupełnie
				nowych konstrukcji np. pojazdów samobieżnych. Wspólne eksperymentowanie
				i rozwiązywanie problemów sprawia, że proces nauczania przynosi lepsze
				efekty, a jednocześnie jest świetną zabawą.
			</p>
			<GalleryComponent carouselId='octoberPhotos' images={octoberPhotos} />
			<FilmComponent videoPath={video} />
			<p className='LabText2'>
				Korzystając z cudownej jesiennej aury uczniowie klas IV, V, VI wykonali
				zdjęcia ukazujące uroki pory roku . Uczniowie użyli aparatu, gimbala
				ręcznego oraz statywu samodzielnie wykonali zdjęcia w różnym otoczeniu .
				Mamy nadzieję, że wzbudziło to poczucie estetyki oraz piękna
				otaczającego środowiska. Nasi podopieczni okazali się również dobrymi
				modelami . Poznawali się nawzajem, uczyli się porozumiewać się ze sobą w
				zrozumiały dla wszystkich sposób.
			</p>
			<p className='LabText2'>
				W czasie zajęć z języka angielskiego uczniowie klas I- IV odgrywali
				różne scenki rodzajowe. Opowiadali o swoich ubraniach, miejscu
				zamieszkania jak również uczyli się piosenki o kształtach i kolorach.
				Dzieci bardzo chętnie wcieliły się w rolę aktorów i pewnie nie raz
				jeszcze będą bawić się w teatr. Pozwoliło to pokonać nieśmiałość i
				skrępowanie, jak również skorygować małe błędy językowe.
			</p>
		</div>
	)
}
