import Image from 'next/image'

import airplaneIcon from '@/assets/svgs/airplane.svg'

interface TicketFlightInfoProps {
    flight: string
    flightDate: string

    boardingCity: string
    boardingAcronym: string
    boardingTime: string

    landingCity: string
    landingAcronym: string
    landingTime: string
}

export const TicketFlightInfo = ({
    flight,
    flightDate,
    boardingCity,
    boardingAcronym,
    boardingTime,
    landingCity,
    landingAcronym,
    landingTime,
}: TicketFlightInfoProps) => {
    return (
        <div className="pt-10 pb-2 px-8 rounded-t-3xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start text-left pb-4 sm:pb-6">
                    <span> Voo </span>
                    <p className="text-gray-800 font-bold"> {flight} </p>
                </div>

                <div className="flex flex-col pb-4 sm:pb-6 items-end text-right">
                    <span> Data </span>
                    <p className="text-gray-800 font-bold"> {flightDate} </p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start text-left pb-4 sm:pb-6">
                    <span> {boardingCity} </span>
                    <h1 className="text-gray-800 font-bold text-4xl uppercase">
                        {boardingAcronym}
                    </h1>
                    <p className="text-gray-800">{boardingTime}</p>
                </div>

                <Image
                    src={airplaneIcon}
                    alt="The icon represents an airplane"
                />

                <div className="flex flex-col pb-4 sm:pb-6 items-end text-right">
                    <span> {landingCity} </span>
                    <h1 className="text-gray-800 font-bold text-4xl uppercase">
                        {landingAcronym}
                    </h1>
                    <p className="text-gray-800"> {landingTime} </p>
                </div>
            </div>
        </div>
    )
}
