import './styles/global.css';

import { Ticket } from "./components/Ticket";

export const App = () => {
	return (
		<main className="flex items-center justify-center">
			<Ticket.Root>
				<Ticket.Title
					title="Cartão de embarque"
				/>

				<Ticket.Content>
					<Ticket.FlightInfo
						flight="RS995"
						flightDate="23/05/2023"

						boardingCity="São Paulo, Brasil"
						boardingAcronym="GRU"
						boardingTime="17:00"

						landingCity="São Francisco, EUA"
						landingAcronym="SFO"
						landingTime="04:48"
					/>

					<Ticket.PassengerInfo
						passenger="Matheus Ramalho"
						seat="28A"
					/>

					<Ticket.BoardingInfo
						boardingTime="16:15"
						terminal={2}
						gate={15}
						boardingGroup={3}
					/>
				</Ticket.Content>

				<Ticket.Text
					text="Qualquer problema procure o balcão de atendimento da sua companhia aérea"
				/>
			</Ticket.Root>
		</main>
	)
}
