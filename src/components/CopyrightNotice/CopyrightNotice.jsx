import "./CopyrightNotice.scss"

export const CopyrightNotice = () => {
	return (
		<p className='CopyrightNotice container=md pt-3'>
			© Copyright {new Date().getFullYear()} szkolakorczak.pl. Wszelkie prawa
			zastrzeżone. <br></br>Obsługa informatyczna realizowana przez ITSAP.pl
		</p>
	)
}
