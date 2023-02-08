import { TicketBoardingInfoProps } from "./BoardingInfo.types";

export const TicketBoardingInfo = ({ boardingTime, terminal, gate, boardingGroup }: TicketBoardingInfoProps) => {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <span> Embarque </span>
                        <p> {boardingTime} </p>
                    </div>

                    <div className="">
                        <span> Terminal </span>
                        <p> {terminal} </p>
                    </div>

                    <div className="">
                        <span> Portão </span>
                        <p> {gate} </p>
                    </div>
                </div>

                <div className="">
                    {/* QR code */}

                    <span className=""> Grupo de embarque: {boardingGroup} </span>
                </div>
            </div>

            <div className="">
                <p>
                    <strong> Atenção: </strong>
                    o portão fecha {boardingTime}
                </p>
            </div>
        </div>
    );
}
