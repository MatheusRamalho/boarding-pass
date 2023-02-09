import { TicketPassengerInfoProps } from "./PassengerInfo.types";

export const TicketPassengerInfo = ({ passenger, seat }: TicketPassengerInfoProps) => {
    return (
        <div className="bg-white py-6 px-8 flex items-center justify-between">
            <div className="flex flex-col items-start">
                <span className="text-gray-600"> Passageiro </span>
                <p className="text-black">
                    {passenger}
                </p>
            </div>

            <div className="flex flex-col items-end">
                <span className="text-gray-600"> Assento </span>
                <p className="text-black">
                    {seat}
                </p>
            </div>
        </div>
    );
}
