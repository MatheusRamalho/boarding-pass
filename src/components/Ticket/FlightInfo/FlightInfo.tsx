import airplaneIcon from '../../../assets/svgs/airplane.svg';

import { TicketFlightInfotWrapper } from "./FlightInfo.styles";
import { TicketFlightInfoProps } from "./FlightInfo.types";

export const TicketFlightInfo = ({ flight, flightDate, boardingCity, boardingAcronym, boardingTime, landingCity, landingAcronym, landingTime }: TicketFlightInfoProps) => {
    return (
        <TicketFlightInfotWrapper>
            <div className="flight-info-left">
                <div className="flight-info-item">
                    <span> Voo </span>
                    <p> {flight} </p>
                </div>

                <div className="flight-info-item flight-info-item--end">
                    <span> Data </span>
                    <p> {flightDate} </p>
                </div>
            </div>

            <div className="flight-info-right">
                <div className="flight-info-item">
                    <span> {boardingCity} </span>
                    <h1> {boardingAcronym} </h1>
                    <p className="text-pattern"> {boardingTime} </p>
                </div>

                <img
                    src={airplaneIcon}
                    alt="The icon represents an airplane"
                />

                <div className="flight-info-item flight-info-item--end">
                    <span> {landingCity} </span>
                    <h1> {landingAcronym} </h1>
                    <p className="text-pattern"> {landingTime} </p>
                </div>
            </div>
        </TicketFlightInfotWrapper>
    );
}
