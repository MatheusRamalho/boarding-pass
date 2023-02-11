import qrCode from '../../../assets/svgs/qrcode.svg';

import { TicketBoardingInfoWrapper } from "./BoardingInfo.styles";
import { TicketBoardingInfoProps } from "./BoardingInfo.types";

export const TicketBoardingInfo = ({ boardingTime, terminal, gate, boardingGroup }: TicketBoardingInfoProps) => {
    return (
        <TicketBoardingInfoWrapper>
            <div className="boarding-info-wrapper">
                <div className="">
                    <div className="boarding-info-item">
                        <span> Embarque </span>
                        <p className="boarding-info-variant"> {boardingTime} </p>
                    </div>

                    <div className="boarding-info-item">
                        <span> Terminal </span>
                        <p> {terminal} </p>
                    </div>

                    <div className="boarding-info-item">
                        <span> Portão </span>
                        <p> {gate} </p>
                    </div>
                </div>

                <div className="boarding-info-qr-code">
                    <img
                        src={qrCode}
                        alt="QR code"
                    />
                    <span> Grupo de embarque: {boardingGroup} </span>
                </div>
            </div>

            <div className="boarding-info-notice flex items-center justify-center">
                <p className="text-pattern">
                    <strong> Atenção: </strong>
                    o portão fecha {boardingTime}
                </p>
            </div>
        </TicketBoardingInfoWrapper>
    );
}
