import { TicketPassengerInfoProps } from "./PassengerInfo.types";

export const TicketPassengerInfo = ({ passenger, seat }: TicketPassengerInfoProps) => {
    return (
        <div className="">
            <div className="">
                <p> Passageiro </p>
                <p>
                    <strong> {passenger} </strong>
                </p>
            </div>

            <div className="">
                <p> Assento </p>
                <p>
                    <strong> {seat} </strong>
                </p>
            </div>
        </div>
    );
}
