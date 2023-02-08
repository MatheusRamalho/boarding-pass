import { TicketFlightInfoProps } from "./FlightInfo.types";

export const TicketFlightInfo = ({ flight, flightDate, boardingCity, boardingAcronym, boardingTime, landingCity, landingAcronym, landingTime }: TicketFlightInfoProps) => {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <span> Voo </span>
                    <p> {flight} </p>
                </div>

                <div className="">
                    <span> Data </span>
                    <p> {flightDate} </p>
                </div>
            </div>

            <div className="">
                <div className="">
                    <span> {boardingCity} </span>
                    <h4> {boardingAcronym} </h4>
                    <p> {boardingTime} </p>
                </div>

                <span className="icon" />

                <div className="">
                    <span> {landingCity} </span>
                    <h4> {landingAcronym} </h4>
                    <p> {landingTime} </p>
                </div>
            </div>
        </div>
    );
}
