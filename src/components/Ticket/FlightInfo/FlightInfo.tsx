import { TicketFlightInfoProps } from "./FlightInfo.types";

export const TicketFlightInfo = ({ flight, flightDate, boardingCity, boardingAcronym, boardingTime, landingCity, landingAcronym, landingTime }: TicketFlightInfoProps) => {
    return (
        <div className="bg-white py-6 px-8 rounded-t-3xl">
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start">
                    <span className="text-gray-600">
                        Voo
                    </span>

                    <p className="text-black">
                        {flight}
                    </p>
                </div>

                <div className="flex flex-col items-end">
                    <span className="text-gray-600">
                        Data
                    </span>

                    <p className="text-black">
                        {flightDate}
                    </p>
                </div>
            </div>

            <div className="flex items-end justify-between">
                <div className="flex flex-col items-start">
                    <span className="text-gray-600">
                        {boardingCity}
                    </span>

                    <h4 className="font-black uppercase text-black">
                        {boardingAcronym}
                    </h4>

                    <p className="text-black uppercase">
                        {boardingTime}
                    </p>
                </div>

                <span className="icon" />

                <div className="flex flex-col items-end">
                    <span className="text-gray-600">
                        {landingCity}
                    </span>

                    <h4 className="font-black uppercase text-black">
                        {landingAcronym}
                    </h4>

                    <p className="text-black">
                        {landingTime}
                    </p>
                </div>
            </div>
        </div>
    );
}
