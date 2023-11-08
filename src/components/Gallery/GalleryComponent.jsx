import React from "react"
import "./GalleryComponent.scss"

export const GalleryComponent = ({
	images,
	carouselId = "carouselExampleAutoplaying",
}) => {
	const imageElements = images.map((image, index) => (
		<div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
			<img
				src={image.srcSmall}
				data-src-big={image.srcBig}
				className='d-block w-100'
				alt={image.alt}
			/>
		</div>
	))

	const indicators = images.map((_, index) => (
		<button
			key={index}
			type='button'
			data-bs-target={`#${carouselId}`}
			data-bs-slide-to={index}
			className={index === 0 ? "active" : ""}
			aria-label={`Slide ${index + 1}`}></button>
	))

	return (
		<div id={carouselId} className='carousel slide' data-bs-ride='carousel'>
			<div className='carousel-indicators'>{indicators}</div>
			<div className='carousel-inner'>{imageElements}</div>
			<button
				className='carousel-control-prev'
				type='button'
				data-bs-target={`#${carouselId}`}
				data-bs-slide='prev'>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Previous</span>
			</button>
			<button
				className='carousel-control-next'
				type='button'
				data-bs-target={`#${carouselId}`}
				data-bs-slide='next'>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='visually-hidden'>Next</span>
			</button>
		</div>
	)
}
