import { Ticket } from '@/components/Ticket'

export default function Home() {
    return (
        <>
            <h2 className="text-4xl text-green-300 font-bold text-center mb-4">
                Cartão de embarque
            </h2>

            <Ticket.Root>
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

                <Ticket.Divider />

                <Ticket.PassengerInfo passenger="Matheus Ramalho" seat="28A" />

                <Ticket.Divider />

                <Ticket.BoardingInfo
                    boardingTime="16:15"
                    terminal={2}
                    gate={15}
                    boardingGroup={3}
                />
            </Ticket.Root>

            <p className="text-base text-gray-300 px-8 text-center">
                Qualquer problema procure o balcão de atendimento da sua
                companhia aérea
            </p>
        </>
    )
}
