import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faTwitter,
	faFacebookF,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { CopyrightNotice } from "../CopyrightNotice/CopyrightNotice"
import "./FooterComponent.scss"

export const FooterComponent = () => {
	return (
		<div className='FooterComponent text-center mt-5'>
      <p className='FooterTitle pt-4 ps-2 pe-2'>
				Niepubliczna Szkoła Podstawowa im. Janusza Korczaka w Dzierżoniowie
			</p>
			<CopyrightNotice />
			<div className='FooterSocialMedia d-flex'>
					<ul className="d-flex flex-row">
						<li className="p-4">
							<a href='https://twitter.com' target='_blank' rel='noreferrer'>
								<FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
							</a>
						</li>
						<li className="p-4">
							<a href='https://facebook.com' target='_blank' rel='noreferrer'>
								<FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
							</a>
						</li>
						<li className="p-4">
							<a href='https://youtube.com' target='_blank' rel='noreferrer'>
								<FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
							</a>
						</li>
					</ul>
				</div>
				<p className="additional-text pb-2">Polityka cookies</p>
		</div>
	)
}
