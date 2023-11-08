import { AboutComponent } from "../../components/About/AboutComponent"
import { ContactComponent } from "../../components/Contact/ContactComponent"
import { GalleryComponent } from "../../components/Gallery/GalleryComponent"
import { homePhotos } from "../../components/Gallery/MainPhoto"
import { NewsComponent } from "../../components/News/NewsComponent"
import { PhotoComponent } from "../../components/PhotoComponent/PhotoComponent"
import "./HomePage.scss"

export const HomePage = () => {
	return (
		<div>
			<PhotoComponent />
			<AboutComponent />
			<NewsComponent />
			<GalleryComponent images={homePhotos}/>
			<ContactComponent />
		</div>
	)
}
