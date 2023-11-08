import "./FilmComponent.scss"

export const FilmComponent = ({ title, videoPath }) => {
	return (
		<div className="FilmComponent">
			<h2>{title}</h2>
			<video width='640' height='360' controls>
				<source src={videoPath} type='video/mp4' />
				Twoja przeglądarka nie obsługuje tagu video.
			</video>
		</div>
	)
}
