import { TicketBoardingInfoProps } from "./BoardingInfo.types";

export const TicketBoardingInfo = ({ boardingTime, terminal, gate, boardingGroup }: TicketBoardingInfoProps) => {
    return (
        <div className="bg-white py-6 px-8 rounded-b-3xl">
            <div className="flex">
                <div className="">
                    <div className="">
                        <span className="text-gray-600"> Embarque </span>
                        <p className="text-black"> {boardingTime} </p>
                    </div>

                    <div className="">
                        <span className="text-gray-600"> Terminal </span>
                        <p className="text-black"> {terminal} </p>
                    </div>

                    <div className="">
                        <span className="text-gray-600"> Portão </span>
                        <p className="text-black"> {gate} </p>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    {/* QR code */}

                    <span className="text-gray-600"> Grupo de embarque: {boardingGroup} </span>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <p className="text-black">
                    <strong> Atenção: </strong>
                    o portão fecha {boardingTime}
                </p>
            </div>
        </div>
    );
}
