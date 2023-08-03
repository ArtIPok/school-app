import { Container, Card } from "react-bootstrap";
import "./PhotoComponent.scss";
import photo from "../../assets/photo-big.jpg"

export const PhotoComponent = () => {
	return (
		<Container fluid className='bg-image'>
      <Card className="card-image d-none d-lg-block">
        <Card.Img src={photo} alt="dzieci biegnące po korytarzu" />
      </Card>
			<div className='text-center text-card-wrapper'>
				<Card className='text-card'>
					<Card.Body>
						<Card.Text className='card-text'>
							"Dziecko chce być dobre. Jeśli nie umie - naucz,jeśli nie wie -
							wytłumacz, jeśli nie może - pomóż."
						</Card.Text>
						<Card.Title className='card-title'>Janusz Korczak</Card.Title>
					</Card.Body>
				</Card>
			</div>
		</Container>
	)
}
