interface TicketPassengerInfoProps {
    passenger: string
    seat: string
}

export const TicketPassengerInfo = ({
    passenger,
    seat,
}: TicketPassengerInfoProps) => {
    return (
        <div className="flex items-center justify-between p-6 sm:py-6 sm:px-8">
            <div className="flex flex-col items-start">
                <span> Passageiro </span>
                <p className="text-gray-800 font-bold"> {passenger} </p>
            </div>

            <div className="flex flex-col items-end">
                <span> Assento </span>
                <p className="text-gray-800 font-bold"> {seat} </p>
            </div>
        </div>
    )
}
