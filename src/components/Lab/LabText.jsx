import "./LabText.scss"
import { November } from "./November"
import { October } from "./October"
import { September } from "./September"

export const LabText = () => {
	return (
		<>
			<div className='LabText'>
				<h2 className='LabTitle'>Laboratoria przyszłości w naszej szkole</h2>
				<p>
					Laboratoria Przyszłości to inicjatywa edukacyjna realizowana przez
					Ministerstwo Edukacji i Nauki. Misją programu jest stworzenie
					nowoczesnej szkoły, w której zajęcia będą prowadzone w sposób ciekawy,
					angażujący uczniów oraz sprzyjający odkrywaniu ich talentów i
					rozwijaniu zainteresowań. Kreatywne myślenie oraz obsługa narzędzi to
					jedne z podstawowych umiejętności decydujących o rozwoju
					cywilizacyjnym, gospodarczym i społecznym. Laboratoria Przyszłości to
					krok w stronę wzmocnienia i uatrakcyjnienia dotychczasowego procesu
					zdobywania wiedzy i praktycznych umiejętności w tych obszarach przez
					uczniów. W ramach Laboratoriów Przyszłości nasza szkoła otrzymała
					wsparcie w wysokości 30 000,00 zł
				</p>
				Dzięki otrzymanemu wsparciu w roku szkolnym 2022/2023, został zakupiony
				poniższy sprzęt:
				<p></p>
				<ol>
					<li>Drukarka 3D Flashforge Adventurer 4</li>
					<li>
						Filament PLA biodegradowalny kompaktybilny z drukarka 3D Flashforge
					</li>
					<li>
						Zestaw edukacyjny „CoudPoint z mikrokontrolerem i płytką stykową
					</li>
					<li>
						Aparat Canon EOS MSO Mark II, czarny i obiektyw EFM 15-45 mm 1/3
						5-6,3 IS STM
					</li>
					<li>Stacja lutownicza HotAir WEB 852D</li>
					<li>Zestaw lamp studyjnych</li>
					<li>Bezprzewodowy system mikrofonowy Synco</li>
					<li>Mikrofon kierunkowy Synco</li>
					<li>
						Gimbal ręczny FeiyuTech GS Max do smartfonów, kamer sportowych i
						aparatów bezlusterkowych
					</li>
					<li>Statyw Hama</li>
					<li>MODI zestaw eksperta</li>
					<li>Lego dedykowane do MODI</li>
					<li>Lego Edukation BricQ Motion Essential dla klas 1-3</li>
					<li>Lego Edukation BriQ Motion Prime dla klas 4-8</li>
				</ol>
			</div>
			<h2 className='LabTitle2'>
				Sprawozdanie z zajęć realizowanych z wykorzystaniem pomocy dydaktycznych
				i sprzętu zakupionego w ramach projektu „ Laboratoria przyszłości”.
			</h2>
			<September />
			<October />
			<November />
		</>
	)
}
