import { TicketPassengerInfoWrapper } from "./PassengerInfo.styles";
import { TicketPassengerInfoProps } from "./PassengerInfo.types";

export const TicketPassengerInfo = ({ passenger, seat }: TicketPassengerInfoProps) => {
    return (
        <TicketPassengerInfoWrapper>
            <div>
                <span> Passageiro </span>
                <p> {passenger} </p>
            </div>

            <div>
                <span> Assento </span>
                <p> {seat} </p>
            </div>
        </TicketPassengerInfoWrapper>
    );
}
